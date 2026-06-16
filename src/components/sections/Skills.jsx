import { FiCode, FiCpu, FiZap, FiBarChart2, FiTool } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { skillCategories } from '../../data/portfolio';

const iconMap = {
  code: FiCode,
  cpu: FiCpu,
  brain: FiZap,
  chart: FiBarChart2,
  tool: FiTool,
};

const headerColorMap = {
  indigo: 'text-zinc-400 bg-zinc-500/10',
  violet: 'text-violet-400 bg-violet-500/10',
  cyan: 'text-cyan-400 bg-cyan-500/10',
  emerald: 'text-zinc-400 bg-zinc-500/10',
  amber: 'text-amber-400 bg-amber-500/10',
};

const borderColorMap = {
  indigo: 'border-zinc-500/15 hover:border-zinc-500/30',
  violet: 'border-violet-500/15 hover:border-violet-500/30',
  cyan: 'border-cyan-500/15 hover:border-cyan-500/30',
  emerald: 'border-zinc-500/15 hover:border-zinc-500/30',
  amber: 'border-amber-500/15 hover:border-amber-500/30',
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#09090b]">
      <div className="section-container">
        <SectionHeader
          label="Technical Skills"
          title="Technology stack"
          subtitle="A curated overview of my technical capabilities across the AI and data science stack."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? FiCode;
            const iconClass = headerColorMap[cat.color] ?? headerColorMap.indigo;
            const borderClass = borderColorMap[cat.color] ?? borderColorMap.indigo;

            return (
              <div
                key={cat.id}
                className={`bg-slate-900/50 border rounded-xl p-6 transition-all duration-200 ${borderClass}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconClass}`}>
                    <Icon size={17} />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{cat.label}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Tag key={skill} color={cat.color}>
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
