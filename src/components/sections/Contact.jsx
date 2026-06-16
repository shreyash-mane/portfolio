import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { personal } from '../../data/portfolio';

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    desc: 'Best way to reach me',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreyash-mane-368138177',
    href: personal.linkedin,
    desc: 'Connect professionally',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/shreyash-mane',
    href: personal.github,
    desc: 'View my code',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Edinburgh, Scotland',
    href: null,
    desc: 'Open to remote & relocation',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Hi Shreyash,\n\nMy name is ${name} (${email}).\n\n${message}`;
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setStatus('sent');
  };

  return (
    <section id="contact" className="section-padding bg-[#09090b]">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's work together"
          subtitle="Open to graduate roles in AI Engineering, Data Science, ML and NLP. Always happy to connect."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: Contact info */}
          <div className="space-y-4">
            <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
              Whether you have a role in mind, want to collaborate on a project, or simply want to chat about AI and data science — feel free to reach out. I typically respond within 24 hours.
            </p>

            {contactLinks.map(({ icon: Icon, label, value, href, desc }) => (
              <div key={label} className="card card-hover p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-white hover:text-zinc-300 transition-colors font-medium truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white font-medium">{value}</p>
                    )}
                    <p className="text-xs text-slate-600 mt-0.5">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact form */}
          <div className="card p-6 md:p-8">
            <h3 className="text-base font-semibold text-white mb-5">Send a message</h3>

            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-12 h-12 rounded-full bg-zinc-500/15 border border-zinc-500/30 flex items-center justify-center mb-4">
                  <FiSend size={20} className="text-zinc-400" />
                </div>
                <p className="text-white font-medium mb-1">Opening your email client…</p>
                <p className="text-sm text-slate-500">Your message has been pre-filled. Just hit Send.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-5 text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-zinc-500 focus:outline-none text-white placeholder-slate-600 rounded-lg transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-zinc-500 focus:outline-none text-white placeholder-slate-600 rounded-lg transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Graduate ML Engineer Role"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-zinc-500 focus:outline-none text-white placeholder-slate-600 rounded-lg transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or what you'd like to discuss…"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-zinc-500 focus:outline-none text-white placeholder-slate-600 rounded-lg transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center py-3 text-sm"
                >
                  <FiSend size={15} />
                  Send Message
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
