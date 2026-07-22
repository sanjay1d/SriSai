import { itmsContent } from '../data/itmsContent';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="mx-auto max-w-container-max px-5 py-16 scroll-mt-24 md:px-margin-desktop md:py-20 md:scroll-mt-28">
      <div className="grid grid-cols-1 gap-8 border-b border-[#e6e6e6] pb-16 md:grid-cols-12 md:items-start md:pb-20">
        <div className="md:col-span-4">
          <h2 className="text-[24px] font-semibold uppercase tracking-[0.18em] text-[#333]">Who We Are</h2>
          <div className="mt-5 h-[2px] w-16 bg-[#c9a34d]" />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-[15px] leading-8 text-[#606060] md:text-[16px]">
            {itmsContent.whoWeAre}
          </p>
        </div>
      </div>
    </section>
  );
}
