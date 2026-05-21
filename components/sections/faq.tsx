"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Is CardGit free to use?",
      answer:
        "Yes, CardGit offers a free plan with all basic features. We also have premium plans for users who want advanced features and customization options.",
    },
    {
      question: "How does appointment booking work?",
      answer:
        "You can set your availability in your CardGit settings, and people can book appointments directly through your digital card. Integrations with calendar apps are available for seamless scheduling.",
    },
    {
      question: "Can I lock our company branding for the whole team?",
      answer:
        "Yes, team administrators can set company branding standards that all team members must follow, ensuring consistent brand representation across all digital cards.",
    },
    {
      question: "How many team cards can I manage at once?",
      answer:
        "There is no limit to how many team cards you can manage. You can create and manage unlimited cards for your entire organization within your account.",
    },
    {
      question: "Can I customize my digital card?",
      answer:
        "Absolutely! You can fully customize your digital card with your branding, colors, photos, contact information, social media links, and much more.",
    },
  ];

  return (
    <section id="faq" className="reveal-section w-full bg-[#F2F4FF] py-14 md:py-24">
      <div className="mx-auto flex flex-col justify-between gap-10 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="text-[28px] lg:text-[34px] font-medium text-black">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-[604px] bg-white rounded-[16px] overflow-hidden">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-b-[0.5px] border-gray-200 rounded-lg px-8 py-2 bg-white"
            >
              <AccordionTrigger className="text-lg text-[#000000CC]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#000000B2] pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
