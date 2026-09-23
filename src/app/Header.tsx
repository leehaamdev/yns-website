"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <>
      {/* Logo */}
      <div
        className="flex justify-center pt-32 md:pt-52 pb-6 cursor-pointer w-fit mx-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="/YNSLOGO.gif"
          alt="YNS Logo"
          width={1080}
          height={1080}
          className="text-white size-40"
        />
      </div>

      {/* Navigation */}
      <nav className="flex justify-center pb-12">
        <div className="flex items-center space-x-8 text-sm font-space-grotesk">
          <Link href="/#about" className="hover:text-gray-300 transition-colors">
            About Me
          </Link>

          <a
            href="https://drip.haus/yns"
            target="_blank"
            className="hover:text-gray-300 transition-colors"
          >
            NFTs
          </a>
          <Link
            href="/#contact"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
