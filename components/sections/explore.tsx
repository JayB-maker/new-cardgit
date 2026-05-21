"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, Check } from "lucide-react";
import Image from "next/image";

export default function Explore() {
  const profiles = [
    {
      name: "Glory Ngozi",
      role: "UI/UX Designer",
      verified: true,
    },
    {
      name: "Glory Ngozi",
      role: "UI/UX Designer",
      verified: true,
    },
    {
      name: "Glory Ngozi",
      role: "UI/UX Designer",
      verified: true,
    },
    {
      name: "Glory Ngozi",
      role: "UI/UX Designer",
      verified: true,
    },
    {
      name: "Glory Ngozi",
      role: "UI/UX Designer",
      verified: true,
    },
    {
      name: "Glory Ngozi",
      role: "UI/UX Designer",
      verified: true,
    },
  ];

  return (
    <section id="explore" className="reveal-section w-full bg-[#CFD5FC26] py-14 md:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-14 space-y-12">
        {/* Left Section with Benefits */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0">
          {/* Left Content */}
          <div className="scroll-drift col-span-1 space-y-6">
            <p className="text-sm font-medium text-[#4055F1] tracking-widest uppercase">
              Explore
            </p>
            <h2 className="text-2xl lg:text-3xl font-medium text-black">
              Discover. Connect. Grow.
            </h2>

            <p className="text-[#303338] leading-relaxed text-base max-w-[408px] ">
              Explore page helps you discover professionals, businesses, and
              creatives through digital cards.
            </p>

            <div className="space-y-4">
              {[
                "Find people in your industry",
                "Discover new opportunities",
                "Build stronger networks",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#4055F1] rounded-full flex items-center justify-center text-white text-xs">
                    <Check className="w-4 h-4 stroke-5" />
                  </div>
                  <p className="text-[#3E4248] font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            <Button asChild className="btn-lift h-auto w-fit rounded-[8px] bg-[#4055F1] px-6 py-3 text-sm text-white hover:bg-[#3245D8]">
              <a href="https://app.cardgit.com">Explore Now</a>
            </Button>
          </div>

          {/* Right Content - Search and Grid */}
          <div className="space-y-6 lg:col-span-2">
            {/* Search Bar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1 relative max-w-[380px] ">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Explore Cards"
                  className="pl-10 py-6! bg-white border-[0.5px] border-[#0000001F] rounded-[8px] text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-4 py-3 border-[0.5px] border-[#0000001F] rounded-[8px] bg-white hover:bg-gray-50 text-sm ">
                  All Categories
                  <ChevronDown className="w-4 h-4" />
                </button>
                <a href="https://app.cardgit.com" className="flex rounded-[8px] border-[0.5px] border-[#0000001F] bg-white px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-sm">
                  Explore More
                </a>
              </div>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {profiles.map((profile, idx) => (
                <div
                  key={idx}
                  className="interactive-card scroll-drift overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  {/* Image */}
                  <div className="w-full h-40 bg-gradient-to-br from-orange-200 to-orange-100" />

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <p className="font-semibold text-black flex items-center gap-2">
                        {profile.name}
                        {profile.verified && (
                          <Image
                            src="/assets/verified.png"
                            alt="Verified Badge"
                            width={16}
                            height={16}
                          />
                        )}
                      </p>
                      <p className="text-sm text-gray-600">{profile.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
