export default function Partner() {
  return (
    <section className="bg-white py-18 md:py-24">
      <div className="mx-auto max-w-container-max px-5 text-center md:px-margin-desktop">
        <h2 className="mb-3 text-[22px] font-semibold uppercase tracking-[0.2em] text-[#555]">Partner</h2>
        <p className="mb-12 text-[15px] italic leading-7 text-[#8a8a8a]">People who always support and endorse our good work</p>
        
        <div className="relative flex justify-center items-center mb-16">
          <div className="absolute h-px w-full max-w-4xl bg-[#e5e5e5]"></div>
          <div className="relative h-[3px] w-24 bg-[#c9a34d]"></div>
        </div>

        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="flex min-h-16 flex-col items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
            <div className="text-[#FF0000] font-black text-5xl tracking-tighter">3M</div>
          </div>

          <div className="flex min-h-16 flex-col items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#C8102E] rounded-[2px] flex items-center justify-center text-white font-bold text-[8px]">LX</div>
              <div className="text-gray-800 font-bold text-lg">LX Hausys</div>
            </div>
          </div>

          <div className="flex min-h-16 flex-col items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
            <div className="text-blue-500 font-bold text-3xl leading-none">∞</div>
            <div className="text-gray-800 font-black text-[10px] tracking-widest mt-1">SRF</div>
          </div>

          <div className="flex min-h-16 flex-col items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
            <div className="text-gray-800 font-light text-3xl">
              INK<span className="font-bold">DOT</span>
            </div>
          </div>

          <div className="flex min-h-16 flex-col items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
            <div className="text-gray-900 font-black text-2xl tracking-tighter">ALLSIGN</div>
          </div>

          <div className="flex min-h-16 flex-col items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-[3px] border-[#C8102E]"></div>
              <div className="text-gray-900 font-black text-sm tracking-widest">INTERONE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
