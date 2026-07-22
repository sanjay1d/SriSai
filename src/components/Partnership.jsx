import { itmsContent } from '../data/itmsContent';

export default function Partnership() {
  return (
    <section id="partners" className="w-full bg-white">
      {itmsContent.showcase.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-1 border-b border-[#e0e0e0] last:border-b-0 md:grid-cols-2"
        >
          <div className={`relative min-h-[340px] md:min-h-[520px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
            <img
              src={item.image}
              className="h-full w-full object-cover"
              alt={item.title}
            />
          </div>
          <div className={`flex flex-col items-center justify-center bg-[#f8f8f8] p-9 text-center md:p-20 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a0a0a0]">Featured Partner</p>
            <h3 className="mb-6 text-[30px] font-semibold uppercase tracking-[0.1em] text-[#333] md:text-[38px]">{item.title}</h3>
            <p className="mb-8 max-w-lg text-sm leading-7 text-[#696969]">{item.description}</p>
            <a href={item.href} className="border border-[#cfcfcf] bg-white px-10 py-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#555] transition-colors hover:border-[#b78a2b] hover:text-[#b78a2b]">
              {item.actionLabel}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
