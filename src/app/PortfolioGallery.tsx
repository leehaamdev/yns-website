"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { portfolioItems } from "../../lib/data";

const PortfolioGallery = ({ inHome }: { inHome?: boolean }) => {
  // Generate 12 portfolio items with different random seeds for variety

  const router = useRouter();

  return (
    <div className="relative mx-auto mb-8 max-w-[1090px]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {portfolioItems
          .slice(0, inHome ? 12 : portfolioItems.length)
          .map((item) => (
            <div
              onClick={() => router.push(`/${item.id}`)}
              key={item.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              style={{ aspectRatio: "358/286" }}
            >
              <Image
                src={item.placeholder}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 pointer-events-none" />
              <div className="absolute opacity-0 h-16 bg-gradient-to-t from-black via-40% to-transparent w-full -bottom-20 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-200">
                <h1
                  className="text-lg font-bold text-center font-space-grotesk
                absolute left-1/2 scale-x-75 group-hover:scale-x-110 -translate-1/2 -bottom-20 group-hover:bottom-0 transition-all duration-500"
                >
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
      </div>
      {inHome && (
        <div className="absolute h-72 bottom-0 bg-gradient-to-t from-black via-black via-20% to-transparent w-full" />
      )}
    </div>
  );
};

export default PortfolioGallery;
