"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import DemoModal from "./demo-modal";

export default function CTA() {
  return (
    <section className="reveal-section w-full py-14 md:py-24">
      <div className="mx-auto h-full w-full max-w-[1335px] bg-[#3C4CBF] px-4 py-14 sm:px-6 md:py-20 lg:min-h-[358px] lg:rounded-[16px] lg:px-8 lg:py-0">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Mockups */}
          <div className="hidden lg:flex flex-col justify-between lg:h-[428px] ">
            <div className=""></div>
            <div className="relative bottom-0 h-[420px] ">
              <Image
                src="/assets/cta-image.png"
                alt="CTA Mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="scroll-drift order-1 space-y-8 lg:order-2 lg:py-14">
            <div className="space-y-4">
              <h2 className="text-[28px] lg:text-[30px] font-medium text-white leading-tight">
                Create Your Free Digital Business Card & Explore Networking
                Events
              </h2>
              <p className="max-w-[499px] text-lg text-white leading-relaxed">
                Join professionals and businesses using CardGit to create
                digital business cards, discover events, connect with the right
                people, generate quality leads, and build lasting business
                relationships worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="btn-lift h-auto bg-white px-6 py-3 text-sm text-[#4055F1] hover:bg-gray-100"
              >
                <a
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_DISCOVER_EVENTS_URL}
                >
                  Discover Events
                </a>
              </Button>
              <Button
                asChild
                className="btn-lift h-auto border border-white bg-transparent px-6 py-3 text-sm text-white hover:bg-white hover:text-[#4055F1]"
              >
                <a
                  target="_blank"
                  href="https://www.app.cardgit.com/auth/signup"
                >
                  Create Free Card
                </a>
              </Button>

              {/* <DemoModal
                trigger={
                  <Button
                    variant="outline"
                    className="btn-lift h-auto border-white bg-transparent px-6 py-3 text-sm text-white hover:bg-white/10"
                  >
                    Book a Demo
                  </Button>
                }
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
