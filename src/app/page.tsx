import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">

      

      {/* Logo */}
      <Image
        src="/devpev.svg"
        alt="DevPev logo"
        width={180}
        height={60}
        priority
      />

      {/* Title & Subtitle */}
      <h1 className="mt-6 text-2xl font-bold">Website under development 🚧</h1>
      <p className="mt-2 text-center text-sm sm:text-base text-gray-300 max-w-md">
        DevPev - O&apos;zbekistondagi ochiq dasturchilar jamiyati
      </p>

      {/* Infinite vertical carousel */}
      <div className="relative mt-6 h-6 overflow-hidden text-lg font-semibold text-indigo-400">
        <div className="absolute flex flex-col animate-[scroll_30s_linear_infinite]">
          <span className="h-6">open source</span>
          <span className="h-6">jobs</span>
          <span className="h-6">community</span>
          <span className="h-6">fun</span>
          <span className="h-6">pizza</span>
          <span className="h-6">mentorship</span>
          <span className="h-6">speakers</span>

          {/* duplicate to make infinite loop seamless */}
          <span className="h-6">open source</span>
          <span className="h-6">jobs</span>
          <span className="h-6">community</span>
          <span className="h-6">fun</span>
          <span className="h-6">pizza</span>
          <span className="h-6">mentorship</span>
          <span className="h-6">speakers</span>
        </div>
      </div>

      {/* Telegram CTA */}
      <a
        href="https://t.me/devpevuz"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] px-6 py-3 font-medium text-sm sm:text-base transition-colors"
      >
        Join our Telegram Community
      </a>

      {/* Social links */}
      <div className="mt-8 flex gap-6">
        <a
          href="https://x.com/devpevuz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-gray-300 hover:text-white"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/devpevuz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-gray-300 hover:text-white"
        >
          Instagram
        </a>
      </div>

      {/* Event iframe (centered) */}
      <div className="mt-16 w-[95%] md:w-[70%] mx-auto">
        <div className="w-full h-[70vh] md:h-[50vh] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://luma.com/embed/event/evt-9ZfUGDtteAW5AIU/simple"
            width="100%"
            height="100%"
            className="block"
            frameBorder="0"
            style={{ border: "1px solid #1f1f1f", borderRadius: "10px", display: "block" }}
            allow="fullscreen; payment"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
