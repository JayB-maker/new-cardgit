import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const learnMore = [
    { name: "Home", href: "/#home" },
    { name: "Benefit", href: "/#benefits" },
    { name: "Pricing Plan", href: "/pricing" },
    { name: "Contact", href: "mailto:info@cardgit.com" },
  ];

  return (
    <footer className="w-full bg-[#3C4CBF] text-white">
      {/* Main Footer */}
      <div className="mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-14">
        <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 lg:grid-cols-2 lg:gap-12">
          {/* Brand */}
          <Image
            src="/assets/logo-white.png"
            alt="CardGit Logo"
            width={106}
            height={36}
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Learn More */}
            <div className="space-y-6">
              <h3 className="font-medium text-white text-lg">Learn More</h3>
              <ul className="space-y-4.5">
                {learnMore.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-white/85 transition hover:text-white"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/85 transition hover:text-white"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h3 className="font-medium text-white text-lg">Socials</h3>
              <ul className="space-y-4.5">
                {[
                  { name: "Facebook", link: "#" },
                  {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/company/cardgit",
                  },
                  { name: "Instagram", link: "https://instagram.com/cardgit" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="text-white/85 transition hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="space-y-6">
              <h3 className="font-medium text-white text-lg">Get in Touch</h3>
              <a
                href="mailto:info@cardgit.com"
                className="flex items-center gap-2 text-white/85 transition hover:text-white"
              >
                <Image
                  src="/assets/footer-mail.png"
                  alt="Mail Icon"
                  width={18}
                  height={18}
                />
                info@cardgit.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-[0.5px] border-[#FFFFFF61]" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-base text-white">
          <p>© {year} CardGit. All rights reserved.</p>
          <div className="flex gap-6">
            <a target="_blank" href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a target="_blank" href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
