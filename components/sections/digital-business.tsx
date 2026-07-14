"use client";

import Image from "next/image";

export default function DigitalBusiness() {
  const features = [
    {
      title: "London Marketing Consultancy",
      description:
        "A leading marketing consultancy in London replaced traditional paper business cards, which were often lost and difficult to update, with CardGit digital business cards. This enabled every consultant to share up-to-date contact information instantly while maintaining a consistent and professional brand experience across all client interactions.",
      icon: "/assets/london-icon.png",
    },
    {
      title: "Manchester Recruitment Agency",
      description:
        "A Manchester-based recruitment agency adopted CardGit QR profiles to help recruiters share contact details more efficiently and capture candidate enquiries during networking events. The result was smoother engagement with potential candidates and a faster, more effective recruitment process.",
      icon: "/assets/manchester-icon.png",
    },
    {
      title: "Birmingham Property Consultant",
      description:
        "A property consultant in Birmingham turned to CardGit to solve the challenge of frequently changing property listings and contact information. By using a dynamic digital profile, they could update information instantly while giving prospective clients easy access to listings and a convenient way to book appointments directly.",
      icon: "/assets/birmingham-icon.png",
    },
  ];
  const slidingFeatures = [...features];

  return (
    <section
      id="benefits"
      className="mt-6 lg:mt-34 reveal-section w-full bg-gradient-to-b from-[#CFD5FC26] to-[#CFD5FC26] py-14 md:py-24"
    >
      <Image
        src={"/assets/for-uk-back.png"}
        alt={`For UK background`}
        fill
        className="object-cover absolute"
      />
      <div className="mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
        <div className="mb-10 space-y-6 text-center md:mb-16 max-w-[573px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-medium text-[#000000]">
            Digital Business Cards for UK Teams & Organisations
          </h2>
          <p className="text-lg text-[#3E4248] max-w-xl mx-auto leading-relaxed">
            CardGit helps businesses standardise employee branding across
            departments and locations. Ideal for: sales, teams, recruitment
            agencies, property firms, consultancies, construction companies
            financial services, universities, and healthcare organisations
          </p>
        </div>

        <div className="overflow-hidden pb-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {slidingFeatures.map((feature, idx) => (
              <div
                key={idx}
                className=" w-full space-y-8 rounded-[16px]! border-[0.5px] border-gray-100 bg-white p-6 shadow-sm"
                // aria-hidden={idx >= features.length}
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
