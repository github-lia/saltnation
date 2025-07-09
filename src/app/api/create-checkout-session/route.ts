import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { amount, frequency } = await request.json();

    // Convert frequency to Stripe interval
    const getStripeInterval = (freq: string) => {
      switch (freq) {
        case 'monthly': return { mode: 'subscription', interval: 'month' };
        case 'yearly': return { mode: 'subscription', interval: 'year' };
        case 'twice-yearly': return { mode: 'subscription', interval: 'month', interval_count: 6 };
        default: return { mode: 'payment' };
      }
    };

    const stripeConfig = getStripeInterval(frequency);
    const amountInCents = Math.round(parseFloat(amount) * 100);

    let sessionConfig: Stripe.Checkout.SessionCreateParams = {
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/#icommit`,
    };

    if (stripeConfig.mode === 'subscription') {
      // For recurring payments
      sessionConfig = {
        ...sessionConfig,
        mode: 'subscription',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'ICommit Donation',
                description: `${frequency} donation to support our mission`,
              },
              unit_amount: amountInCents,
              recurring: {
                interval: stripeConfig.interval as 'month' | 'year',
                interval_count: stripeConfig.interval_count || 1,
              },
            },
            quantity: 1,
          },
        ],
      };
    } else {
      // For one-time payments
      sessionConfig = {
        ...sessionConfig,
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'ICommit Donation',
                description: 'One-time donation to support our mission',
              },
              unit_amount: amountInCents,
            },
            quantity: 1,
          },
        ],
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
// This code handles the creation of a Stripe checkout session for both one-time and recurring donations.
// It determines the payment mode based on the frequency provided in the request and constructs the session configuration