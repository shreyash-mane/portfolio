# Shreyash Mane — Portfolio

Personal portfolio website for Shreyash Mane, AI & Data Science Graduate.

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
Potfolio/
├── public/
│   ├── cv/
│   │   └── shreyash-mane-cv.pdf   ← ADD YOUR CV HERE
│   ├── og-image.png               ← ADD OG IMAGE (1200×630)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/                    ← static images if needed
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
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  email: 'your@email.com',
  // ...
};
```

### Adding Your CV

Place your CV PDF at:
```
public/cv/shreyash-mane-cv.pdf
```

The download button in the Navbar and Hero will automatically use it.

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

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
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
AI & Data Science Graduate (MSc Heriot-Watt) · ML · NLP · LLM Evaluation · Builder of DataLab 🔗 data-lab.co.uk
```

**Pinned repositories to feature:**
1. DataLab (if open-sourced or link to live site)
2. MSc Dissertation project
3. Customer Churn Prediction
4. Retail Analytics

**README.md** for your GitHub profile (`github.com/shreyashmane/shreyashmane`):
- Add a skills badges section
- Link to your portfolio site
- Add your DataLab live link

---

## Placeholder Image Locations

| File | Purpose | Dimensions |
|------|---------|-----------|
| `public/og-image.png` | Social media link preview | 1200×630 |
| `public/favicon.svg` | Browser tab icon | SVG (included) |
| `src/assets/profile.jpg` | Optional profile photo | 400×400 |

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
