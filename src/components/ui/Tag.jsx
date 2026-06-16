const colorMap = {
  indigo: 'bg-zinc-500/10 text-zinc-300 ring-1 ring-zinc-500/20',
  violet: 'bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/20',
  emerald: 'bg-zinc-500/10 text-zinc-300 ring-1 ring-zinc-500/20',
  amber: 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20',
  slate: 'bg-slate-700/50 text-slate-300 ring-1 ring-slate-600/30',
};

export default function Tag({ children, color = 'slate', className = '' }) {
  return (
    <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-md ${colorMap[color] ?? colorMap.slate} ${className}`}>
      {children}
    </span>
  );
}
