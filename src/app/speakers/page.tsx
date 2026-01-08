export default function Speakers() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold mb-4">Become a Speaker</h1>
          <p className="text-lg text-gray-300">
            If you want to give a talk or share your ideas, please fill out this form
          </p>
        </div>

        {/* Direct Link */}
        <div className="mb-8 text-center">
          <a
            href="https://forms.gle/dv5xdWwpSpYNN7Jc8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-indigo-600 hover:bg-indigo-700 px-6 py-3 font-medium text-base transition-colors"
          >
            Open Form in New Tab
          </a>
        </div>

        {/* Embedded Form */}
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScz2zaZITgCW_w0LhpTP4B85dIZTNkmFJIt7FQf901auddyvw/viewform?embedded=true"
            width="640"
            height="1702"
            className="border-0 rounded-lg max-w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
