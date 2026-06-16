export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className="mb-12 md:mb-16">
      {label && (
        <p className="font-mono text-xs font-medium text-zinc-400 uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
