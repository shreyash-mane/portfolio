import { FiExternalLink, FiGithub, FiCheckCircle, FiAward } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { projects } from '../../data/portfolio';

const typeStyles = {
  indigo: {
    badge: 'bg-zinc-700/40 text-zinc-200 border border-zinc-600/40',
    accent: 'from-white via-zinc-400 to-zinc-700',
    glow: 'hover:shadow-zinc-900/60',
    border: 'border-zinc-800 hover:border-zinc-500/60',
  },
  violet: {
    badge: 'bg-violet-500/15 text-violet-300 border border-violet-500/25',
    accent: 'from-violet-500 to-pink-500',
    glow: 'hover:shadow-violet-950/50',
    border: 'border-slate-800 hover:border-violet-500/30',
  },
  emerald: {
    badge: 'bg-zinc-500/15 text-zinc-300 border border-zinc-500/25',
    accent: 'from-zinc-500 to-zinc-500',
    glow: 'hover:shadow-zinc-950/50',
    border: 'border-slate-800 hover:border-zinc-500/30',
  },
  amber: {
    badge: 'bg-amber-500/15 text-amber-300 border border-amber-500/25',
    accent: 'from-amber-500 to-orange-500',
    glow: 'hover:shadow-amber-950/50',
    border: 'border-slate-800 hover:border-amber-500/30',
  },
};

function ProjectCard({ project, featured = false }) {
  const style = typeStyles[project.typeColor] ?? typeStyles.indigo;

  return (
    <div
      className={`group relative bg-slate-900/60 border rounded-xl overflow-hidden transition-all duration-200 shadow-xl ${style.border} ${style.glow} hover:shadow-2xl`}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${style.accent}`} />

      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-md uppercase tracking-wide ${style.badge}`}>
              {project.type}
            </span>
            {project.status === 'live' && (
              <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md uppercase tracking-wide bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </div>
          <span className="text-[11px] text-slate-500 font-mono flex-shrink-0">{project.role}</span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-2 leading-tight ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mb-4">{project.subtitle}</p>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className={`mb-6 ${featured ? 'grid sm:grid-cols-2 gap-x-6 gap-y-2' : 'space-y-2'}`}>
          {project.features.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <FiCheckCircle size={13} className="text-zinc-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-slate-400 leading-relaxed">{f}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <Tag key={t} color={project.typeColor}>
              {t}
            </Tag>
          ))}
        </div>

        {/* Impact note */}
        {project.impact && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-slate-800/50 border-l-2 border-zinc-500/50">
            <p className="text-xs text-slate-400 leading-relaxed">
              <span className="text-zinc-400 font-medium">Impact: </span>
              {project.impact}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <FiGithub size={14} />
              View Code
            </a>
          )}
          {project.certificate && (
            <a
              href={project.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <FiAward size={14} />
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [datalab, ...rest] = projects;

  return (
    <section id="projects" className="section-padding bg-[#111113]">
      <div className="section-container">
        <SectionHeader
          label="Featured Projects"
          title="What I've built"
          subtitle="A selection of projects demonstrating applied machine learning, NLP research and AI product development."
        />

        {/* Featured project — DataLab */}
        <div className="mb-6">
          <ProjectCard project={datalab} featured />
        </div>

        {/* Rest of projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
