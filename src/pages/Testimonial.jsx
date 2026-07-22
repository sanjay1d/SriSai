import { Link } from 'react-router-dom';

const testimonials = [
  { quote: 'Reliable supply, clear communication, and steady support for our signage business.', author: 'Source-style client note' },
  { quote: 'The distribution team understands product availability and turnaround needs well.', author: 'Trade partner note' },
  { quote: 'A useful space for collecting customer feedback as the portfolio grows.', author: 'Customer note' },
];

export default function Testimonial() {
  return (
    <section className="mx-auto min-h-[70vh] max-w-container-max px-5 py-20 md:px-margin-desktop">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] hover:text-[#b78a2b]">
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        Back to Home
      </Link>
      <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#9a9a9a]">Testimonials</p>
      <h1 className="mt-3 text-[34px] font-semibold uppercase leading-tight tracking-[0.12em] text-[#333] md:text-[52px]">Customer feedback</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.quote} className="border border-[#e1e1e1] bg-[#f8f8f8] p-6 leading-7 text-[#666]">
            <p className="text-[#333]">"{item.quote}"</p>
            <footer className="mt-4 text-[12px] uppercase tracking-[0.22em] text-[#888]">{item.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
