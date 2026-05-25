"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import DemoModal from "./demo-modal";

export default function Hero() {
  return (
    <section
      id="home"
      className="reveal-section w-full bg-white py-14 md:py-20"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Content */}
          <div className="scroll-drift col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-[#4055F1] tracking-widest uppercase bg-[#ECEEFE] inline-block px-4 py-1 rounded-[8px]">
                Your Digital Identity, Simplified
              </p>
              <h1 className="text-4xl tracking-tight lg:tracking-normal lg:text-[52px] font-medium text-black lg:leading-[150%] ">
                Interactive Identity for Modern Networking
              </h1>
            </div>

            <p className="text-base max-w-[505px] text-[#000000B2] leading-relaxed">
              Create interactive digital business cards that help people
              remember you, contact you instantly, and actually follow up. Used
              by professionals and teams across the United Kingdom, United
              States, Europe, Africa, and beyond to simplify networking and
              business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="btn-lift h-auto rounded-[8px] bg-[#4055F1] px-6 py-3 text-sm text-white hover:bg-[#3245D8]"
              >
                <a
                  target="_blank"
                  href="https://www.app.cardgit.com/auth/signup"
                >
                  Get Started
                </a>
              </Button>
              <DemoModal
                trigger={
                  <Button
                    variant="outline"
                    className="btn-lift h-auto rounded-[8px] border-[#4055F1] px-6 py-3 text-sm text-[#4055F1] hover:bg-blue-50"
                  >
                    Book a Demo
                  </Button>
                }
              />
            </div>

            {/* Testimonial */}
            <div className="flex items-center gap-3 pt-4">
              <Image
                src="/assets/reviewer.png"
                alt="User Avatar"
                width={130}
                height={40}
              />
              <div>
                <Image
                  src="/assets/star-rating.png"
                  alt="rating"
                  width={96}
                  height={16}
                />
                <p className="text-base text-[#525861]]">
                  4.9/5 from 1000+ users
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual - Mockup */}
          <div className="floating-card relative col-span-7 mt-10 h-60 md:mt-0 md:h-96 lg:h-160 lg:min-h-[500px]">
            <Image
              src="/assets/hero-image.png"
              alt="Hero Mockup"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
