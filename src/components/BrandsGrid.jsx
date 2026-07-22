import { Link } from 'react-router-dom';
import { itmsContent } from '../data/itmsContent';

export default function BrandsGrid() {
  return (
    <section id="brands" className="scroll-mt-24 border-y border-[#e4e4e4] bg-[#f7f7f7] py-14 md:scroll-mt-28 md:py-20">
      <div className="mx-auto max-w-container-max px-5 md:px-margin-desktop">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#9a9a9a]">Products</p>
            <h2 className="mt-2 text-[26px] font-semibold uppercase tracking-[0.14em] text-[#333]">Brand Portfolio</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#707070]">
            Organized distribution across signage, graphics, architectural interiors, and lighting applications.
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-[#dfdfdf] bg-white md:grid-cols-3">
          {itmsContent.brands.map((brand) => {
            if (brand.placeholder) {
              return (
                <div
                  key={brand.id}
                  className="flex min-h-[230px] flex-col justify-center border-r border-b border-[#dfdfdf] bg-[#fbfbfb] p-7 text-center"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b5b5b5]">Reserved Slot</p>
                  <div className="mx-auto mt-8 h-px w-20 bg-[#d8d8d8]" />
                  <p className="mx-auto mt-8 max-w-[220px] text-sm leading-6 text-[#9a9a9a]">
                    A future partner brand can be added here.
                  </p>
                </div>
              );
            }

            return (
              <Link
                key={brand.id}
                to={`/brand/${brand.id}`}
                className="group flex min-h-[230px] flex-col justify-between border-r border-b border-[#dfdfdf] p-7 text-center transition-colors duration-300 hover:bg-[#f5f1e8]"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a2a2a2]">Brand Partner</p>
                  <div className="mt-8 text-[30px] font-bold leading-tight tracking-tight" style={{ color: brand.accent }}>
                    {brand.name}
                  </div>
                  <p className="mx-auto mt-4 max-w-[260px] text-sm leading-6 text-[#727272]">
                    {brand.description}
                  </p>
                </div>
                <span className="mt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b78a2b] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
