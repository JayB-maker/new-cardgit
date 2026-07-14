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
      question: "What is a Digital Business Card?",
      answer: [
        "A digital business card is an online version of a traditional card that stores your:",
        "Contact details",
        "Website & social links",
        "Services/products",
        "Booking or enquiry links",
        "It can be shared instantly via QR code, link, or NFC.",
      ],
    },
    {
      question: "What is the Best Digital Business Card in the UK?",
      answer: [
        "The best digital business card in the UK is one that allows instant sharing, lead capture, and real-time updates.",
        "CardGit stands out because it lets you:",
        "Share via QR code or link instantly",
        "Promote your website, products and services",
        "Capture leads and inquiries",
        "Showcase your social media profiles",
        "Track profile views and engagement",
        "Update details without reprinting",
      ],
    },
    {
      question: "Why CardGit?",
      answer: [
        "CardGit is more than a digital business card tool. It is a complete networking and business growth platform built for modern professionals, businesses, and event organisers in the UK.",
        "It combines:",
        "Digital business cards",
        "Lead capture tools",
        "Event networking features",
        "Business profile management",
        "Brand management",
        "It helps users make stronger first impressions, generate leads, and turn every interaction into an opportunity.",
      ],
    },
    {
      question: "What is CardGit Event?",
      answer: [
        "CardGit Event is an all-in-one event networking and management system for UK events such as conferences, seminars, workshops, and exhibitions.",
        "It allows organisers to:",
        "Create event pages",
        "Manage registrations",
        "Issue QR tickets",
        "Track attendance",
        "Promote sponsors and speakers",
        "Host physical, virtual, or hybrid events",
        "Organise multiple events at the same time",
        "Enable attendee networking",
        "Attendees also receive a digital profile for networking during and after the event.",
      ],
    },
    {
      question: "What is CardGit Enterprise?",
      answer: [
        "CardGit Enterprise is designed for organisations in the UK and beyond that want to manage digital business cards at scale.",
        "It enables companies to:",
        "Create branded employee cards",
        "Manage teams centrally",
        "Maintain brand consistency",
        "Track engagement and leads",
        "Promote services through employee profiles",
        "Ideal for corporate teams, agencies, and institutions.",
      ],
    },
    {
      question: "Can CardGit be used for conferences and networking events?",
      answer: [
        "Yes - CardGit is widely used across UK conferences and networking events.",
        "CardGit helps attendees:",
        "Share details instantly at UK events",
        "Collect leads and follow-ups",
        "Network faster and more professionally",
      ],
    },
    {
      question: "Does CardGit support virtual and hybrid events?",
      answer: [
        "Yes - CardGit supports virtual, hybrid, and in-person events.",
        "With CardGit, users can connect seamlessly whether:",
        "Online (virtual meetings/webinars)",
        "Physical networking events",
        "Hybrid conferences combining both",
      ],
    },
    {
      question: "How does CardGit help generate leads?",
      answer: [
        "CardGit helps UK professionals generate leads by turning every interaction into a data capture opportunity.",
        "CardGit enables:",
        "Instant lead capture at networking events",
        "Direct enquiries from your digital profile",
        "Tracking engagement and interest",
        "Smarter follow-up conversions",
      ],
    },
    {
      question: "How much does a digital business card cost in the UK?",
      answer: [
        "In the UK, digital business card pricing varies depending on features and platforms.",
        "With CardGit, users benefit from a more cost-effective alternative compared to many traditional or international digital card platforms, especially when considering features like:",
        "Lead capture",
        "Event networking tools",
        "Team management",
        "Analytics and tracking",
        "CardGit provides stronger value for UK businesses looking to reduce printing and upgrade networking.",
      ],
    },
    {
      question: "Why are digital business cards better than paper business cards?",
      answer: [
        "Digital business cards are better because they:",
        "Never run out or get lost",
        "Can be updated instantly",
        "Capture leads automatically",
        "Include links, videos, and social profiles",
        "Support sustainability in the UK and beyond (paperless networking)",
      ],
    },
    {
      question: "Why UK businesses are switching to digital business cards?",
      answer: [
        "UK businesses are switching because they want:",
        "Faster networking",
        "Better lead tracking",
        "Reduced printing costs",
        "Stronger digital presence",
        "Smarter event engagement",
      ],
    },
    {
      question: "Is CardGit free?",
      answer:
        "Yes, CardGit is free. CardGit offers accessible options, including entry-level access, with upgraded features available for professionals and businesses.",
    },
    {
      question: "Can I track profile views?",
      answer: [
        "Yes. You can track:",
        "Profile views",
        "Engagement activity",
        "Link clicks and interactions",
      ],
    },
    {
      question: "How do digital business cards work in the UK?",
      answer: [
        "They work by creating a digital profile that can be shared via:",
        "QR code",
        "Link",
        "NFC tap",
        "Recipients open your profile instantly on their phone.",
      ],
    },
    {
      question: "Can businesses manage employee digital business cards with CardGit?",
      answer:
        "Yes. With CardGit Enterprise, businesses can centrally manage employee cards, branding, and analytics.",
    },
    {
      question: "Is CardGit GDPR conscious?",
      answer:
        "Yes. CardGit is designed with data privacy in mind and supports GDPR-aligned data handling for UK and EU users.",
    },
    {
      question: "Can I share my card with a QR code?",
      answer:
        "Yes. Every CardGit profile can be shared instantly using a QR code for fast networking.",
    },
    {
      question: "Can I create multiple digital business cards?",
      answer: [
        "Yes. You can create multiple cards for:",
        "Different roles",
        "Different businesses",
        "Different branding needs",
      ],
    },
    {
      question: "Can I use CardGit at networking events?",
      answer:
        "Yes. It is designed specifically for networking events, conferences, and business meetups to help you connect and capture leads instantly.",
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
              <AccordionContent className="space-y-2 pb-4 text-base text-[#000000B2]">
                {Array.isArray(faq.answer) ? (
                  faq.answer.map((line) => <p key={line}>{line}</p>)
                ) : (
                  <p>{faq.answer}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
