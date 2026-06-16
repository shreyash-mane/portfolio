import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiExternalLink, FiDownload } from 'react-icons/fi';
import { personal } from '../../data/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#09090b]"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial from-zinc-950/30 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-zinc-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative section-container pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to Graduate Opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-white leading-[1.05]">
            Shreyash{' '}
            <span className="gradient-text">Mane</span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-3 tracking-tight">
            AI & Data Science Graduate
          </p>

          {/* Subtitle tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Machine Learning', 'NLP', 'LLM Evaluation', 'Data Analytics', 'AI Product Development'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/60 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
            {personal.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <a href={personal.cv} download className="btn-primary">
              <FiDownload size={15} />
              Download CV
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
              <FiArrowDown size={14} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <div className="w-px h-4 bg-slate-700" />
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <div className="w-px h-4 bg-slate-700" />
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <FiMail size={18} />
              <span className="hidden sm:inline">{personal.email}</span>
            </a>
            <div className="w-px h-4 bg-slate-700" />
            <a
              href={personal.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors text-sm"
            >
              <FiExternalLink size={16} />
              <span className="hidden sm:inline">data-lab.co.uk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-600 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
