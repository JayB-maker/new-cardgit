"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function RealFeatures() {
  const slides = [
    {
      flier: "/assets/smart-lead.png",
      background: "/assets/smart-lead-back.png",
      textColor: "text-[#FFFFFF]",
      points: [
        "Know who is interested in you anywhere in the world.",
        "Capture leads instantly without forms, friction, or external landing pages.",
        "Receive enquiries, interest, and feedback in real time for faster follow-up",
        "Convert casual networking into measurable business leads",
      ],
    },
    {
      flier: "/assets/appointment-booking.png",
      background: "/assets/smart-lead-back.png",
      textColor: "text-[#FFFFFF]",
      points: [
        "Let clients schedule meetings, consultations, or calls directly from your card.",
        "Remove the need for back-and-forth messaging or external booking tools",
        "Sync networking directly with your availability and business workflow",
        "Increase conversion from interest to confirmed meetings",
      ],
    },
    {
      flier: "/assets/social-media-integration.png",
      background: "/assets/social-media-bg.png",
      textColor: "text-[#FFFFFF]",
      points: [
        "Know who is interested in you anywhere in the world.",
        "Capture leads instantly without forms, friction, or external landing pages.",
        "Receive enquiries, interest, and feedback in real time for faster follow-up",
        "Convert casual networking into measurable business leads",
      ],
    },
    {
      flier: "/assets/networking-seconds.png",
      background: "/assets/network-bg.png",
      textColor: "text-[#FFFFFF]",
      points: [
        "Share your unique QR code linked to your digital business card",
        "Access card information by simply scanning code with a phone camera",
        "Perfect for events, meetings, conferences, and offline networking",
        "Eliminate the need for printed business cards completely.",
      ],
    },
    {
      flier: "/assets/interactive-product.png",
      background: "/assets/smart-lead-back.png",
      textColor: "text-[#FFFFFF]",
      points: [
        "Display products, services, pricing, videos, and catalogs in one place.",
        "Add clear call-to-action buttons like “Buy,” “Enquire,” or “Book Now”",
        "Share your product offering with prospects instantly without leaving your card",
        "Ideal for sales professionals, freelancers, and businesses showcasing offers.",
      ],
    },
    {
      flier: "/assets/one-team.png",
      background: "/assets/smart-lead-back.png",
      textColor: "text-[#FFFFFF]",
      points: [
        "Manage employee digital cards from one central dashboard",
        "Create brand consistency across all team members",
        "Onboarding and update staff contact information easily",
        "Maintain a professional, unified external image",
      ],
    },
    {
      flier: "/assets/one-user.png",
      background: "/assets/smart-lead-back.png",
      textColor: "text-[#FFFFFF]",
      points: [
        "Create separate cards for business, personal, events, or side projects",
        "Tailor messaging for different audiences and purposes",
        "Keep branding consistent despite flexible roles",
        "Ideal for entrepreneurs, creators, and teams managing multiple brands",
        "Team Card Management",
      ],
    },
    {
      flier: "/assets/business-card.png",
      background: "/assets/business-card-bg.png",
      textColor: "text-[#FFFFFF]",
      points: [
        "Track views, clicks, and engagement on your digital card",
        "See how people interact with your profile and content",
        "Measure networking effectiveness and lead quality",
        "See insights to improve outreach and conversion strategies.",
      ],
    },
    {
      flier: "/assets/attendee-networking.png",
      background: "/assets/white-feature-bg.png",
      textColor: "text-[#3E4248]",
      points: [
        "Help people connect beyond quick introductions.",
        "Make it easy to discover and meet attendees.",
        "Encourage more intentional networking.",
        "Turn conversations into lasting connections.",
      ],
    },
    {
      flier: "/assets/challenges.png",
      background: "/assets/white-feature-bg.png",
      textColor: "text-[#3E4248]",
      points: [
        "Drive interaction with fun event tasks.",
        "Create activities attendees can complete.",
        "Reward participation with points.",
        "Increase engagement across the event.",
      ],
    },
    {
      flier: "/assets/event-agenda.png",
      background: "/assets/white-feature-bg.png",
      textColor: "text-[#3E4248]",
      points: [
        "Give attendees a clear view of the event schedule.",
        "Show the full event schedule in one place.",
        "Help attendees plan their day with ease.",
        "Reduce confusion and improve event flow.",
      ],
    },
    {
      flier: "/assets/gamification.png",
      background: "/assets/white-feature-bg.png",
      textColor: "text-[#3E4248]",
      points: [
        "Track views, clicks, and engagement on your digital card",
        "See how people interact with your profile and content",
        "Measure networking effectiveness and lead quality",
        "See insights to improve outreach and conversion strategies.",
      ],
    },
    {
      flier: "/assets/live-polls.png",
      background: "/assets/white-feature-bg.png",
      textColor: "text-[#3E4248]",
      points: [
        "Keep attendees involved in real time.",
        "Let attendees vote during live sessions.",
        "Turn passive listening into active participation.",
        "Gather instant feedback from the audience.",
      ],
    },
    {
      flier: "/assets/leaderboard.png",
      background: "/assets/white-feature-bg.png",
      textColor: "text-[#3E4248]",
      points: [
        "Reward active event participation.",
        "Rank attendees based on engagement.",
        "Add a competitive layer to the event.",
        "Motivate people to stay involved.",
      ],
    },
    {
      flier: "/assets/speaker-lineup.png",
      background: "/assets/white-feature-bg.png",
      textColor: "text-[#3E4248]",
      points: [
        "Showcase who’s speaking and when.",
        "Highlight speakers, hosts and panelists.",
        "Show who is presenting and what they’ll cover.",
        "Help attendees find the sessions that matter to them.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="reveal-section w-full bg-white py-14 md:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-14">
        <div className="mb-10 space-y-4 text-center md:mb-16">
          <h2 className="text-3xl lg:text-[34px] font-medium text-black">
            Features
          </h2>
          <p className="text-lg text-[#000000B2] max-w-xl mx-auto leading-relaxed">
            Powerful Features Built for Smart Networking
          </p>
        </div>

        <div
          className="max-w-[1332px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-0! shrink-0 w-full"
                >
                  <div className="relative h-[368px] md:h-[500px] lg:h-[661px] lg:min-h-[661px]">
                    <Image
                      src={slide.flier}
                      alt={`Feature slide ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>

                  <div className="relative h-[368px] md:h-[500px] lg:h-[661px] lg:min-h-[661px] flex items-center justify-center px-7">
                    <Image
                      src={slide.background}
                      alt={`Feature slide background ${index + 1}`}
                      fill
                      className="object-cover absolute"
                    />
                    <ul className="flex text-left flex-col gap-4 relative z-10 list-disc max-w-[498px]">
                      {slide.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className={`text-base lg:text-xl w-full ${slide.textColor} text-left mx-auto leading-relaxed`}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[#4055F1]"
                    : "w-2 bg-[#00000033] hover:bg-[#00000066]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
