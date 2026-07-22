import { Link } from 'react-router-dom';

const journeySteps = [
  { year: '2010', title: 'Started the journey', description: 'Infinity Trade & Marketing Solutions launched with a focus on organized marketing and distribution.' },
  { year: '2013', title: 'Expanded the brand base', description: 'The company broadened its supplier mix across signage and graphics material.' },
  { year: '2018', title: 'Strengthened national reach', description: 'Branch presence and service coverage expanded across India.' },
  { year: '2026', title: 'Digital refinement', description: 'The Sri Sai web experience presents the portfolio with clearer navigation and a more polished product journey.' },
];

export default function ItmsJourney() {
  return (
    <section className="mx-auto min-h-[70vh] max-w-container-max px-5 py-20 md:px-margin-desktop">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#555] hover:text-[#b78a2b]">
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        Back to Home
      </Link>
      <div className="max-w-4xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#9a9a9a]">Sri Sai Journey</p>
        <h1 className="mt-3 text-[34px] font-semibold uppercase leading-tight tracking-[0.12em] text-[#333] md:text-[52px]">Milestones and growth</h1>
        <div className="mt-10 grid gap-5">
          {journeySteps.map((step) => (
            <article key={step.year} className="grid gap-4 border border-[#e1e1e1] bg-[#f8f8f8] p-6 md:grid-cols-[120px_1fr] md:items-start">
              <div className="text-[28px] font-bold tracking-tight text-[#b78a2b]">{step.year}</div>
              <div>
                <h2 className="text-[22px] font-semibold uppercase tracking-[0.08em] text-[#333]">{step.title}</h2>
                <p className="mt-2 leading-7 text-[#666]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
