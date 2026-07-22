import { Link } from 'react-router-dom';
import { itmsContent } from '../data/itmsContent';

export default function About() {
  return (
    <section className="mx-auto min-h-[70vh] max-w-container-max px-5 py-20 md:px-margin-desktop">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] hover:text-[#b78a2b]">
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        Back to Home
      </Link>
      <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
        <div className="space-y-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#9a9a9a]">About us</p>
          <h1 className="text-[34px] font-semibold uppercase leading-tight tracking-[0.12em] text-[#333] md:text-[52px]">Sri Sai Corporation</h1>
          <p className="max-w-3xl text-base leading-8 text-[#666]">
            {itmsContent.whoWeAre}
          </p>
          <p className="max-w-3xl text-base leading-8 text-[#666]">
            {itmsContent.whatWeDo}
          </p>
        </div>
        <aside className="border border-[#e1e1e1] bg-[#f8f8f8] p-6">
          <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#777]">Company Notes</h2>
          <ul className="space-y-3 text-sm leading-7 text-[#444]">
            <li>Founded in 2010 as Infinity Trade & Marketing Solutions.</li>
            <li>Headquartered in New Delhi with branches in major Indian cities.</li>
            <li>Distributor for signage, interior, architectural, and lighting material.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
