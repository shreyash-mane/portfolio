import { FiAward } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { education } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-[#09090b]">
      <div className="section-container">
        <SectionHeader
          label="Education"
          title="Academic background"
          subtitle="Graduate training in data science, machine learning and AI research."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="card card-hover p-6 md:p-8 bg-gradient-to-br from-slate-900/80 to-zinc-950/20 border-zinc-500/15"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-zinc-500/10 border border-zinc-500/20 flex items-center justify-center flex-shrink-0">
                  <FiAward size={22} className="text-zinc-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-zinc-500/15 text-zinc-300 border border-zinc-500/25 rounded-md uppercase tracking-wide">
                      {edu.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                  <p className="text-zinc-400 font-medium text-sm mt-0.5">{edu.institution}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                  <p className="text-xs text-slate-600 mt-0.5">{edu.location}</p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-zinc-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-400 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Additional context card */}
          <div className="card p-6 md:p-8 bg-slate-800/20 border-dashed border-slate-700/50">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-3">Research Focus</p>
            <div className="space-y-3">
              {['Large Language Model Evaluation', 'Cross-Lingual NLP', 'Data Quality Engineering', 'Statistical Modelling', 'Machine Learning Pipelines'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="text-sm text-slate-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
