"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Currency = {
  code: "GBP" | "NGN";
  symbol: string;
  locale: string;
};

type Plan = {
  name: string;
  monthly: number;
  annual: number;
  monthlyNote: string;
  annualNote: string;
  cta: string;
  highlighted?: boolean;
  features: { label: string; included: boolean }[];
  annualSaving?: string;
};

type PricingPlansProps = {
  currency: Currency;
  plans: Plan[];
};

function formatPrice(amount: number, currency: Currency) {
  if (amount === 0) return `${currency.symbol}0`;

  const formatted = new Intl.NumberFormat(currency.locale, {
    maximumFractionDigits: currency.code === "GBP" ? 2 : 0,
    minimumFractionDigits: currency.code === "GBP" ? 0 : 0,
  }).format(amount);

  return `${currency.symbol}${formatted}`;
}

export default function PricingPlans({ currency, plans }: PricingPlansProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="reveal-section bg-white px-4 py-14 sm:px-6 md:py-24 lg:px-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 text-center md:mb-16">
          <h1 className="text-[30px] font-medium text-black md:text-[34px]">
            Pricing plan
          </h1>
          <div className="mt-12 inline-flex rounded-[19px] border-[0.5px] border-[#0000001F] bg-[#F3F4F6] p-1">
            {(["monthly", "annual"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                className={`rounded-[13px] px-3 py-2 text-base font-medium capitalize transition border-[0.5px] ${
                  billing === option
                    ? "bg-white text-[#4055F1] border-[#0000001F] "
                    : "text-[#303338] hover:text-[#4055F1] border-transparent"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.annual;
            const note =
              billing === "monthly" ? plan.monthlyNote : plan.annualNote;

            return (
              <article
                key={plan.name}
                className={`interactive-card flex min-h-[620px] flex-col rounded-[12px] border-[4px] bg-white p-6 md:py-8 md:px-4 ${
                  plan.highlighted ? "border-[#C4CAFB]" : "border-[#E9E9E9]"
                }`}
              >
                <p className="mb-7 text-base font-medium uppercase text-[#525861]">
                  {plan.name}
                </p>
                <div className="mb-6 flex flex-wrap items-end gap-2">
                  <p className="text-[42px] font-medium leading-none text-[#4055F1]">
                    {formatPrice(price, currency)}
                  </p>
                  {billing === "annual" && plan.annualSaving ? (
                    <span className="pb-1 text-base text-[#525861]">
                      • Save {plan.annualSaving}
                    </span>
                  ) : null}
                </div>
                <p className="mb-10 text-base text-[#525861]">{note}</p>

                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-center justify-between gap-4 text-lg text-[#525861]"
                    >
                      <span>{feature.label}</span>
                      {feature.included ? (
                        <Check className="h-5 w-5 shrink-0 text-[#087A31]" />
                      ) : (
                        <X className="h-5 w-5 shrink-0 text-[#525861]" />
                      )}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="btn-lift mt-auto h-13 rounded-[8px] bg-[#4055F1] text-base text-white hover:bg-[#3245D8]"
                >
                  <a href="https://www.app.cardgit.com/auth/signup">
                    {plan.cta}
                  </a>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
