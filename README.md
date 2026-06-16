# Shreyash Mane — Portfolio

Personal portfolio website for Shreyash Mane, AI & Data Science Graduate.

**Live site:** [shreyash-mane.github.io](https://shreyash-mane.github.io) *(update once deployed)*
**GitHub repo:** https://github.com/shreyash-mane/portfolio

**Tech stack:** React 18 · Vite 5 · Tailwind CSS 3 · react-icons

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Folder Structure

```
portfolio/
├── public/
│   ├── certificates/
│   │   ├── lloyds-forage-certificate.pdf
│   │   └── quantium-forage-certificate.pdf
│   ├── cv/
│   │   └── Shreyash_Mane_CV_DataScientist_Startup.pdf
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/                    ← optional static images (e.g. profile.jpg)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Dissertation.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certifications.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── SectionHeader.jsx
│   │       └── Tag.jsx
│   ├── data/
│   │   └── portfolio.js           ← ALL CONTENT LIVES HERE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

---

## Remaining TODOs

- [ ] Replace placeholder certifications in `src/data/portfolio.js` with real ones
- [ ] Add `public/og-image.png` (1200×630) for social media link previews
- [ ] Update canonical URL in `index.html` to your actual deployed domain
- [ ] Submit sitemap to Google Search Console

---

## Customisation

All content is centralised in **`src/data/portfolio.js`**. Edit that file to update:

- Personal info (name, email, GitHub, LinkedIn URLs)
- Skills and categories
- Projects (title, description, links, tech stack)
- Work experience
- Education
- Certifications

### Updating Social Links

Open `src/data/portfolio.js` and update the `personal` object:

```js
export const personal = {
  github: 'https://github.com/shreyash-mane',
  linkedin: 'https://linkedin.com/in/shreyash-mane-368138177',
  email: 'shreyashmane22@gmail.com',
  // ...
};
```

### CV

Your CV is already placed at:
```
public/cv/Shreyash_Mane_CV_DataScientist_Startup.pdf
```

The path is referenced in `src/data/portfolio.js` via the `personal.cv` field. If you rename the file, update that field to match:

```js
cv: '/cv/Shreyash_Mane_CV_DataScientist_Startup.pdf',
```

### Adding Certifications

In `src/data/portfolio.js`, replace the placeholder entries in `certifications`:

```js
export const certifications = [
  {
    id: 'google-ml',
    name: 'Machine Learning Crash Course',
    issuer: 'Google',
    date: 'Jan 2025',
    placeholder: false,
  },
  // ...
];
```

### Adding Project Certificates

Place certificate PDFs in `public/certificates/`. The two Forage certificates are already there:
```
public/certificates/lloyds-forage-certificate.pdf
public/certificates/quantium-forage-certificate.pdf
```

Reference them in the project entry via the `certificate` field in `portfolio.js`.

### Adding an OG Image

Create a `1200×630` PNG at `public/og-image.png` for link previews on LinkedIn, Twitter, etc.

---

## Deployment — Vercel (Recommended)

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration (Zero-config)

1. Push to `https://github.com/shreyash-mane/portfolio`
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the `shreyash-mane/portfolio` repository
4. Framework will be auto-detected as **Vite**
5. Click **Deploy**

Vercel will auto-deploy on every push to `main`.

### Custom Domain

In Vercel dashboard → **Settings** → **Domains** → add your domain.

Update `index.html` with your actual domain:
```html
<link rel="canonical" href="https://yourdomain.com" />
<meta property="og:url" content="https://yourdomain.com" />
```

---

## SEO Checklist

- [x] `<title>` tag with name + role keywords
- [x] `<meta name="description">` with 155-char summary
- [x] Open Graph tags for LinkedIn/social previews
- [x] Twitter Card tags
- [x] JSON-LD structured data (Person schema)
- [x] `robots.txt`
- [x] Semantic HTML (`<section>`, `<nav>`, `<main>`, `<footer>`, `aria-label`)
- [ ] Add `og-image.png` (1200×630)
- [ ] Update canonical URL to your actual domain
- [ ] Submit sitemap to Google Search Console

---

## LinkedIn Profile Optimisation

**Headline:**
```
AI & Data Science Graduate | Machine Learning · NLP · LLM Evaluation | MSc Heriot-Watt | Open to Graduate Roles
```

**About section — opening hook:**
```
I build practical AI solutions. From evaluating large language models across English and Hindi mental health contexts (MSc dissertation) to shipping DataLab — a production AI-powered data analysis platform — I work at the intersection of research and real-world application.

Currently seeking graduate roles in: AI Engineering · ML Engineering · Data Science · NLP · Data Analytics
```

**Featured section:** Pin DataLab (data-lab.co.uk) as your #1 featured item.

**Skills to add:** Python, Machine Learning, NLP, LLM Evaluation, PyTorch, Scikit-learn, SQL, Data Science, Pandas, Prompt Engineering, Data Visualization, Power BI.

---

## GitHub Profile Optimisation

**GitHub bio:**
```
AI & Data Science Graduate (MSc Heriot-Watt) · ML · NLP · LLM Evaluation · Builder of DataLab · data-lab.co.uk
```

**Pinned repositories to feature:**
1. DataLab (if open-sourced or link to live site)
2. MSc Dissertation project
3. Customer Churn Prediction (`lloyds-forage-certificate.pdf` already in repo)
4. Retail Analytics (`quantium-forage-certificate.pdf` already in repo)

**Profile README** (`github.com/shreyash-mane/shreyash-mane`):
- Add a skills badges section
- Link to your portfolio site
- Add your DataLab live link (data-lab.co.uk)

---

## Assets Reference

| File | Status | Purpose | Dimensions |
|------|--------|---------|-----------|
| `public/og-image.png` | **Missing — add this** | Social media link preview | 1200×630 |
| `public/favicon.svg` | Included | Browser tab icon | SVG |
| `public/cv/Shreyash_Mane_CV_DataScientist_Startup.pdf` | Included | CV download | — |
| `public/certificates/lloyds-forage-certificate.pdf` | Included | Lloyds Forage certificate | — |
| `public/certificates/quantium-forage-certificate.pdf` | Included | Quantium Forage certificate | — |
| `src/assets/profile.jpg` | Optional | Profile photo in About section | 400×400 |

---

## Performance

- Code-split vendor and icons chunks (configured in `vite.config.js`)
- Google Fonts loaded with `display=swap`
- No heavy animation libraries
- Tailwind CSS purged in production build
- Zero unused dependencies

---

## License

MIT — feel free to adapt for your own portfolio.
