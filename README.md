# Greenview Turf

Static website for [greenview-turf.com](https://greenview-turf.com), hosted on GitHub Pages.

## Stack

Plain HTML + CSS + vanilla JS — no build step, no dependencies.

## Local preview

Open `index.html` in a browser, or run a simple dev server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deployment (GitHub Pages)

1. Push to the `main` branch.
2. In the repo **Settings → Pages**, set source to `main` / `/ (root)`.
3. GitHub will publish the site at `https://<username>.github.io/greenview-turf/`.
4. To use the custom domain `greenview-turf.com`, add a `CNAME` file (see below) and update your DNS.

## Custom domain setup

1. Create a file called `CNAME` in the repo root containing just:
   ```
   greenview-turf.com
   ```
2. At your DNS registrar, point the apex domain to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   And add a `www` CNAME record → `<username>.github.io`.
3. In **Settings → Pages**, enable "Enforce HTTPS" once the cert is issued (~10 min).

## Contact form

The form uses [Formspree](https://formspree.io) (free tier, 50 submissions/month).

1. Sign up at formspree.io.
2. Create a new form and copy your form ID.
3. In `index.html`, replace `YOUR_FORM_ID` in the form `action` URL with your actual ID.
