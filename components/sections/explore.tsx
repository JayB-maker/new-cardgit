"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, Check } from "lucide-react";
import Image from "next/image";

type CardPromotion = {
  id: string;
  card?: {
    id: string;
    first_name?: string | null;
    last_name?: string | null;
    full_name?: string | null;
    job_title?: string | null;
    cover_picture?: string | null;
    profile_picture?: string | null;
  } | null;
};

type ProductPromotion = {
  id: string;
  product?: {
    id: string;
    title?: string | null;
    image?: string | null;
    link?: string | null;
    call_to_action?: string | null;
  } | null;
};

type PromotionsResponse<T> = {
  isSuccess: boolean;
  data?: {
    data?: T[];
  };
};

type PromotionCard = {
  id: string;
  title: string;
  subtitle: string;
  image?: string | null;
  href: string;
  type: "card" | "product";
};

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_CARDGIT_APP_BASE_URL?.replace(/\/$/, "") ||
  "https://redesignedcardgit.onrender.com";

function getYouTubeEmbedUrl(url?: string | null) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;

      const embedMatch = parsedUrl.pathname.match(/\/embed\/([^/?]+)/);
      if (embedMatch?.[1])
        return `https://www.youtube.com/embed/${embedMatch[1]}`;
    }
  } catch {
    return null;
  }

  return null;
}

function PromotionMedia({
  image,
  title,
}: {
  image?: string | null;
  title: string;
}) {
  const youtubeEmbedUrl = getYouTubeEmbedUrl(image);

  if (youtubeEmbedUrl) {
    return (
      <iframe
        src={youtubeEmbedUrl}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full border-0"
      />
    );
  }

  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#E8ECFF] to-[#F8F7F2] px-4 text-center text-sm font-medium text-[#4055F1]">
      CardGit
    </div>
  );
}

function PromotionTile({ item }: { item: PromotionCard }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="interactive-card scroll-drift block overflow-hidden rounded-xl border border-gray-200 bg-white"
    >
      <div className="h-40 w-full overflow-hidden bg-[#EEF1FF]">
        <PromotionMedia
          image={
            item.image ||
            "https://res.cloudinary.com/dfhoky9f2/image/upload/v1730589664/8_amaw4v.jpg"
          }
          title={item.title}
        />
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <p className="flex items-center gap-2 font-semibold text-black">
            <span className="min-w-0 truncate">{item.title}</span>
            {item.type === "card" && (
              <Image
                src="/assets/verified.png"
                alt="Verified Badge"
                width={16}
                height={16}
              />
            )}
          </p>
          <p className="truncate text-sm text-gray-600">{item.subtitle}</p>
        </div>
      </div>
    </a>
  );
}

function PromotionSkeletonTile() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="h-40 w-full animate-pulse bg-gradient-to-br from-[#E8ECFF] via-[#F5F6FF] to-[#E9EDFF]" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded-full bg-gray-200" />
        <div className="h-3 w-1/2 animate-pulse rounded-full bg-gray-100" />
      </div>
    </div>
  );
}

function PromotionSkeletonRows() {
  return (
    <div className="space-y-4" aria-label="Loading promotions">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <PromotionSkeletonTile key={`card-skeleton-${index}`} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <PromotionSkeletonTile key={`product-skeleton-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default function Explore() {
  const [cardPromotions, setCardPromotions] = useState<PromotionCard[]>([]);
  const [productPromotions, setProductPromotions] = useState<PromotionCard[]>(
    [],
  );
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    let isMounted = true;

    async function loadPromotions() {
      try {
        const [cardsResponse, productsResponse] = await Promise.all([
          fetch("/api/promotions/cards", { cache: "no-store" }),
          fetch("/api/promotions/products", { cache: "no-store" }),
        ]);

        if (!cardsResponse.ok || !productsResponse.ok) {
          throw new Error("Unable to fetch promotions");
        }

        const cardsJson =
          (await cardsResponse.json()) as PromotionsResponse<CardPromotion>;
        const productsJson =
          (await productsResponse.json()) as PromotionsResponse<ProductPromotion>;

        const cards = (cardsJson.data?.data ?? [])
          .slice(0, 3)
          .map((promotion) => {
            const card = promotion.card;
            const fullName =
              card?.full_name ||
              [card?.first_name, card?.last_name].filter(Boolean).join(" ") ||
              "CardGit Profile";

            return {
              id: promotion.id,
              title: fullName,
              subtitle: card?.job_title || "Digital Card",
              image: card?.cover_picture || card?.profile_picture,
              href: `${APP_BASE_URL}/sharecard?CardId=${card?.id ?? ""}`,
              type: "card" as const,
            };
          });

        const products = (productsJson.data?.data ?? [])
          .slice(0, 3)
          .map((promotion) => {
            const product = promotion.product;

            return {
              id: promotion.id,
              title: product?.title || "CardGit Product",
              subtitle: product?.call_to_action || "Explore product",
              image: product?.image,
              href: product?.link || APP_BASE_URL,
              type: "product" as const,
            };
          });

        if (isMounted) {
          setCardPromotions(cards);
          setProductPromotions(products);
          setStatus("success");
        }
      } catch {
        if (isMounted) setStatus("error");
      }
    }

    loadPromotions();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = (item: PromotionCard) =>
      !normalizedQuery ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.subtitle.toLowerCase().includes(normalizedQuery);

    return {
      cards: cardPromotions.filter(matches),
      products: productPromotions.filter(matches),
    };
  }, [cardPromotions, productPromotions, query]);

  return (
    <section
      id="explore"
      className="reveal-section w-full bg-[#CFD5FC26] py-14 md:py-20"
    >
      <div className="mx-auto space-y-12 px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0">
          <div className="scroll-drift col-span-1 space-y-6">
            <p className="text-sm font-medium uppercase tracking-widest text-[#4055F1]">
              Explore
            </p>
            <h2 className="text-2xl font-medium text-black lg:text-3xl">
              Discover. Connect. Grow.
            </h2>

            <p className="max-w-[408px] text-base leading-relaxed text-[#303338]">
              Explore page helps you discover professionals, businesses, and
              creatives through digital cards.
            </p>

            <div className="space-y-4">
              {[
                "Find people in your industry",
                "Discover new opportunities",
                "Build stronger networks",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4055F1] text-xs text-white">
                    <Check className="h-4 w-4 stroke-5" />
                  </div>
                  <p className="font-medium text-[#3E4248]">{benefit}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="btn-lift h-auto w-fit rounded-[8px] bg-[#4055F1] px-6 py-3 text-sm text-white hover:bg-[#3245D8]"
            >
              <a href="https://app.cardgit.com/dashboard/explore">
                Explore Now
              </a>
            </Button>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative max-w-[380px] flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Explore Cards"
                  className="rounded-[8px] border-[0.5px] border-[#0000001F] bg-white py-6! pl-10 text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-[8px] border-[0.5px] border-[#0000001F] bg-white px-4 py-3 text-sm hover:bg-gray-50">
                  All Categories
                  <ChevronDown className="h-4 w-4" />
                </button>
                <a
                  href="https://app.cardgit.com/dashboard/explore"
                  className="flex rounded-[8px] border-[0.5px] border-[#0000001F] bg-white px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-sm"
                >
                  Explore More
                </a>
              </div>
            </div>

            {status === "loading" && (
              <PromotionSkeletonRows />
            )}

            {status === "error" && (
              <div className="rounded-xl border border-[#FFD0D0] bg-white px-5 py-4 text-sm font-medium text-[#B42318]">
                Promotions could not be loaded right now.
              </div>
            )}

            {status === "success" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {filteredRows.cards.map((item) => (
                    <PromotionTile key={item.id} item={item} />
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {filteredRows.products.map((item) => (
                    <PromotionTile key={item.id} item={item} />
                  ))}
                </div>
                {filteredRows.cards.length === 0 &&
                  filteredRows.products.length === 0 && (
                    <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-[#3E4248]">
                      No promotions match your search.
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
