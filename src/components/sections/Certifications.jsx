import { FiAward, FiPlus } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { certifications } from '../../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[#111113]">
      <div className="section-container">
        <SectionHeader
          label="Certifications"
          title="Credentials & training"
          subtitle="Professional certifications and continuous learning achievements."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`card p-5 rounded-xl transition-all duration-200 ${
                cert.placeholder
                  ? 'border-dashed border-slate-700/60 bg-slate-900/30 opacity-50'
                  : 'card-hover'
              }`}
            >
              {cert.placeholder ? (
                <div className="flex flex-col items-center justify-center py-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-3">
                    <FiPlus size={18} className="text-slate-600" />
                  </div>
                  <p className="text-sm text-slate-600 font-medium">{cert.name}</p>
                  <p className="text-xs text-slate-700 mt-1">{cert.issuer}</p>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-500/10 flex items-center justify-center flex-shrink-0">
                    <FiAward size={18} className="text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{cert.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                    {cert.date && <p className="text-xs text-slate-600 mt-1 font-mono">{cert.date}</p>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-600 text-center">
          Actively pursuing certifications in ML, cloud and data engineering
        </p>
      </div>
    </section>
  );
}
