"use client";

import Image from "next/image";
import SocialBadge from "./SocialBadge";
import Header from "./Header";
import WorkCard from "./WorkCard";
import PortfolioGallery from "./PortfolioGallery";
import Footer from "./Footer";
import LogosMarquee from "./LogosMarquee";
import AutoType from "./AutoType";

const WorkGallery = () => {
  return (
    <div className="mx-auto mb-8">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-fit mx-auto">
        <WorkCard
          imageUrl="/work_logo.gif"
          title="Logo/Brand Motion"
          description="Bringing brand identities to life through smooth, eye-catching animations."
        />
        <WorkCard
          imageUrl="/work_sound.gif"
          title="Sound Design"
          description="Crafting audio that enhances visuals and strengthens the overall experience."
        />
        <WorkCard
          imageUrl="/work_design.gif"
          title="Design Leadership"
          description="Guiding creative direction from concept to final delivery with clarity and vision."
        />
        <WorkCard
          imageUrl="/work_web3.gif"
          title="Web3 stuff"
          description="Designing motion content tailored for Web3 platforms, products, and communities."
        />
        <WorkCard
          imageUrl="/work_videos.gif"
          title="Explainer Videos"
          description="Turning complex ideas into engaging, easy-to-follow motion stories."
        />
        <WorkCard
          imageUrl="/work_animation.gif"
          title="UI Animation"
          description="Animating interfaces to create intuitive, delightful digital interactions."
        />
      </div>
    </div>
  );
};

const PricingCard = ({
  title,
  highlight,
  subtitle,
  price,
  features,
  buttonText,
  deliveryTime,
  paymentNote,
  isCustomPower = false,
}: {
  title: string;
  highlight?: string;
  subtitle?: string;
  price?: string;
  features: string[];
  buttonText: string;
  deliveryTime?: string;
  paymentNote?: string;
  isCustomPower?: boolean;
}) => {
  if (isCustomPower) {
    return (
      <div className="bg-[#F4CE14] text-black p-6 rounded-lg w-80">
        <h3 className="text-2xl font-bold font-space-grotesk">{title}</h3>
        <p className={`text-xs text-black mb-1 font-inter`}>{subtitle}</p>
        <p className="text-xs font-black mb-3 font-inter">{features[0]}</p>
        <button className="bg-[#2F8966] text-white px-6 py-2 rounded font-medium transition-colors font-space-grotesk hover:bg-green-700">
          {buttonText}
        </button>
      </div>
    );
  }

  return (
    <div
      className={`relative p-6 rounded-lg w-80 ${
        highlight ? "bg-[#2F8966]" : "bg-white"
      } ${highlight ? "text-white" : "text-black"}`}
    >
      {highlight && (
        <div className="bg-[#F4CE14] text-black px-2 py-0.5 rounded text-xs font-bold inline-block">
          {highlight}
        </div>
      )}

      <h3 className="text-7xl font-bold font-space-grotesk">{title}</h3>

      {subtitle && (
        <p
          className={`text-xs ${
            highlight ? "text-white" : "text-black"
          } mb-1 font-inter`}
        >
          {subtitle}
        </p>
      )}

      {deliveryTime && (
        <p
          className={`text-xs font-bold ${
            highlight ? "text-white" : "text-black"
          } opacity-60 mb-3 font-inter`}
        >
          {deliveryTime}
        </p>
      )}

      {price && (
        <>
          <div className="text-3xl font-bold font-space-grotesk">{price}</div>
          {paymentNote && (
            <p
              className={`text-tiny italic ${
                features.length == 1 ? "mb-1" : "mb-6"
              } font-inter opacity-60`}
            >
              {paymentNote}
            </p>
          )}
        </>
      )}

      <ul className="space-y-3 mb-4 font-inter">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-xs font-bold">
            {features.length > 1 && (
              <Image
                src="/checkmark.svg"
                alt="Checkmark"
                width={16}
                height={16}
                className={`mr-3 flex-shrink-0 ${
                  !highlight ? "brightness-0" : ""
                }`}
              />
            )}
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`px-5 py-2 text-sm rounded font-medium transition-colors font-space-grotesk ${
          highlight
            ? "bg-[#F4CE14] text-black hover:bg-yellow-500"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-xl font-bold mb-6 font-space-grotesk">
          <AutoType text=" Hey, I'm YNS" />
        </h1>

        <p className="text-gray-400 max-w-4xl mx-auto mb-12 text-lg font-inter">
          I bring pixels to life for the world of Web3, tech, mostly crafting
          motion on <strong>Solana</strong> as a freelancer.
          <br />
          Scroll down, check it out, and if something clicks,{" "}
          <strong className="italic">
            <a href="./#contact">hit me up</a>
          </strong>
          .
        </p>

        {/* Trusted by section */}
        <div className="mb-16">
          <p className="text-white text-lg mb-8 font-space-grotesk">
            Trusted by
          </p>
          <LogosMarquee />
          {/* <div className="flex justify-center items-center space-x-12 text-gray-400 font-inter">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo_jup.svg"
                alt="Jupiter Logo"
                width={120}
                height={32}
              />
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/logo_met.svg"
                alt="Meteora Logo"
                width={120}
                height={32}
              />
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/logo_spaces.svg"
                alt="Solana Spaces Logo"
                width={120}
                height={32}
              />
            </div>
          </div> */}
        </div>

        {/* Portfolio Gallery */}
        <PortfolioGallery inHome />

        <a
          href="./all"
          className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
        >
          View All
        </a>
      </section>

      <section className="text-center py-12 px-6" id="about">
        <h1 className="text-xl font-bold mb-6 font-space-grotesk">About me</h1>

        <p className="text-gray-400 max-w-4xl mx-auto mb-12 text-lg font-inter">
          I'm a full-time Web3 freelance Motion & Graphic Designer.
          <br />I love working with cool brands, startups, and especially{" "}
          <strong>Web3 projects</strong>.
          <br />
          <strong>My style?</strong> Clean, minimal, modern, and all about
          telling stories through animation.
        </p>
      </section>

      <section className="text-center py-12 px-6">
        <h1 className="text-xl font-bold mb-6 font-space-grotesk">What I Do</h1>

        <WorkGallery />
      </section>

      <section
        className="text-center pt-16 px-6 border-t border-[#3A3A3A]"
        id="contact"
      >
        <h1 className="text-xl font-bold mb-6 font-space-grotesk">
          Let's Talk
        </h1>

        <p className="text-gray-400 max-w-4xl mx-auto mb-12 text-lg font-inter">
          Got a project or idea that needs creative execution?
          <br />
          I'd love to elevate your brand and deliver value.
        </p>

        <a
          href="https://cal.com/ynsgh"
          target="_blank"
          className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
        >
          Book a free call
        </a>

        <div className="w-[80%] mx-auto mb-8 mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-16">
            <SocialBadge
              logoUrl="/x-icon.webp"
              name="x.com"
              href="https://x.com/ynsgh_"
            />
            <SocialBadge
              logoUrl="/telegram-icon.webp"
              name="Telegram"
              href="https://t.me/gh_yns"
            />
            <SocialBadge
              logoUrl="/insta-icon.webp"
              name="Instagram"
              href="https://instagram.com/younesgh_com"
            />
            <SocialBadge
              logoUrl="/linkedin-icon.webp"
              name="LinkedIn"
              href="https://www.linkedin.com/in/younes-ghazanfar"
            />
            <SocialBadge
              logoUrl="/mail-icon.webp"
              name="Email"
              href="mailto:web3yns@gmail.com"
            />
            <SocialBadge
              logoUrl="/Discord.webp"
              name="Discord"
              href="https://discord.com/users/younesgh#5054"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
