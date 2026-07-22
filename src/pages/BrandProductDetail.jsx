import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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

export default function BrandProductDetail() {
  const { id, slug } = useParams();
  const canonicalId = brandAlias[id] ?? id;
  const brandPage = itmsContent.brandPages?.[canonicalId];
  const brand = brandPage || itmsContent.brands.find((item) => item.id === canonicalId);
  const [activeProductTab, setActiveProductTab] = useState(slug);
  const productPage = itmsProductContent[canonicalId]?.[slug];
  const productTable = productPage?.table;
  const applicationCards = productPage?.applicationCards || [];
  const featureCards = productPage?.featureCards || [];
  const discriminationCards = productPage?.discriminationCards || [];
  const patternGallery = productPage?.patternGallery || [];

  // Check if this is an LX Hausys product tab
  const isLxHausysProduct = canonicalId === 'lxhausys' && brandPage?.productTabs;
  const productTabs = brandPage?.productTabs || [];
  const activeTab = productTabs.find((tab) => tab.slug === activeProductTab) || productTabs[0];

  const seriesNavItems = brandPage?.sections
    ?.flatMap((section) => section.items || [])
    .filter((item) => item.slug && Object.prototype.hasOwnProperty.call(brandPage?.productPages || {}, item.slug));

  const fallbackProduct = brandPage?.sections
    ?.flatMap((section) => (section.items || []).map((item) => ({ ...item, sectionTitle: section.title, sectionImage: section.image })))
    .find((item) => item.slug === slug);

  const renderTableCell = (row, header) => {
    const key = header.toLowerCase();
    if (key.includes('code')) return row.code || '';
    if (key.includes('description')) return row.description || row.pattern || '';
    if (key.includes('thickness') || key.includes('texture')) return row.thickness || row.texture || '';
    if (key.includes('warranty') || key.includes('durability')) return row.warranty || row.durability || '';
    if (key.includes('adhesive') || key.includes('type') || key.includes('colour') || key.includes('color')) return row.adhesive_type_colour || row.type || row.adhesive || '';
    if (key.includes('pattern')) return row.pattern || row.description || '';
    return Object.values(row).find((value) => typeof value === 'string') || '';
  };

  useEffect(() => {
    setActiveProductTab(slug);
  }, [slug]);

  if (!brand) {
    return (
      <section className="mx-auto min-h-[70vh] max-w-container-max px-5 py-20 md:px-margin-desktop">
        <Link to={`/brand/${id}`} className="mb-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] hover:text-[#b78a2b]">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Back to Brand
        </Link>
        <div className="border border-[#e1e1e1] bg-[#f8f8f8] p-12 text-center">
          <h1 className="text-[32px] font-semibold uppercase tracking-[0.12em] text-[#333]">Product not found</h1>
          <p className="mt-4 text-[#666]">This product page has not been defined yet for the selected brand.</p>
        </div>
      </section>
    );
  }

  // Render LX Hausys product table view
  if (isLxHausysProduct && activeTab) {
    return (
      <section className="mx-auto min-h-[70vh] max-w-container-max px-5 py-20 md:px-margin-desktop">
        <Link to={`/brand/${id}`} className="mb-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] hover:text-[#b78a2b]">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Back to {brand.name}
        </Link>

        <div className="border border-[#1f1f1f] bg-[#333] p-6 text-white md:p-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-semibold uppercase tracking-[0.18em] text-white md:text-3xl">LX HAUSYS PRODUCTS</h1>
          </div>

          <div className="mb-10 overflow-hidden border border-[#555] bg-[#3a3a3a]">
            <div className="flex flex-col sm:flex-row">
              {productTabs.map((tab) => (
                <Link
                  key={tab.slug}
                  to={`/brand/${id}/product/${tab.slug}`}
                  className={`flex-1 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                    activeTab?.slug === tab.slug ? 'bg-white text-[#333]' : 'text-slate-300 hover:bg-[#454545]'
                  }`}
                >
                  {tab.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-[#555] bg-white text-[#333]">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-[#f1f1f1] text-sm uppercase tracking-[0.12em] text-[#666]">
                <tr>
                  <th className="border-b border-slate-200 px-5 py-4">Product Code</th>
                  <th className="border-b border-slate-200 px-5 py-4">Description</th>
                  <th className="border-b border-slate-200 px-5 py-4">Film Thickness</th>
                  <th className="border-b border-slate-200 px-5 py-4">Warranty</th>
                </tr>
              </thead>
              <tbody>
                {activeTab?.rows?.map((row) => (
                  <tr key={row.code} className="border-b border-slate-200 last:border-b-0">
                    <td className="px-5 py-4 font-medium text-slate-900">{row.code}</td>
                    <td className="px-5 py-4 text-slate-700">{row.description}</td>
                    <td className="px-5 py-4 text-slate-700">{row.thickness}</td>
                    <td className="px-5 py-4 text-slate-700">{row.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  if (!productPage && !fallbackProduct) {
    return (
      <section className="mx-auto min-h-[70vh] max-w-container-max px-5 py-20 md:px-margin-desktop">
        <Link to={`/brand/${id}`} className="mb-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] hover:text-[#b78a2b]">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Back to Brand
        </Link>
        <div className="border border-[#e1e1e1] bg-[#f8f8f8] p-12 text-center">
          <h1 className="text-[32px] font-semibold uppercase tracking-[0.12em] text-[#333]">Product not found</h1>
          <p className="mt-4 text-[#666]">This product page has not been defined yet for the selected brand.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto min-h-[70vh] max-w-container-max px-5 py-20 md:px-margin-desktop">
      <Link to={`/brand/${id}`} className="mb-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] hover:text-[#b78a2b]">
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        Back to Brand
      </Link>

      <div className="overflow-hidden border border-[#e1e1e1] bg-[#f8f8f8]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-10 md:p-16">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#9a9a9a]">{brand.title}</p>
            <h1 className="mt-3 text-[32px] font-semibold uppercase leading-tight tracking-[0.1em] text-[#333] md:text-[48px]">{productPage?.title ?? fallbackProduct.label}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#666]">
              {productPage?.intro ?? fallbackProduct.description ?? brand.intro}
            </p>
          </div>
          <div className="min-h-70 bg-white">
            <img
              src={productPage?.heroImage ?? fallbackProduct.sectionImage ?? brand.sections[0]?.image}
              alt={productPage?.title ?? fallbackProduct.label}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid gap-10 border-t border-[#e1e1e1] p-7 md:p-12">
          {applicationCards.length ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {applicationCards.map((card) => (
                <div key={card.title} className="border border-[#e1e1e1] bg-white p-5">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center bg-[#f2f2f2] text-sm font-semibold text-[#333]">
                    {card.title.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-semibold text-[#333]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#666]">{card.description}</p>
                </div>
              ))}
            </div>
          ) : null}

          {featureCards.length ? (
            <div className="border border-[#e1e1e1] bg-white p-6">
              <h2 className="text-[26px] font-semibold uppercase tracking-[0.12em] text-[#333]">Features</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {featureCards.map((card) => (
                  <div key={card.title} className="border border-[#e1e1e1] bg-[#f8f8f8] p-5">
                    <h3 className="font-semibold text-[#333]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#666]">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {discriminationCards.length ? (
            <div className="border border-[#e1e1e1] bg-white p-6">
              <h2 className="text-[26px] font-semibold uppercase tracking-[0.12em] text-[#333]">Performance & Compliance</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {discriminationCards.map((card) => (
                  <div key={card.title} className="border border-[#e1e1e1] bg-[#f8f8f8] p-5">
                    <h3 className="font-semibold text-[#333]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#666]">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {patternGallery.length ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {patternGallery.map((item) => (
                <div key={item.title} className="overflow-hidden border border-[#e1e1e1] bg-white">
                  <img src={item.image} alt={item.title} className="h-40 w-full object-cover" loading="lazy" />
                  <div className="p-4 text-sm font-medium text-[#333]">{item.title}</div>
                </div>
              ))}
            </div>
          ) : null}

          {productTable ? (
            <div className="grid gap-10">
              {seriesNavItems?.length ? (
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-[#666]">View product series:</span>
                  {seriesNavItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/brand/${id}/product/${item.slug}`}
                      className={`border px-4 py-2 text-sm transition ${item.slug === slug ? 'border-[#333] bg-[#333] text-white' : 'border-[#d6d6d6] bg-white text-[#444] hover:border-[#b78a2b] hover:text-[#b78a2b]'}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              <div className="border border-[#e1e1e1] bg-white">
                <div className="flex flex-col gap-2 border-b border-[#e1e1e1] bg-[#f8f8f8] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#666]">Series products</p>
                    <p className="mt-1 text-sm text-[#666]">Showing {productTable.rows.length} products for {productPage.title}.</p>
                  </div>
                  <div className="border border-[#d6d6d6] bg-white px-4 py-2 text-sm text-[#333]">
                    {productTable.rows.length} items
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead className="bg-[#f8f8f8]">
                      <tr>
                        {productTable.headers.map((header) => (
                          <th key={header} className="whitespace-nowrap px-4 py-4 text-sm font-medium text-[#666]">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                      {productTable.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="even:bg-[#f8f8f8]">
                          {productTable.headers.map((header) => (
                            <td key={header} className="whitespace-nowrap px-4 py-4 text-sm text-[#666]">
                              {renderTableCell(row, header)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}

          {productPage?.sections ? (
            productPage.sections.map((section) => (
              <article key={section.title} className="grid gap-6 md:grid-cols-[320px_1fr] md:items-start">
                <div>
                  <h2 className="text-[26px] font-semibold uppercase tracking-[0.12em] text-[#333]">{section.title}</h2>
                  {section.description ? <p className="mt-3 leading-7 text-[#666]">{section.description}</p> : null}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={item.label} className="border border-[#e1e1e1] bg-white p-4 text-sm text-[#333]">
                      <div className="font-medium">{item.label}</div>
                      {item.description ? <p className="mt-2 leading-7 text-[#666]">{item.description}</p> : null}
                    </div>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <article className="grid gap-6 md:grid-cols-[320px_1fr] md:items-start">
              <div>
                <h2 className="text-[26px] font-semibold uppercase tracking-[0.12em] text-[#333]">{fallbackProduct.sectionTitle}</h2>
                {fallbackProduct.description ? <p className="mt-3 leading-7 text-[#666]">{fallbackProduct.description}</p> : null}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="border border-[#e1e1e1] bg-white p-4 text-sm text-[#333]">
                  <div className="font-medium">{fallbackProduct.label}</div>
                  {fallbackProduct.description ? <p className="mt-2 leading-7 text-[#666]">{fallbackProduct.description}</p> : null}
                </div>
                {brand.sections
                  .find((section) => section.title === fallbackProduct.sectionTitle)
                  ?.items.filter((item) => item.slug !== slug)
                  .map((item) => (
                    <div key={item.label} className="border border-[#e1e1e1] bg-white p-4 text-sm text-[#333]">
                      <div className="font-medium">{item.label}</div>
                      {item.description ? <p className="mt-2 leading-7 text-[#666]">{item.description}</p> : null}
                    </div>
                  ))}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
