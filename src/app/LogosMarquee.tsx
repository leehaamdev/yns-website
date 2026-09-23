"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function LogosMarquee() {
  return (
    <div className="bg-black py-4 max-w-[500px] mx-auto flex items-center">
      <div className="bg-[#3A3A3A] w-[.5px] h-20" />
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        <div className="flex justify-center items-center gap-12 mx-6">
          <Image
            src="/trust_jupiter.svg"
            alt="Jupiter Logo"
            width={109}
            height={33}
            className="opacity-80 hover:opacity-100 transition"
          />
          <Image
            src="/trust_Meteora.svg"
            alt="Meteora Logo"
            width={109}
            height={33}
            className="opacity-80 hover:opacity-100 transition"
          />
           <Image
            src="/solanaFoundationLogo.svg"
            alt="Solana Logo"
            width={109}
            height={33}
            className="opacity-80 hover:opacity-100 transition"
          />
            <Image
            src="/trust_phoenix.svg"
            alt="Phoenix Logo"
            width={109}
            height={33}
            className="opacity-80 hover:opacity-100 transition"
          />
          <Image
            src="/trust_Spaces.svg"
            alt="Solana Spaces Logo"
            width={109}
            height={33}
            className="opacity-80 hover:opacity-100 transition"
          />
          <Image
            src="/trust_SNS.svg"
            alt="SNS Logo"
            width={109}
            height={33}
            className="opacity-80 hover:opacity-100 transition"
          />
          <Image
            src="/trust_drip.svg"
            alt="DRiP Logo"
            width={109}
            height={33}
            className="opacity-80 hover:opacity-100 transition"
          />
        </div>
      </Marquee>
      <div className="bg-[#3A3A3A] w-[.5px] h-20" />
    </div>
  );
}
