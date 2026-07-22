import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-container-max flex-col justify-center px-5 py-20 md:px-margin-desktop">
      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#9a9a9a]">Sri Sai Corporation</p>
      <h1 className="text-[34px] font-semibold uppercase leading-tight tracking-[0.12em] text-[#333] md:text-[52px]">Careers</h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-[#666]">
        Career details from the source site will be mirrored here as the next content slice. The page stays inside SriSai and preserves the same internal navigation pattern.
      </p>
      <div className="mt-8">
        <Link to="/#contact" className="inline-flex border border-[#333] bg-[#333] px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#333]">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
