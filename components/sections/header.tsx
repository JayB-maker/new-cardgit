"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "Benefits", href: "/#benefits" },
    { label: "Explore", href: "/#explore" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b-[0.5px] border-[#0000001F] bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
        <div className="mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/#home" className="smooth-link rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4055F1]">
              <Image
                src="/assets/cardgit-logo.png"
                alt="CardGit Logo"
                width={106}
                height={34}
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="smooth-link text-sm font-medium text-[#3E4248] transition hover:text-[#4055F1]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden items-center gap-4 md:flex">
              <a
                href="https://app.cardgit.com"
                className="smooth-link px-6 py-3 font-medium text-[#3E4248] transition hover:text-[#4055F1]"
              >
                Log in
              </a>
              <Button asChild className="btn-lift h-auto bg-[#4055F1] px-6 py-3 text-white hover:bg-[#3245D8]">
                <a target="_blank" href="https://www.app.cardgit.com/auth/signup">Get Started</a>
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-[10px] border-[#0000001F] md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[86vw] max-w-sm border-l-0 p-0">
                <SheetHeader className="border-b border-[#00000014] p-5 text-left">
                  <SheetTitle>
                    <Image
                      src="/assets/cardgit-logo.png"
                      alt="CardGit Logo"
                      width={106}
                      height={34}
                    />
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Mobile navigation menu for CardGit website pages and actions.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 p-5">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="rounded-[12px] px-4 py-3 text-base font-medium text-[#242832] transition hover:bg-[#F2F4FF] hover:text-[#4055F1]"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-auto grid gap-3 border-t border-[#00000014] p-5">
                  <SheetClose asChild>
                    <a
                      href="https://app.cardgit.com"
                      className="rounded-[12px] px-4 py-3 text-center font-medium text-[#3E4248] transition hover:bg-[#F2F4FF]"
                    >
                      Log in
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild className="h-12 rounded-[12px] bg-[#4055F1] text-white hover:bg-[#3245D8]">
                      <a target="_blank" href="https://www.app.cardgit.com/auth/signup">Get Started</a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
