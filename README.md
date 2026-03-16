# Mahavir Electronics and Furniture — Website README

## 📦 Files Included

```
mahavir/
├── index.html       ← Homepage
├── products.html    ← Products listing page
├── about.html       ← About Us + Gallery
├── contact.html     ← Contact form + Map
├── style.css        ← All styles (mobile-first)
├── script.js        ← All interactivity
├── sitemap.xml      ← SEO sitemap
├── robots.txt       ← Search engine crawl rules
├── schema.json      ← JSON-LD LocalBusiness schema (reference)
└── README.md        ← This file
```

---

## ✏️ Quick Update Checklist (Before Going Live)

1. **Phone number**: Search for `8432732489` in all files — confirm it's correct everywhere.
2. **WhatsApp links**: Search `wa.me/918432732489` — update if number changes.
3. **Google Maps embed**: In `index.html` and `contact.html`, replace the `<iframe src="...">` with the actual embed from your Google Business Profile:
   - Go to Google Maps → Search your business → Share → Embed a map → Copy iframe code
4. **Domain name**: Replace all instances of `https://www.mahavirelectronics.in` with your actual website domain.
5. **GA4**: Replace `G-XXXXXXXXXX` in `index.html` with your real Google Analytics 4 ID.
6. **Formspree**: In `contact.html` and `script.js`, replace `YOUR_FORMSPREE_ID`:
   - Sign up free at https://formspree.io
   - Create a new form → copy the form ID (looks like `xknezzzz`)
   - Paste it in place of `YOUR_FORMSPREE_ID`
7. **Images**: Replace Unsplash placeholder URLs with real product/shop photos.
8. **Store stats**: In `about.html`, update the numbers (customers, years, products).
9. **Email**: In `contact.html`, replace `mahavir.electronics@example.com` with real email.

---

## 🚀 Deployment Option 1: Netlify (FREE — Recommended)

### Steps:
1. Go to https://netlify.com and create a free account.
2. Click **"Add new site"** → **"Deploy manually"**.
3. Drag and drop the entire `mahavir/` folder into the Netlify drop zone.
4. Your site will be live in seconds at a URL like `https://random-name.netlify.app`.
5. To use a custom domain (e.g., `www.mahavirelectronics.in`):
   - Go to Site Settings → Domain Management → Add custom domain
   - Update your domain's DNS records as instructed by Netlify

### Auto-deploy from GitHub:
1. Upload the folder to a GitHub repository.
2. In Netlify: Add new site → Import from Git → Select your repo.
3. Every time you update files and push to GitHub, the site auto-publishes.

---

## 🌐 Deployment Option 2: cPanel / Shared Hosting

### Steps:
1. Log in to your hosting control panel (cPanel).
2. Open **File Manager**.
3. Navigate to `public_html/` (this is your website root).
4. Click **Upload** and upload all files from the `mahavir/` folder:
   - `index.html`, `products.html`, `about.html`, `contact.html`
   - `style.css`, `script.js`
   - `sitemap.xml`, `robots.txt`
5. Your site is now live at your domain.

### Uploading via FTP:
1. Use FileZilla (free FTP client from https://filezilla-project.org).
2. Connect using your hosting FTP credentials (from cPanel → FTP Accounts).
3. Drag files from your local `mahavir/` folder to the `public_html/` folder on the server.

---

## 🖼️ How to Update Products / Images

### Method 1: Direct HTML Edit (Simplest)
Open `products.html` in any text editor (Notepad, VS Code, etc.) and:
- Find a `<article class="product-card">` block
- Change the `src=` URL to your product image URL
- Change the `<h3>` product name, `<p>` description, `.card-price` price
- Save and re-upload the file

### Method 2: Replace Images via Folder
1. Create an `assets/images/` folder inside `mahavir/`
2. Put your product images there (name them simply: `tv-samsung.jpg`, `sofa-brown.jpg`)
3. In the HTML, replace `https://images.unsplash.com/...` with `assets/images/tv-samsung.jpg`

### Method 3: Upgrade to WordPress (Recommended for easy updates)
If you want to update products without editing HTML:
1. Install WordPress on your hosting (most cPanel hosts have 1-click WordPress install)
2. Install free theme: **Astra** or **OceanWP**
3. Install plugin: **WooCommerce** (free) — add products as you would on a shop
4. Copy the colour scheme (from `:root` variables in `style.css`) to the WordPress Customizer
5. The contact form can use the **WPForms** free plugin instead of Formspree

---

## 🎨 Color Palette Options

### Option A (Default — Warm Wood + Electric Blue)
```css
--accent:  #1A6FBB  /* Electric Blue */
--wood:    #7A4F2E  /* Warm Wood Brown */
--bg:      #F5EFE6  /* Cream Background */
```

### Option B (Forest Green Trust)
```css
--accent:  #2E7D32  /* Forest Green */
/* Change all --accent references in style.css */
```

### Option C (Burnt Orange Energy)
```css
--accent:  #E65100  /* Burnt Orange */
/* Change all --accent references in style.css */
```
To switch palette: Open `style.css`, find `:root {` at the top, change the `--accent` value.

---

## 📊 SEO Meta Samples

### Homepage meta (already in index.html):
```html
<title>Mahavir Electronics & Furniture | Muktainagar, Maharashtra</title>
<meta name="description" content="Mahavir Electronics and Furniture — Muktainagar's trusted shop for TVs, home appliances, and furniture. Call 8432732489." />
```

### Product page meta example (add per product if needed):
```html
<title>Smart LED TV 43 inch — Mahavir Electronics | Muktainagar</title>
<meta name="description" content="Buy Smart LED TV 43 inch at Mahavir Electronics, Muktainagar. 4K Ultra HD, Wi-Fi enabled. Price from ₹22,000. Call 8432732489." />
```

---

## 📝 Formspree Contact Form Setup

1. Go to https://formspree.io → Sign Up (free plan allows 50 submissions/month)
2. Click **New Form** → Name it "Mahavir Website Contact"
3. Copy your form endpoint ID (e.g., `xknezzzz`)
4. In `contact.html`: replace `YOUR_FORMSPREE_ID` with your ID
5. In `script.js`: replace `YOUR_FORMSPREE_ID` in the fetch URL
6. Test the form — you should receive an email at your registered address

---

## ⚡ Performance Tips (Lighthouse Score Targets)

| Metric | Target |
|--------|--------|
| Performance | 85+ |
| Accessibility | 95+ |
| Best Practices | 90+ |
| SEO | 95+ |

### To improve performance:
- Convert all images to `.webp` format (use https://squoosh.app — free)
- Add `width` and `height` attributes to all `<img>` tags (already done)
- Use `loading="lazy"` on all images below the fold (already done)
- Enable GZIP compression on your server (cPanel → Optimize Website)
- Enable browser caching (add `.htaccess` file — see below)

### .htaccess for caching (add to `public_html/`):
```
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 📱 Accessibility Notes

- All images have `alt` text
- Color contrast meets WCAG AA (blue #1A6FBB on white = 4.8:1 ratio ✓)
- Focus styles visible for keyboard users
- Navigation has ARIA labels
- FAQ accordion uses proper `aria-expanded`
- Skip link available for screen readers (add `<a href="#main-content" class="skip-link">Skip to content</a>` inside `<body>` before header)

---

## 📞 Quick Reference — Key Phone/WhatsApp Links

| Purpose | Code |
|---------|------|
| Call button | `<a href="tel:+918432732489">Call</a>` |
| WhatsApp general | `<a href="https://wa.me/918432732489">WhatsApp</a>` |
| WhatsApp with message | `<a href="https://wa.me/918432732489?text=Hello%2C%20I%20am%20enquiring%20about%20[product]">WhatsApp</a>` |
| Google Maps directions | `<a href="https://maps.google.com/?q=Beside+OF+BOROLE+AGENSIES+Muktainagar">Directions</a>` |

---

## 💡 Estimated Build & Deployment Timeline

| Task | Time |
|------|------|
| Customize text/phone/address | 30 min |
| Replace placeholder images | 1–2 hours |
| Set up domain + Netlify | 1 hour |
| Set up Formspree form | 15 min |
| Google Maps embed update | 10 min |
| Total | ~4–5 hours |

---

*Built for Mahavir Electronics and Furniture, Muktainagar, Maharashtra 425306*
