Before making any changes, run `git branch --show-current`. If the current branch is `main`, create and check out a new feature branch named `update/contact-YYYYMMDD` (use today's date) and tell the user which branch was created. If already on a feature branch, proceed without creating a new one.

Update the contact information in index.html based on what the user specifies. The contact details live in the `contact-details` list inside the `#contact` section.

Things that can be updated:
- Phone number (there are two: 954-646-4892 and 561-902-8260) — update the `href="tel:..."` attribute and the visible text
- Mailing address
- Business hours
- Facebook URL or additional social links

Also check if any of these values appear elsewhere in the page (e.g. the hero section has a phone number button, and the nav has a Call Now button) and update those too so everything is consistent.

Ask the user: what would you like to change? List the current values and ask them to provide the new ones.
