import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full pt-4 px-4 bg-[#1f1f1f] sticky top-0 z-50">
      <div className="w-[80%] mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] px-6 py-4 flex items-center justify-between shadow-lg bg-transparent">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/devpev.svg"
            alt="DevPev logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav>
          <Link
            href="/speakers"
            className="px-5 py-2.5 bg-indigo-600/80 hover:bg-indigo-700/80 text-white font-medium rounded-[20px] backdrop-blur-sm transition-all hover:scale-105"
          >
            Become a Speaker
          </Link>
        </nav>
      </div>
    </header>
  );
}
