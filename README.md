# Janine Standish Wellness Site

Modern static rebuild of the original Wix site, preserving language while improving visual quality, responsiveness, and search visibility.

## Stack
- HTML
- CSS
- Vanilla JavaScript
- Static hosting on Vercel

## Local development
```bash
cd "/Users/josephstewart/Documents/New project"
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## Deploy to GitHub + Vercel

### 1) Push to GitHub
```bash
git add .
git commit -m "Modernize site and add SEO foundations"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2) Import in Vercel
- Add New Project -> Import GitHub repo.
- Framework preset: `Other` (or Static).
- Build command: leave empty.
- Output directory: leave empty.

### 3) Connect custom domain
- In Vercel project settings, add domain.
- Point DNS records as instructed by Vercel.

## SEO improvements included
- Optimized `<title>` and `<meta name="description">`.
- Canonical URL.
- Open Graph + Twitter metadata.
- Structured data (`LocalBusiness` JSON-LD).
- `robots.txt` and `sitemap.xml`.

## Critical post-launch visibility steps
1. Verify domain in Google Search Console.
2. Submit sitemap: `https://www.janinestandish.com/sitemap.xml`.
3. Create/verify Google Business Profile and keep NAP details consistent:
   - Name: Janine Standish Wellness, LLC
   - Address: 700 Godwin Avenue, Suite 230, Midland Park, NJ 07432
   - Phone: (201) 282-6720
4. Add backlinks from trusted local directories/professional listings.
5. Add social profile links in JSON-LD (`sameAs`) once available.

## Content updates for better reach
- Add location-specific service copy under Services (e.g., Midland Park, Bergen County, New Jersey).
- Add individual pages per service in future (`/couples-counseling`, `/yoga`, `/mindfulness`) for targeted keyword relevance.
- Add FAQ section with plain-language questions clients search for.

## Files
- `index.html`: Content + structure + SEO metadata + structured data
- `styles.css`: Visual system and responsive styles
- `script.js`: Mobile nav + reveal animations
- `robots.txt`: Crawler directives
- `sitemap.xml`: Indexable URL list

## Important customization
Before launch, confirm/update these fields if needed:
- Canonical URL in `index.html`
- `og:url` in `index.html`
- Structured data details in `index.html`
- Domain references in `robots.txt` and `sitemap.xml`
