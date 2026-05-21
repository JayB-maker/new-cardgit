"use client";

import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create your card",
      description: "Customize your profile with your details, and brand.",
      icon: "/assets/how-1.png",
    },
    {
      number: 2,
      title: "Share instantly",
      description: "Send your card through a link or QR code.",
      icon: "/assets/how-2.png",
    },
    {
      number: 3,
      title: "Get discovered",
      description: "Let people explore and connect with you easily.",
      icon: "/assets/how-3.png",
    },
  ];

  return (
    <section className="reveal-section w-full bg-white py-14 md:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-14">
        <div className="mb-10 space-y-4 text-center md:mb-16">
          <p className="text-sm font-medium text-[#4055F1] tracking-widest uppercase">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-[34px] font-medium text-black">
            Simple. Fast. Effective
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-[1025px] mx-auto ">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step Card */}
              <div className="interactive-card scroll-drift relative space-y-6 rounded-[16px] border-[0.5px] border-[#0000001F] bg-white">
                {/* Number Badge */}
                <div className="absolute -top-1.5 -left-2.5 z-10  ">
                  <div className="w-12 h-12 bg-[#4055F1] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="w-full h-56 overflow-hidden relative bg-[#F5F5F5] rounded-[16px_16px_0_0] flex items-center justify-center text-5xl">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-3 text-center px-5 pb-6 pt-8 ">
                  <h3 className="text-xl font-medium text-black">{step.title}</h3>
                  <p className="text-[#3E4248] text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
