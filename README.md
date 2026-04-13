# Greenview Turf

Static website for [greenview-turf.com](https://greenview-turf.com), hosted on GitHub Pages.

## Stack

Plain HTML + CSS + vanilla JS — no build step, no dependencies.

## Local preview

Open `index.html` in a browser

```bash
open path/to/index.html
```
or run a simple dev server:

```bash
npx serve .
# or
python3 -m http.server 8080
```



## Custom domain

DNS is managed on Cloudflare. The `CNAME` file in the repo root tells GitHub Pages to serve the site at `greenview-turf.com`.

## Contact form

The form uses [Formspree](https://formspree.io) (free tier, 50 submissions/month).

1. Sign up at formspree.io.
2. Create a new form and copy your form ID.
3. In `index.html`, replace `YOUR_FORM_ID` in the form `action` URL with your actual ID.

## CSS / JS caching

GitHub Pages' CDN aggressively caches static assets. After making changes to `style.css` or `main.js`, bump the version query string in `index.html` to force the CDN and browsers to fetch the updated files:

```html
<link rel="stylesheet" href="style.css?v=3" />
<script src="main.js?v=3"></script>
```

Increment the version number (`?v=2`, `?v=3`, etc.) with each deploy that includes CSS or JS changes.
