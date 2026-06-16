import { FiBriefcase } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { experience } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#111113]">
      <div className="section-container">
        <SectionHeader
          label="Professional Experience"
          title="Work history"
          subtitle="Enterprise experience that shaped my approach to problem-solving, collaboration and delivery."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-500/40 via-slate-700/40 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.id} className="md:pl-14 relative">
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-7 w-3 h-3 rounded-full bg-zinc-500 ring-4 ring-[#080f1f] hidden md:block" />

                <div className="card card-hover p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      {/* Company icon */}
                      <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                        <FiBriefcase size={18} className="text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{job.role}</h3>
                        <p className="text-zinc-400 font-medium text-sm">{job.company}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="inline-block px-3 py-1 text-xs font-mono text-slate-400 bg-slate-800/60 border border-slate-700 rounded-lg">
                        {job.period}
                      </span>
                      <p className="text-xs text-slate-500 mt-1">{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-zinc-400 mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-400 leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Tag key={skill} color="slate">{skill}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
