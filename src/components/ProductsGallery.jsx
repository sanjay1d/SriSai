import { itmsContent } from '../data/itmsContent';

export default function ProductsGallery() {
  return (
    <section id="products" className="w-full border-b border-[#e4e4e4] bg-white py-14 md:py-20">
      <div className="mx-auto mb-9 max-w-container-max px-5 text-center md:px-margin-desktop">
        <h2 className="text-[26px] font-semibold uppercase tracking-[0.14em] text-[#333]">Products Gallery</h2>
        <div className="mx-auto mt-5 h-[2px] w-20 bg-[#c9a34d]" />
      </div>
      
      <div className="mx-auto w-full max-w-container-max px-5 md:px-margin-desktop">
        <div className="grid grid-cols-2 gap-0 border-l border-t border-[#dfdfdf] md:grid-cols-4">
          {itmsContent.productGallery.map((item) => (
            <div key={item.title} className="group relative aspect-[4/3] overflow-hidden border-r border-b border-[#dfdfdf] bg-[#f6f6f6]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15"></div>
              <div className="absolute inset-x-0 bottom-0 bg-white/92 px-4 py-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3d3d3d]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
