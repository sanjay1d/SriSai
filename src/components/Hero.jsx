import { itmsContent } from '../data/itmsContent';

export default function Hero() {
  const { hero } = itmsContent;
  const heroHighlights = [
    { label: 'LX Hausys', copy: 'Authorized distributor for signage, interior and architectural films.' },
    { label: 'Inventronics', copy: 'Authorized distributor for signage and backlighting industry.' },
    { label: 'Premium Partners', copy: 'Focused material and lighting solutions for commercial applications.' },
  ];

  return (
    <header id="home" className="relative min-h-[720px] w-full overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          data-alt="Sri Sai Corporation hero banner"
          style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
      </div>
      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-container-max flex-col justify-end px-5 pb-10 pt-36 md:px-margin-desktop md:pb-14">
        <div className="max-w-[820px] text-white">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.34em] text-white/80">{hero.eyebrow}</p>
          <h1 className="max-w-[780px] text-[34px] font-semibold uppercase leading-tight tracking-[0.08em] md:text-[52px] md:leading-[1.14]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-white/85 md:text-[17px]">
            {hero.copy}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={hero.primaryCta.href} className="inline-flex items-center justify-center border border-white bg-white px-9 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#222] transition-colors hover:bg-transparent hover:text-white">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="inline-flex items-center justify-center border border-white/70 px-9 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-[#222]">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="mt-12 grid border border-white/30 bg-black/30 backdrop-blur-[2px] md:grid-cols-3">
          {heroHighlights.map((item) => (
            <div key={item.label} className="border-b border-white/25 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-white/78">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
