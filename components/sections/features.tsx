"use client";

import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Increase Brand Visibility",
      description:
        "Get discovered across industries, events, cities, and professional networks with a digital presence people can access instantly.",
      icon: "/assets/feature-1.png",
    },
    {
      title: "Turn Every Interaction Into Revenue",
      description:
        "Promote your products, services, offers, and payment links directly from your digital card — converting viewers into paying customers.",
      icon: "/assets/feature-2.png",
    },
    {
      title: "Never Miss an Opportunity Again",
      description:
        "Allow prospects and clients to book appointments instantly, connect immediately, and reach you through multiple channels.",
      icon: "/assets/feature-3.png",
    },
    {
      title: "Make Your Entire Team Your Marketing Force",
      description:
        "Equip every employee with branded digital cards that consistently promote your business everywhere they network.",
      icon: "/assets/feature-4.png",
    },
    {
      title: "Promote Products & Campaigns in Real Time",
      description:
        "Update adverts, promotions, new products, events, or announcements instantly across your entire team’s cards.",
      icon: "/assets/feature-5.png",
    },
    {
      title: "Eco-Friendly Networking",
      description:
        "Reduce paper waste and support a more sustainable, modern way of doing business.",
      icon: "/assets/feature-6.png",
    },
    {
      title: "Build Stronger Client Relationships",
      description:
        "Give customers seamless access to your social platforms, websites, products, booking pages, catalogs, and contact channels.",
      icon: "/assets/feature-7.png",
    },
    {
      title: "Know Who’s Interested in Your Business",
      description:
        "Track engagement, monitor profile activity, and understand how people interact with your products and services.",
      icon: "/assets/feature-8.png",
    },
    {
      title: "Generate High-Quality Leads Effortlessly",
      description:
        "Capture visitor information directly from your card and convert interest into real business conversations.",
      icon: "/assets/feature-9.png",
    },
    {
      title: "Instant Appointment Booking",
      description:
        "Allow clients and prospects to book meetings, consultations, or calls directly from your profile.",
      icon: "/assets/feature-10.png",
    },
    {
      title: "Interactive Product & Service Showcase",
      description:
        "Display products, services, pricing, catalogs, videos, and landing pages with direct call-to-action buttons.",
      icon: "/assets/feature-11.png",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Track profile views, visitor engagement, appointments booked, click-through rates, and audience locations",
      icon: "/assets/feature-12.png",
    },
  ];
  const slidingFeatures = [...features, ...features];

  return (
    <section id="benefits" className="reveal-section w-full bg-gradient-to-b from-[#CFD5FC26] to-[#CFD5FC26] py-14 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-18">
        <div className="mb-10 space-y-6 text-center md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-black">
            More Than a Card — A Complete Business Growth Tool
          </h2>
          <p className="text-lg text-[#000000B2] max-w-xl mx-auto leading-relaxed">
            CardGit helps professionals, teams, and businesses create meaningful
            connections, generate opportunities, and grow visibility — all from
            one powerful digital identity platform.
          </p>
        </div>

        <div className="benefit-marquee overflow-hidden pb-4">
          <div className="benefit-track flex min-w-max gap-6">
            {slidingFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="interactive-card scroll-drift h-fit w-80 flex-shrink-0 space-y-8 rounded-[16px] border-[0.5px] border-gray-100 bg-white p-6 shadow-sm"
                aria-hidden={idx >= features.length}
              >
                {/* Icon */}

                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-black">
                    {feature.title}
                  </h3>
                  <p className="text-[#000000B2] text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
