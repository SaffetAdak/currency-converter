import { links } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative w-full">
      <ul className="flex justify-between items-center mx-4 -mt-2 text-gray-600">
        <li>
          <Link href={links[0].url}>
            <Image
              src="/logo.png"
              width={64}
              height={64}
              quality={95}
              alt="currency converter site logo"
              priority={true}
              className="h-24 w-24 rounded-full"
            />
          </Link>
        </li>
        <div className="flex gap-2">
          {links.slice(1, 4).map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </div>
        <li className="px-[1.10rem]">
          <Link href={links[4].url}>{links[4].name}</Link>
        </li>
      </ul>
    </header>
  );
}
