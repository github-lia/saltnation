"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface SessionData {
  amount_total: number;
  [key: string]: unknown;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<SessionData | null>(null);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data: SessionData) => {
          setSession(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Processing...</h1>
          <p>Please wait while we confirm your donation.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="relative z-10 max-w-md w-full text-center">
        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-gray-300 mb-6">
          Your donation has been successfully processed. We truly appreciate
          your support for our mission.
        </p>
        {session && (
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-gray-600">
            <p className="text-sm text-gray-300">
              Amount:{" "}
              <span className="font-semibold text-white">
                ${(session.amount_total / 100).toFixed(2)}
              </span>
            </p>
            <p className="text-sm text-gray-300">
              Payment ID: <span className="font-mono text-xs">{sessionId}</span>
            </p>
          </div>
        )}
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
            <p>Please wait...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
