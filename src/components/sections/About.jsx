import { FiMapPin, FiBookOpen, FiCode, FiUsers } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { personal } from '../../data/portfolio';

const highlights = [
  { icon: FiBookOpen, label: 'Education', value: 'MSc Data Science', sub: 'Heriot-Watt University' },
  { icon: FiMapPin, label: 'Location', value: 'Edinburgh', sub: 'Scotland, UK' },
  { icon: FiCode, label: 'Focus Areas', value: 'ML · NLP · AI', sub: 'Data Science & Engineering' },
  { icon: FiUsers, label: 'Experience', value: 'Dell Technologies', sub: 'Senior Technician' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#111113]">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <SectionHeader
              label="About Me"
              title="Turning data into intelligence"
              subtitle={null}
            />
            <div className="space-y-4">
              {personal.bioLong.map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-[15px]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="card p-5 card-hover">
                <div className="w-9 h-9 rounded-lg bg-zinc-500/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-zinc-400" />
                </div>
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                <p className="font-semibold text-white text-sm">{value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
              </div>
            ))}

            {/* DataLab live card */}
            <div className="card col-span-2 p-5 bg-gradient-to-br from-zinc-950/40 to-zinc-950/30 border-zinc-500/20 hover:border-zinc-500/40 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-1">Live Product</p>
                  <p className="font-semibold text-white text-sm">DataLab — AI Data Platform</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Built and deployed an end-to-end AI-powered data analysis platform
                  </p>
                </div>
                <a
                  href="https://data-lab.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-zinc-300 border border-zinc-500/30 rounded-lg hover:bg-zinc-500/10 transition-colors"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
