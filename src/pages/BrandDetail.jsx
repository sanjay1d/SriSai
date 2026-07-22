import { useParams, Link } from 'react-router-dom';
import { itmsContent } from '../data/itmsContent';
import { itmsProductContent } from '../data/itmsProductContent';

const brandAlias = {
  'lx-hausys': 'lxhausys',
  'vagus-enviro': 'vagus',
  'windows-film': 'vagus',
  'interior-film': 'lxhausys',
  'window-graphic': 'lxhausys',
  'wall-graphic': 'lxhausys',
};

export default function BrandDetail() {
  const { id } = useParams();
  const canonicalId = brandAlias[id] ?? id;
  const brandPage = itmsContent.brandPages?.[canonicalId];
  const brand = brandPage || itmsContent.brands.find((item) => item.id === canonicalId);
  const productCards = brandPage?.productCards || [];
  const products =
    brandPage?.sections?.flatMap((section) => section.items || []) ||
    Object.entries(itmsProductContent[canonicalId] || []).map(([slug, product]) => ({
      slug,
      title: product.title,
      description: product.intro,
    }));
  const brandTitle = brand?.title || brand?.name;
  const brandIntro = brand?.intro || brand?.description;
  const brandSections = brandPage?.sections || [];
  const brandName = brand?.name || brandPage?.title?.replace(/^ABOUT\s+/i, '') || brandTitle;
  const heroHeading = brandPage?.title || `ABOUT ${brandName}`;

  if (!brand) {
    return (
      <div className="py-24 px-margin-desktop max-w-container-max mx-auto min-h-[70vh]">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-primary font-label-md hover:underline">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Back to Home
        </Link>

        <div className="bg-surface-container-lowest p-16 border border-outline-variant/30 text-center flex flex-col items-center justify-center min-h-100">
          <span className="material-symbols-outlined text-[64px] text-gray-300 mb-6">storefront</span>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-6 capitalize tracking-tight">Unknown Brand</h1>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed text-lg">
            No content exists for this route yet. Use one of the source brands from the homepage grid.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh]">
      {brandPage?.heroImage ? (
        <section className="relative min-h-[560px] overflow-hidden">
          <img
            src={brandPage.heroImage}
            alt={brandTitle}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="relative mx-auto flex min-h-[560px] max-w-container-max flex-col items-center justify-center px-5 text-center text-white md:px-margin-desktop">
            <p className="text-[12px] font-semibold uppercase tracking-[0.32em] text-white/80">ABOUT - {brandName.toUpperCase()}</p>
            <h1 className="mt-6 text-[34px] font-semibold uppercase leading-tight tracking-[0.12em] md:text-[56px]">{heroHeading}</h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/88 md:text-lg">{brandIntro}</p>
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-container-max px-5 md:px-margin-desktop">
        <div className="py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] hover:text-[#b78a2b]">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Home
          </Link>
        </div>

        <div className="border border-[#e1e1e1] bg-white p-7 md:p-12">
          {!brandPage?.heroImage ? (
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#9a9a9a]">About - {brandName}</p>
              <h1 className="mt-4 text-[32px] font-semibold uppercase leading-tight tracking-[0.12em] text-[#333] md:text-[48px]">
                {heroHeading}
              </h1>
              {brandIntro ? <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-[#666] md:text-base">{brandIntro}</p> : null}
            </div>
          ) : null}

          {brand.highlights?.length ? (
            <ul className="mx-auto max-w-3xl space-y-3 text-left text-sm leading-7 text-[#666]">
              {brand.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-3 inline-flex h-1.5 w-1.5 shrink-0 bg-[#c9a34d]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {productCards.length ? (
            <div className="mt-14 grid border-l border-t border-[#e2e2e2] sm:grid-cols-2 xl:grid-cols-3">
              {productCards.map((card) => (
                <div key={card.slug} className="group border-r border-b border-[#e2e2e2] bg-white">
                  <div className="h-60 overflow-hidden bg-[#f3f3f3]">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#333]">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#666]">{card.description}</p>
                    <Link
                      to={`/brand/${id}/product/${card.slug}`}
                      className="mt-7 inline-flex w-full items-center justify-center border border-[#d6d6d6] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] transition hover:border-[#b78a2b] hover:text-[#b78a2b]"
                    >
                      EXPLORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-16 grid gap-12">
            {brandSections.map((section, index) => (
              <article
                key={section.title}
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className={`grid gap-8 border-t border-[#e2e2e2] pt-10 md:items-start ${index % 2 === 1 ? 'md:grid-cols-[420px,1fr]' : 'md:grid-cols-[1fr,420px]'}`}
              >
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-[26px] font-semibold uppercase tracking-[0.12em] text-[#333]">{section.title}</h3>
                  {section.description ? <p className="mb-6 text-sm leading-7 text-[#666]">{section.description}</p> : null}
                  {section.items?.length ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {section.items.map((item) => (
                        item.slug ? (
                          <Link
                            key={item.slug}
                            to={`/brand/${id}/product/${item.slug}`}
                            className="border border-[#e3e3e3] bg-[#f8f8f8] px-5 py-5 text-sm text-[#333] transition hover:border-[#b78a2b] hover:bg-white"
                          >
                            <div className="font-medium mb-2">{item.title || item.label}</div>
                            {item.description ? <p className="text-sm leading-7 text-[#707070]">{item.description}</p> : null}
                          </Link>
                        ) : (
                          <div key={item.label} className="border border-[#e3e3e3] bg-[#f8f8f8] px-5 py-5 text-sm text-[#333]">
                            <div className="font-medium mb-2">{item.label}</div>
                            {item.description ? <p className="text-sm leading-7 text-[#707070]">{item.description}</p> : null}
                          </div>
                        )
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="overflow-hidden border border-[#e3e3e3] bg-white">
                  <img src={section.image} alt={section.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </article>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}
