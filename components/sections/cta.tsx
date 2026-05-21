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
          <div className="hidden lg:flex flex-col justify-between lg:h-[358px] ">
            <div className=""></div>
            <div className="relative bottom-0 h-[320px] ">
              <Image
                src="/assets/cta-image.png"
                alt="CTA Mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="scroll-drift order-1 space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-[28px] lg:text-[30px] font-medium text-white leading-tight">
                Ready to upgrade how you connect?
              </h2>
              <p className="max-w-[408px] text-lg text-white leading-relaxed">
                Start using CardGit today and experience smarter networking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-lift h-auto bg-white px-6 py-3 text-sm text-[#4055F1] hover:bg-gray-100">
                <a href="https://www.app.cardgit.com/auth/signup">Create your free card</a>
              </Button>
              <DemoModal
                trigger={
                  <Button
                    variant="outline"
                    className="btn-lift h-auto border-white bg-transparent px-6 py-3 text-sm text-white hover:bg-white/10"
                  >
                    Book a Demo
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
