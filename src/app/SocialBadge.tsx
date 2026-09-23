import Image from "next/image";
import Link from "next/link";

export default function SocialBadge({
  logoUrl,
  name,
  href,
}: {
  logoUrl: string;
  name: string;
  href: string;
}) {
  return (
    <Link href={href} target="_blank" className="w-fit mx-auto">
      <div className="relative overflow-hidden group cursor-pointer w-fit mx-auto flex flex-col items-center gap-4">
        <div className="w-14 h-14 relative">
          <Image src={logoUrl} alt="" fill />
        </div>
        <p className="text-[#C5C5C5] text-sm">{name}</p>
      </div>
    </Link>
  );
}
