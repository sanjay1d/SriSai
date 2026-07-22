import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo-web.svg';
import { itmsNavigation } from '../data/itmsNavigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState('products');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPanel = (panel) => {
    setActivePanel(panel);
    setIsMenuOpen(true);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300 ${
        isScrolled ? 'border-[#dedede] shadow-sm' : 'border-[#ececec]'
      }`}
    >
      <div className="mx-auto flex h-[82px] max-w-container-max items-center justify-between px-5 md:px-margin-desktop">
        <Link to="/#home" onClick={() => setIsMenuOpen(false)} className="flex items-center">
          <span className="flex h-[70px] w-[128px] items-center justify-center">
            <img src={logoUrl} alt="Sri Sai Corporation logo" className="h-full w-auto object-contain" />
          </span>
        </Link>

        <div className="hidden h-full items-center gap-1 lg:flex">
          {itmsNavigation.topLevel.map((item) => {
            if (item.label === 'About' || item.label === 'Products') {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => openPanel(item.label.toLowerCase())}
                  className={`flex h-full items-center border-b-2 px-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                    isMenuOpen && activePanel === item.label.toLowerCase()
                      ? 'border-[#b78a2b] text-[#b78a2b]'
                      : 'border-transparent text-[#333] hover:border-[#b78a2b] hover:text-[#b78a2b]'
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex h-full items-center border-b-2 border-transparent px-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#333] transition-colors hover:border-[#b78a2b] hover:text-[#b78a2b]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-3 border border-[#dadada] bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#222] transition-colors duration-200 hover:border-[#9e9e9e] hover:bg-[#f8f8f8]"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
            <span className="hidden sm:inline">Toggle navigation</span>
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-[#e5e5e5] bg-white`}>
        <div className="mx-auto max-w-container-max px-5 py-7 md:px-margin-desktop">
          <div className="grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)]">
            <div className="space-y-2">
              {itmsNavigation.topLevel.map((item) => {
                if (item.label === 'About' || item.label === 'Products') {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActivePanel(item.label.toLowerCase())}
                      className={`flex w-full items-center justify-between border-b border-[#eeeeee] py-3 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors last:border-b-0 ${
                        activePanel === item.label.toLowerCase() ? 'text-[#b78a2b]' : 'text-[#333]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block border-b border-[#eeeeee] py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#333] transition-colors last:border-b-0 hover:text-[#b78a2b]"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {activePanel === 'about' ? (
                <div className="border border-[#e8e8e8] bg-[#fafafa] p-5 md:col-span-2 xl:col-span-3">
                  <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8b8b8b]">About</h2>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className="border border-[#e5e5e5] bg-white p-4 text-[#222] transition-colors hover:border-[#b78a2b]">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-[#333]">Who We Are</span>
                      <span className="mt-2 block text-sm leading-relaxed text-[#767676]">Founding story and company background</span>
                    </Link>
                    <Link to="/itms-journey" onClick={() => setIsMenuOpen(false)} className="border border-[#e5e5e5] bg-white p-4 text-[#222] transition-colors hover:border-[#b78a2b]">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-[#333]">What We Do</span>
                      <span className="mt-2 block text-sm leading-relaxed text-[#767676]">Marketing and distribution services</span>
                    </Link>
                    <Link to="/testimonial" onClick={() => setIsMenuOpen(false)} className="border border-[#e5e5e5] bg-white p-4 text-[#222] transition-colors hover:border-[#b78a2b]">
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-[#333]">Testimonial</span>
                      <span className="mt-2 block text-sm leading-relaxed text-[#767676]">Customer feedback and source-style testimonial space</span>
                    </Link>
                  </div>
                </div>
              ) : null}

              {activePanel === 'products' ? (
                <>
                  {itmsNavigation.productGroups.map((group) => (
                    <div key={group.label} className="border border-[#e8e8e8] bg-[#fafafa] p-5">
                      <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8b8b8b]">
                        {group.label}
                      </h2>
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block border-b border-transparent py-1 text-[14px] text-[#333] transition-colors hover:border-[#d5b15e] hover:text-[#b78a2b]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
