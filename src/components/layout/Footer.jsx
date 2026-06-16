import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-[#09090b]">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-zinc-300 to-zinc-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">SM</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Shreyash Mane</p>
              <p className="text-xs text-slate-500">AI & Data Science Engineer</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600">
            © {year} Shreyash Mane · Edinburgh, Scotland
          </p>
        </div>
      </div>
    </footer>
  );
}
