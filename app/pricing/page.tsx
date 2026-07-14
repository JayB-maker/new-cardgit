import type { Metadata } from "next";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import PricingPlans from "@/components/sections/pricing-plans";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose a CardGit plan for digital business cards, team cards, analytics, branded templates, and smarter professional networking.",
};

function envNumber(name: string) {
  const value = process.env[name];
  if (!value) return 0;

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function envString(name: string, fallback: string) {
  return process.env[name] || fallback;
}

function envDiscount(name: string) {
  const value = process.env[name];
  if (!value) return undefined;

  return value.trim().endsWith("%") ? value.trim() : `${value.trim()}%`;
}

export default function PricingPage() {
  const currency = {
    code: envString("CARDGIT_PRICE_CURRENCY_CODE", "GBP"),
    symbol: envString("CARDGIT_PRICE_CURRENCY_SYMBOL", "£"),
    locale: envString("CARDGIT_PRICE_CURRENCY_LOCALE", "en-GB"),
  };

  const prices = {
    premiumMonthly: envNumber("CARDGIT_PRICE_PREMIUM_MONTHLY"),
    premiumAnnual: envNumber("CARDGIT_PRICE_PREMIUM_ANNUAL"),
    teamMonthly: envNumber("CARDGIT_PRICE_TEAM_MONTHLY"),
    teamAnnual: envNumber("CARDGIT_PRICE_TEAM_ANNUAL"),
  };

  const plans = [
    {
      name: "Free",
      monthly: 0,
      annual: 0,
      monthlyNote: "per month",
      annualNote: "per month",
      cta: "Get Started Free",
      features: [
        { label: "Create up to 2 cards", included: true },
        { label: "Basic view count", included: true },
        { label: "Limited templates", included: true },
        { label: "Products & services", included: false },
        { label: "Full analytics", included: false },
        { label: "Priority support", included: false },
      ],
    },
    {
      name: "Premium",
      monthly: prices.premiumMonthly,
      annual: prices.premiumAnnual,
      monthlyNote: "per month",
      annualNote: "Annually",
      annualSaving: envDiscount("CARDGIT_PRICE_PREMIUM_ANNUAL_DISCOUNT_PERCENT"),
      cta: "Get Premium",
      highlighted: true,
      features: [
        { label: "Create up to 5 cards", included: true },
        { label: "Products and services", included: true },
        { label: "Full analytics", included: true },
        { label: "Priority support", included: true },
        { label: "Card activity report", included: true },
        { label: "Custom card header", included: true },
      ],
    },
    {
      name: "Team",
      monthly: prices.teamMonthly,
      annual: prices.teamAnnual,
      monthlyNote: "per month • min 3 users",
      annualNote: "Annually • min 3 users",
      annualSaving: envDiscount("CARDGIT_PRICE_TEAM_ANNUAL_DISCOUNT_PERCENT"),
      cta: "Get Team",
      features: [
        { label: "Create up to 12 cards", included: true },
        { label: "Everything in Premium", included: true },
        { label: "Admin dashboard", included: true },
        { label: "Branded templates", included: true },
        { label: "Invoice billing", included: true },
        { label: "Dedicated onboarding", included: true },
        { label: "Card activity report", included: true },
        { label: "Custom card header", included: true },
      ],
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      <Header />
      <PricingPlans currency={currency} plans={plans} />
      <Footer />
    </main>
  );
}
