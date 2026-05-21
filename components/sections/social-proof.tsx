"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "Honestly, just pulling up my QR code on my phone is a lifesaver at events. People scan it and boom, my info is in their contacts.",
      author: "Jessica Miller",
      role: "Marketing Consultant",
      image: "/assets/testimonial-1.png",
    },
    {
      quote:
        "Managing our team's cards on CardGit boosted our brand visibility and drastically increased monthly revenue",
      author: "Daniel Kim",
      role: "Software Engineer",
      image: "/assets/testimonial-2.png",
    },
    {
      quote:
        "I love that I can actually drop a link to our latest product right on the CardGit landing page for my business.",
      author: "Daniel Kelani",
      role: "Security Analyst",
      image: "/assets/testimonial-3.png",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50K+", label: "Cards Created" },
    { value: "150K+", label: "Countries" },
    { value: "4.9/5", label: "User Rating" },
  ];

  return (
    <section className="reveal-section w-full bg-gradient-to-br from-[#3C4CBF] to-[#3C4CBF] py-14 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Header */}
          <div className="scroll-drift space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-white tracking-widest uppercase">
                Trusted by Professionals Worldwide
              </p>
              <h2 className="text-2xl lg:text-3xl font-medium text-white">
                Smarter connections, better opportunities.
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[396px] ">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <p className="text-lg lg:text-[22px] font-medium text-white">
                    {stat.value}
                  </p>
                  <p className="text-white text-sm tracking-tighter ">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:col-span-2 lg:ml-6 ">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="interactive-card scroll-drift space-y-8 rounded-2xl border-[0.5px] border-[#0000000A] bg-[#283486] p-5 opacity-90 backdrop-blur"
              >
                {/* Quote Icon */}
                <Image src="/assets/quote.png" alt="Quote Icon" width={24} height={24} />

                {/* Quote */}
                <div className="space-y-6">
                  <p className="text-white leading-relaxed text-base ">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 mt-auto ">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={53}
                      height={40}
                    />
                    <div>
                      <p className="font-medium text-xl text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-base text-[#FFFFFF99]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
