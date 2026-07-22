import { itmsContent } from '../data/itmsContent';
import logoUrl from '../assets/logo-web.svg';

export default function Footer() {
  const serviceLink = (item) => {
    if (item === 'Products') return '/#products';
    if (item === 'Events') return '/#partners';
    if (item === 'CSR') return '/#what-we-do';
    if (item === 'Careers') return '/careers';
    if (item === 'Contact') return '/#contact';
    return '/#home';
  };

  return (
    <footer id="contact" className="w-full bg-[#4b4b4b] py-14 font-body-md text-[#dcdcdc]">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-5 md:grid-cols-3 md:gap-16 md:px-margin-desktop">
        
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-4 w-[3px] bg-white"></div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">About Us</h4>
          </div>
          
          <div className="mb-6 flex h-[92px] w-[176px] items-center">
            <img src={logoUrl} alt="Sri Sai Corporation logo" className="h-full w-auto object-contain" />
          </div>
          
          <p className="mb-8 pr-4 text-sm font-light leading-7 text-[#d0d0d0]">{itmsContent.footer.about}</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold text-lg">f</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold text-lg">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold text-lg">in</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold text-lg">g+</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold text-lg">p</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <span className="material-symbols-outlined text-[20px]">language</span>
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-4 w-[3px] bg-white"></div>
            <h4 className="font-bold text-white tracking-widest uppercase text-sm">Contact Us</h4>
          </div>
          
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-light">
            <p className="font-bold text-white pr-4">Head Office</p>
            <p className="pr-4">Sri Sai Corporation</p>
            <p className="mb-6 pr-4">{itmsContent.footer.address}</p>
            
            <div className="flex items-center gap-3 mt-8">
              <span className="material-symbols-outlined text-[18px]">call</span>
              <p>{itmsContent.footer.phones}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <p>{itmsContent.footer.email}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-4 w-[3px] bg-white"></div>
            <h4 className="font-bold text-white tracking-widest uppercase text-sm">Services</h4>
          </div>
          
          <div className="flex flex-col">
            {itmsContent.footer.services.map((item, index) => (
              <a 
                key={index} 
                href={serviceLink(item)}
                className="py-3.5 text-sm text-gray-400 hover:text-white transition-colors border-b border-gray-500/30 block font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
      </div>
      <div className="mx-auto mt-12 flex max-w-container-max flex-col gap-6 border-t border-gray-500/30 px-5 pt-8 text-sm text-gray-400 md:px-margin-desktop">
        <div className="flex flex-wrap gap-4">
          {itmsContent.footer.policies.map((policy) => (
            <a key={policy.label} href={policy.href} className="hover:text-white transition-colors">
              {policy.label}
            </a>
          ))}
        </div>
        <div>{itmsContent.footer.copyright}</div>
      </div>
      <div className="hidden">
        <div id="privacy-policy" />
        <div id="cookie-policy" />
        <div id="terms-of-use" />
      </div>
    </footer>
  );
}
