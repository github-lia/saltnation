"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "./Button";
import { HiArrowRight } from "react-icons/hi";
import {
  SiVisa,
  SiStripe,
  SiPaypal,
  SiMastercard,
  SiGooglepay,
} from "react-icons/si";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface FormData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  amount: string;
  frequency: "once" | "monthly" | "twice-yearly" | "yearly";
}

const DonationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    amount: "",
    frequency: "once",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFrequencyChange = (frequency: FormData["frequency"]) => {
    setFormData((prev) => ({
      ...prev,
      frequency,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.cardholderName.trim())
      newErrors.cardholderName = "Cardholder name is required";
    if (!formData.cardNumber.trim())
      newErrors.cardNumber = "Card number is required";
    if (!formData.expiryDate.trim())
      newErrors.expiryDate = "Expiry date is required";
    if (!formData.cvc.trim()) newErrors.cvc = "CVC is required";
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const stripeData = {
        cardholderName: formData.cardholderName,
        amount: formData.amount,
        frequency: formData.frequency,
        // Note: In production, card details should be handled by Stripe Elements for security
        // This is just for the structure - we'll implement proper Stripe Elements later
      };

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stripeData),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe failed to load");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error("Stripe error:", error);
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const frequencyOptions = [
    { value: "once", label: "Just Once" },
    { value: "monthly", label: "Once a Month" },
    { value: "twice-yearly", label: "Twice a Year" },
    { value: "yearly", label: "Once a Year" },
  ];

  return (
    <>
      {/* Payment Methods - Desktop */}
      <div className="hidden lg:block">
        <h3 className="text-xl text-white mb-4">Payment methods</h3>
        <div className="flex space-x-4">
          <SiVisa size={48} />
          <SiStripe size={48} />
          <SiPaypal size={48} />
          <SiMastercard size={48} />
          <SiGooglepay size={48} />
        </div>
      </div>

      {/* Payment Methods - Mobile/Tablet */}
      <div className="lg:hidden">
        <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">
          Payment methods
        </h3>
        <div className="flex flex-wrap gap-4">
          <SiVisa size={36} className="md:text-5xl" />
          <SiStripe size={36} className="md:text-5xl" />
          <SiPaypal size={36} className="md:text-5xl" />
          <SiMastercard size={36} className="md:text-5xl" />
          <SiGooglepay size={36} className="md:text-5xl" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
        {/* Amount Selection - Desktop */}
        <div className="hidden lg:block">
          <h3 className="text-xl text-white mb-4">
            Choose how much you would like to give
          </h3>
          <div className="relative w-64">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black bg-white px-1">
              $
            </span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter Amount"
              className={`w-full pl-8 pr-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                errors.amount ? "border-red-500" : "border-white"
              }`}
              required
            />
          </div>
          {errors.amount && (
            <p className="text-red-400 text-sm mt-1">{errors.amount}</p>
          )}
          <div className="flex gap-4 mt-4">
            {frequencyOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  handleFrequencyChange(option.value as FormData["frequency"])
                }
                className={`border border-white text-white px-4 py-2 rounded-lg transition-all ${
                  formData.frequency === option.value
                    ? "bg-white bg-opacity-20"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selection - Mobile/Tablet */}
        <div className="lg:hidden">
          <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">
            Choose how much you would like to give
          </h3>
          <div className="relative w-full max-w-xs md:max-w-sm">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black bg-white px-1">
              $
            </span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter Amount"
              className={`w-full pl-8 pr-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                errors.amount ? "border-red-500" : "border-white"
              }`}
              required
            />
          </div>
          {errors.amount && (
            <p className="text-red-400 text-sm mt-1">{errors.amount}</p>
          )}
          <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
            {frequencyOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  handleFrequencyChange(option.value as FormData["frequency"])
                }
                className={`border border-white text-white px-3 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-lg transition-all ${
                  formData.frequency === option.value
                    ? "bg-white bg-opacity-20"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card Details - Desktop */}
        <div className="hidden lg:block">
          <h3 className="text-xl text-white mb-4">Card Details</h3>
          <div className="space-y-4">
            {/* Cardholder Name */}
            <div>
              <label className="block text-white mb-2">
                {"Cardholder's Name"}
              </label>
              <input
                type="text"
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleChange}
                placeholder="Enter name on card"
                className={`w-full px-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                  errors.cardholderName ? "border-red-500" : "border-white"
                }`}
                required
              />
              {errors.cardholderName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.cardholderName}
                </p>
              )}
            </div>
            {/* Card Number */}
            <div>
              <label className="block text-white mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className={`w-full px-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                  errors.cardNumber ? "border-red-500" : "border-white"
                }`}
                required
              />
              {errors.cardNumber && (
                <p className="text-red-400 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>
            {/* Expiry Date and CVC in one row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className={`w-full px-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                    errors.expiryDate ? "border-red-500" : "border-white"
                  }`}
                  required
                />
                {errors.expiryDate && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.expiryDate}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-white mb-2">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  placeholder="123"
                  className={`w-full px-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                    errors.cvc ? "border-red-500" : "border-white"
                  }`}
                  required
                />
                {errors.cvc && (
                  <p className="text-red-400 text-sm mt-1">{errors.cvc}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Card Details - Mobile/Tablet */}
        <div className="lg:hidden">
          <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">
            Card Details
          </h3>
          <div className="space-y-3 md:space-y-4">
            {/* Cardholder Name */}
            <div>
              <label className="block text-white mb-1 md:mb-2">
                {"Cardholder's Name"}
              </label>
              <input
                type="text"
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleChange}
                placeholder="Enter name on card"
                className={`w-full px-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                  errors.cardholderName ? "border-red-500" : "border-white"
                }`}
                required
              />
              {errors.cardholderName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.cardholderName}
                </p>
              )}
            </div>
            {/* Card Number */}
            <div>
              <label className="block text-white mb-1 md:mb-2">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className={`w-full px-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                  errors.cardNumber ? "border-red-500" : "border-white"
                }`}
                required
              />
              {errors.cardNumber && (
                <p className="text-red-400 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>
            {/* Expiry Date and CVC in one row */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block text-white mb-1 md:mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className={`w-full px-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                    errors.expiryDate ? "border-red-500" : "border-white"
                  }`}
                  required
                />
                {errors.expiryDate && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.expiryDate}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-white mb-1 md:mb-2">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  placeholder="123"
                  className={`w-full px-4 py-2 rounded-lg bg-transparent border text-white placeholder-white ${
                    errors.cvc ? "border-red-500" : "border-white"
                  }`}
                  required
                />
                {errors.cvc && (
                  <p className="text-red-400 text-sm mt-1">{errors.cvc}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button - Desktop */}
        <div className="hidden lg:block">
          <Button
            type="submit"
            variant="orange"
            className="w-full sm:w-auto"
            disabled={loading}
          >
            {loading ? "Processing..." : "Proceed To The Next Step"}
            {!loading && <HiArrowRight className="inline-block ml-2" />}
          </Button>
        </div>

        {/* Submit Button - Mobile/Tablet */}
        <div className="lg:hidden">
          <Button
            type="submit"
            variant="orange"
            className="w-full md:w-auto"
            disabled={loading}
          >
            {loading ? "Processing..." : "Proceed To The Next Step"}
            {!loading && <HiArrowRight className="inline-block ml-2" />}
          </Button>
        </div>
      </form>
    </>
  );
};

export default DonationForm;
