# Digithum Consultancy Services — Next.js

Premium real-estate consultancy website built from the supplied Stitch direction.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project architecture

- `app/page.js` — homepage
- `app/data.js` — single source of truth for all five project cards/dossiers
- `app/projects/[slug]/page.js` — dynamic project dossier pages
- `app/components/ContactForm.js` — enquiry form
- `app/api/contact/route.js` — optional HubSpot Forms API integration
- `public/digithum-logo.jpg` — supplied logo

## HubSpot

Copy `.env.example` to `.env.local` and set:

```env
HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_FORM_ID=your_form_id
```

The form intentionally reports an error until HubSpot is configured, rather than pretending that a lead was stored.

## Important content note

The five project records use placeholder/advisory copy and image URLs for the design/build stage. Replace the records in `app/data.js` with verified project details, current prices, developer names, RERA information and owned/licensed imagery before production.
