import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative mt-8 sm:absolute sm:left-8 sm:top-10 z-10">
      <ul className=" group flex justify-start items-center mx-4 -mt-8 text-gray-200">
        <li>
          <Link href="/">
            <Image
              src="/logo5.png"
              width={64}
              height={64}
              quality={95}
              alt="currency converter site logo"
              priority={true}
              className="h-24 w-24 rounded-full"
            />
          </Link>
        </li>
        <li>
          <div className="h-8 w-[0.1rem] mr-4 bg-white/50 rounded-md group-hover:rotate-45 origin-bottom transition"></div>
        </li>
        <li>
          <div className="group-hover:translate-x-2 transition delay-[150ms]">
            <Link href="https://saffet-adak.vercel.app" target="_blank">
              My Page
            </Link>
          </div>
        </li>
      </ul>
    </header>
  );
}
