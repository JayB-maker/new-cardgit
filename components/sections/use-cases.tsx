'use client';

import Image from "next/image";

export default function UseCases() {
  const useCases = [
    {
      title: 'Professionals & Freelancers',
      description: 'Build your personal brand and get noticed.',
      icon: '/assets/for-1.png',
    },
    {
      title: 'Business Owners & Teams',
      description: 'Represent your business and team professionally.',
      icon: '/assets/for-2.png',
    },
    {
      title: 'Event Networking',
      description: 'Share your card and connect instantly at events.',
      icon: '/assets/for-3.png',
    },
    {
      title: 'Creatives & Artists',
      description: 'Showcase your work and attract opportunities.',
      icon: '/assets/for-4.png',
    },
  ];

  return (
    <section className="reveal-section w-full bg-white py-14 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-14">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-[28px] lg:text-[34px] font-medium text-black">Designed for everyone</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="interactive-card scroll-drift group overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              {/* Image */}
              {/* <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl group-hover:scale-105 transition">
                {useCase.icon}
              </div> */}
              <div className="w-full relative min-h-[229px]  bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl group-hover:scale-105 transition">
                <Image src={useCase.icon} alt={useCase.title} fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="px-6 py-8 space-y-2">
                <h3 className="text-xl font-medium text-black">{useCase.title}</h3>
                <p className="text-[#3E4248] text-lg leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
