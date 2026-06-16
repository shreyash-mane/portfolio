import { FiBookOpen } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { dissertationDetail } from '../../data/portfolio';

export default function Dissertation() {
  const d = dissertationDetail;

  return (
    <section id="dissertation" className="section-padding bg-[#09090b]">
      <div className="section-container">
        <SectionHeader
          label="Research Spotlight"
          title="MSc Dissertation"
          subtitle="In-depth look at my primary research project in multilingual LLM evaluation."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title card */}
            <div className="card p-6 md:p-8 border-violet-500/20">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md uppercase tracking-wide bg-violet-500/15 text-violet-300 border border-violet-500/25">
                  MSc Dissertation
                </span>
                <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-slate-800 text-slate-400 border border-slate-700">
                  Heriot-Watt University · {d.year}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-6">
                {d.title}
              </h3>

              <p className="text-[15px] text-slate-400 leading-relaxed mb-6">
                {d.abstract}
              </p>

              {/* Languages */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-medium">Languages evaluated:</span>
                {d.languages.map((lang) => (
                  <span key={lang} className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Research dimensions */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Research Dimensions</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {d.dimensions.map((dim) => (
                  <div key={dim.label} className="card p-4 card-hover">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">{dim.label}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{dim.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Models */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-md bg-violet-500/10 flex items-center justify-center">
                  <FiBookOpen size={14} className="text-violet-400" />
                </div>
                <h4 className="text-sm font-semibold text-white">Models Evaluated</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {d.models.map((model) => (
                  <Tag key={model} color="violet">{model}</Tag>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="card p-5">
              <h4 className="text-sm font-semibold text-white mb-4">Skills Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {d.skills.map((skill) => (
                  <Tag key={skill} color="slate">{skill}</Tag>
                ))}
              </div>
            </div>

            {/* Key contribution */}
            <div className="card p-5 bg-gradient-to-br from-violet-950/30 to-slate-900/60 border-violet-500/20">
              <p className="text-xs text-violet-400 font-medium uppercase tracking-wider mb-2">Key Contribution</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Designed and executed a novel multilingual evaluation framework for assessing LLM responses in sensitive mental health contexts — across both encoder-based and decoder-based architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
