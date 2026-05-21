import type { Metadata } from "next";
import { headers } from "next/headers";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import PricingPlans from "@/components/sections/pricing-plans";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose a CardGit plan for digital business cards, team cards, analytics, branded templates, and smarter professional networking.",
};

function envNumber(name: string, fallback: number) {
  const value = process.env[name];
  if (!value) return fallback;

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

async function getCountryCode() {
  const headerStore = await headers();
  return (
    headerStore.get("x-vercel-ip-country") ||
    headerStore.get("cf-ipcountry") ||
    headerStore.get("x-country-code") ||
    ""
  ).toUpperCase();
}

export default async function PricingPage() {
  const country = await getCountryCode();
  const isNigeria = country === "NG";
  const currency = isNigeria
    ? { code: "NGN" as const, symbol: "₦", locale: "en-NG" }
    : { code: "GBP" as const, symbol: "£", locale: "en-GB" };

  const prices = isNigeria
    ? {
        premiumMonthly: envNumber("CARDGIT_PRICE_PREMIUM_MONTHLY_NGN", 8500),
        premiumAnnual: envNumber("CARDGIT_PRICE_PREMIUM_ANNUAL_NGN", 7200),
        teamMonthly: envNumber("CARDGIT_PRICE_TEAM_MONTHLY_NGN", 20000),
        teamAnnual: envNumber("CARDGIT_PRICE_TEAM_ANNUAL_NGN", 17000),
      }
    : {
        premiumMonthly: envNumber("CARDGIT_PRICE_PREMIUM_MONTHLY_GBP", 5.1),
        premiumAnnual: envNumber("CARDGIT_PRICE_PREMIUM_ANNUAL_GBP", 4.35),
        teamMonthly: envNumber("CARDGIT_PRICE_TEAM_MONTHLY_GBP", 12),
        teamAnnual: envNumber("CARDGIT_PRICE_TEAM_ANNUAL_GBP", 10),
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
      annualSaving: "14.7%",
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
      annualSaving: "16.7%",
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
