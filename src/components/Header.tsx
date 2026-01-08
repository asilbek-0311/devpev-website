import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 pt-2 sm:pt-4 px-2 sm:px-4">
      <div
        className="
          relative
          w-[95%] sm:w-[90%] md:w-[80%] mx-auto
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-2xl
          px-3 sm:px-6 py-3 sm:py-4
          flex items-center justify-between
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          before:absolute before:inset-0
          before:rounded-2xl
          before:bg-gradient-to-b before:from-white/20 before:to-transparent
          before:pointer-events-none
        "
      >
        <Link href="/" className="hover:opacity-80 transition z-10">
          <Image
            src="/devpev.svg"
            alt="DevPev logo"
            width={100}
            height={33}
            className="sm:w-[120px] sm:h-[40px]"
          />
        </Link>

        <Link
          href="/speakers"
          className="
            px-3 sm:px-5 py-2 sm:py-2.5
            bg-indigo-600/80
            hover:bg-indigo-700/80
            text-white font-medium
            text-xs sm:text-base
            rounded-full
            backdrop-blur-md
            transition-all
            hover:scale-105
            z-10
            whitespace-nowrap
          "
        >
          <span className="hidden sm:inline">Become a Speaker</span>
          <span className="sm:hidden">Become a Speaker</span>
        </Link>
      </div>
    </header>
  );
}

