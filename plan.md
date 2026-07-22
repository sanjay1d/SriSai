# ITMS Replica Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current SriSai frontend into an exact in-project replica of https://www.itms-india.com/ by fixing the hidden-at-start transparent header, replacing placeholder content with source-accurate content, and making brand/product pages stay inside this app while matching the original layout and wording.

**Architecture:** Keep the existing Vite + React app shell, but move all content into a shared source-of-truth module so the homepage, brand grid, brand detail pages, product gallery, and footer all read from the same data. Preserve the current route shape (`/` and `/brand/:id`), but make each brand route render real content inside this project instead of linking out to the original website. The header should start invisible over the hero and only gain a visible surface after scroll.

**Tech Stack:** React, React Router, Vite, Tailwind CSS, static assets in `public/`

---

## Working Rules

- Keep edits inside `c:\Caasdi\SriSai`.
- Do not add new routes unless a source page clearly needs one.
- Prefer one shared content module over hard-coded repeated strings in components.
- Preserve the current app structure unless a file needs to be split for clarity.
- Never navigate users out to the original website from brand pages or product cards. Internal routes must carry the same information, images, and section structure.
- The navbar must be transparent and effectively invisible at the top of the page, then become readable after scroll.
- Match the original menu content and ordering as closely as possible before introducing any extra items.
- After any code change, verify with `npm run build` before moving to the next slice.
- If a code change is made, add the corresponding entry to the date-based file under `Documents/` for the current day.

## Source Parity Checklist

- Transparent sticky header over the hero that starts invisible, matches the source menu content, and becomes readable on scroll.
- Homepage hero/banner that matches the source imagery and title treatment.
- "Who We Are" and "What We Do" copy aligned to the source site.
- Brand grid entries for the real source brands: 3M, LX Hausys, SRF, Vagus, Inkdot, Interone.
- Dedicated brand pages with the real brand descriptions, product cards, and section images, all rendered inside SriSai.
- Products gallery using real product images and labels instead of random placeholders.
- Vagus / Inkdot / Interone showcase section with all three brands represented.
- Footer content that matches the source structure and contact details.

## Source Inventory

### Homepage navigation

- The navbar is a collapsed header at the top of the page: logo on the left, a toggle control, and no visible menu box before scroll.
- The top-level menu labels are Home, About, Products, Events, Sustainability, Careers, and Contact.
- The Products menu expands into grouped categories instead of a flat list.

### Top-Level Menu Tree

- `Home` → `index.html`
- `About` → grouped about links in the header menu
- `Products` → product mega menu with category groups
- `Events` → header link with homepage-style anchor/section behavior
- `Sustainability` → header link with homepage-style anchor/section behavior
- `Careers` → `careers.html`
- `Contact` → `contact.html`

### Products Mega Menu

- `Sign & Graphics`
	- `3M` → `3M.html`
	- `LxHausys` → `LxHausys.html`
	- `SRF` → `SRF.html`
	- `Vagus` → `Vagus.html`
	- `Vagus-Enviro` → `Vagus-Enviro.html`
	- `Allsign` → `Allsign.html`
	- `Inkdot` → `Inkdot.html`
- `Lighting`
	- `Inventronics` → `inventronics.html`
	- `Interone` → `Interone.html`
	- `Meanwell` → `Meanwell.html`
	- `Allsign LED Modules` → `../../allsign/LED-Modules.html`
	- `Allsign Power Supply` → `../../allsign/Power-Supply.html`
- `Architecture Interior`
	- `Interior Film` → `interior_film.html`
	- `Window Graphic Solution` → `window_graphic.html`
	- `Wall Graphic Solution` → `wall_graphic.html`
- `offset Printing`
	- `Calibrated Paper` → `#`
	- `Polyester Under Packing` → `#`
	- `Automatic Wash Cloth` → `#`
- `SRF`
	- `Coated Fabric` → `../srf/Coated-Fabric.html`

### Homepage content blocks

- `Who We Are`: founding story, 2010 launch, New Delhi headquarters, branches in Mumbai, Bengaluru, Jaipur, and Lucknow.
- `What We Do`: specialized marketing and distribution services for Sign & Graphics, Interior & Architectural, and Electrical & Lighting industries.
- `Products Gallery`: Interior Film, Window Film, Translucent Colour Film, Printing Film, One Way Vision, Canvas, Backlit Fabric, Flex, Ink, PVC Foam Sheet, Led Module, Power Supply.
- `Brands / showcase`: 3M, LX Hausys, SRF, Vagus, Inkdot, Interone.

### Brand pages and internal product inventory

- `3M`: About 3M, 3M Scotchcal Graphic Film, 3M Scotchcal Translucent Graphic Film 3630 Series, 3M Scotchcal Translucent Graphic Film 2630 Series, Economy Series, Promotional Series, Intermediate Series, Cast Series, PVC Free, Others.
- `3M 3630 detail page`: 3630-20 White, 3630-22 Black, 3630-68 Rose-Mauve, 3630-108 Pink, 3630-78 Vivid Rose, 3630-118 Intense Magenta, 3630-133 Raspberry, 3630-128 Plum Purple, 3630-49 Burgundy, 3630-53 Cardinal Red, 3630-73 Dark Red, 3630-83 Regal Red, 3630-33 Red, 3630-43 Tomato Red, 3630-143 Poppy Red, 3630-44 Orange, 3630-84 Orange, 3630-74 Kumquat Orange, 3630-25 Sunflower, 3630-75 Marigold, 3630-125 Golden Yellow, 3630-015 Yellow, 3630-115 Light Lemon Yellow, 3630-106 Brilliant Green, 3630-136 Lime Green, 3630-146 Light Kelly Green, 3630-156 Vivid Green, 3630-116 Bright Jade Green, 3630-26 Green, 3630-76 Holly Green, 3630-126 Dark Emerald Green, 3630-246 Teal Green, 3630-236 Turquoise, 3630-87 Royal Blue, 3630-36 Blue, 3630-137 European Blue, 3630-157 Sultan Blue, 3630-97 Bristol Blue, 3630-167 Bright Blue, 3630-127 Intense Blue, 3630-337 Process Blue, 3630-147 Light European Blue, 3630-57 Olympic Blue, 3630-317 Evening Blue, 3630-51 Silver Grey, 3630-71 Shadow Grey, 3630-61 Slate Grey, 3630-69 Duranodic, 3630-59 Dark Brown, 3630-63 Rust brown, 3630-109 Light Rust Brown, 3630-129 Bronze, 3630-005 Ivory, 3630-149 Light Beige, 3630-131 Gold Metallic, 3630-141 Gold Nugget, 3630-121 Silver.
- `LX Hausys`: About LX Hausys, Why LX Hausys, Cut Vinyl, Flexible Substrate, Signboard Protection Film, LX Hausys Benif-Interior Film, LX Hausys Glass Film.
- `SRF`: About SRF, Coated Fabrics, Laminated Fabrics, plus the associated distributor explanation.
- `Vagus`: About Vagus, Printing Vinyl, Clear Vinyl, Premium Lamination, One Way Vision, Window Films, Canvas, Backlit Fabric, Translite.
- `Inkdot`: About Inkdot, Solvent Inks, Eco-Solvent Inks.
- `Interone`: About Interone, Lenticular 1-LED, Lenticular 3-LED, Lenticular 4-LED.
- `Vagus-Enviro`: add if the source page requires it as a distinct product family before closing phase 2.
- `Inventronics`, `Meanwell`, and `Allsign` families: track them as follow-up branches if the source site exposes dedicated pages for them under the product mega menu.

### Additional Source Pages to Track

- `careers.html`
- `contact.html`
- `About` submenu pages if present in the original header
- `Vagus-Enviro.html`
- `inventronics.html`
- `Meanwell.html`
- `Allsign.html`
- `interior_film.html`
- `window_graphic.html`
- `wall_graphic.html`
- `Coated-Fabric.html`
- All 3M 3630 series deep-detail pages listed above

### Internal navigation rules

- Product and brand cards should open internal SriSai routes or in-page sections only.
- Any `EXPLORE` or `BROWSE BY` action should resolve to an internal project page that contains the same information, not the source website.
- If the source page has a section with no deeper detail yet, the replica should still show the same section title, intro copy, and visible image rather than linking out.
- Do not advance from one phase to the next until the current phase has been cross-checked against the source inventory above.
- Use the source inventory as the acceptance gate for each phase: the phase is only complete when the relevant pages, menu items, labels, and images are accounted for.

## Phase 1: Build a Shared Content Source

### Task 1: Create a single content module for homepage and brand pages

**Files:**
- Create: `src/data/itmsContent.js`
- Create: `src/data/itmsNavigation.js`
- Modify: `src/components/BrandsGrid.jsx`
- Modify: `src/components/ProductsGallery.jsx`
- Modify: `src/components/Partnership.jsx`
- Modify: `src/pages/BrandDetail.jsx`
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Add the source content map**

Create `src/data/itmsContent.js` with structured objects for:
- header links and their scroll targets
- homepage hero copy
- `whoWeAre` and `whatWeDo` text
- brand cards for 3M, LX Hausys, SRF, Vagus, Inkdot, Interone
- brand page data with sections, product cards, CTA labels, and internal route targets
- product gallery items and image paths
- footer contact and service links

Create `src/data/itmsNavigation.js` with the navbar items, their source order, and whether each item should scroll to a homepage section or open a brand page.

Use the source-site wording directly for the long-form text blocks, and keep the brand/product keys stable so route params can look them up.

- [ ] **Step 2: Wire the brand grid to the shared data**

Replace the hard-coded cards in `src/components/BrandsGrid.jsx` with a map over `itmsContent.brands`. Each card should keep the clickable route behavior, but the title, short description, and brand styling should come from the shared content object. Brand cards must open internal brand detail routes only.

- [ ] **Step 3: Wire the product gallery to the shared data**

Replace the Picsum placeholder list in `src/components/ProductsGallery.jsx` with the real gallery items from `itmsContent.productGallery`. Each item should render the correct label and a real image path from `public/`, and any click behavior must stay within SriSai.

- [ ] **Step 4: Add the missing Interone block to the showcase section**

Update `src/components/Partnership.jsx` so it renders Vagus, Inkdot, and Interone sections from the shared content, with the correct copy and internal browse targets.

- [ ] **Step 5: Render brand detail pages from content**

Replace the placeholder text in `src/pages/BrandDetail.jsx` with a lookup into `itmsContent.brandPages[id]`. The page should render:
- brand heading and intro text
- source-style section titles
- product cards or section tiles
- back navigation
- a fallback state when a brand key is unknown

The page must not render external outbound links as primary actions. If a product card needs a click target, route it to a SriSai internal page or keep it as a non-navigating visual card until the internal page exists.

- [ ] **Step 6: Verify the shared data renders**

Run:
```bash
npm run build
```

Expected: the app compiles with no route or import errors.

## Phase 2: Fix the Header and Hero

### Task 2: Make the navigation bar transparent, invisible at start, and expandable

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/App.jsx` if the header needs layout support

- [ ] **Step 1: Replace the opaque bar with a transparent overlay header**

Update `src/components/Navbar.jsx` so the header sits on top of the hero, is invisible at the top of the page, uses a transparent or near-transparent background, and stays readable on scroll with a subtle blur or shadow fallback.

- [ ] **Step 2: Expand the desktop navigation set**

Add the source-style navigation set first, then extend only if there is still room and the original hierarchy remains recognizable.

- [ ] **Step 3: Add mobile navigation behavior**

Implement a compact mobile menu so the nav remains usable on smaller screens. Keep the interaction simple and deterministic: open, close, and navigate.

- [ ] **Step 4: Tune the hero spacing so the transparent header reads correctly**

Adjust `src/components/Hero.jsx` so the first visible content sits below the transparent header and the banner composition still feels intentional.

- [ ] **Step 5: Rebuild and visually sanity-check**

Run:
```bash
npm run build
```

Expected: the navbar and hero changes compile cleanly.

## Phase 3: Match the Source Homepage Sections

### Task 3: Replace placeholder homepage copy and section structure

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/WhatWeDo.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Replace the hero text and background treatment**

Use source-aligned homepage copy and a banner treatment that feels closer to the ITMS site than the current generic warehouse hero. The first viewport should make the navbar visually disappear into the hero.

- [ ] **Step 2: Update the "Who We Are" and "What We Do" sections**

Keep the section structure, but replace the current text with the source-site copy about the 2010 founding, branches, and distribution/marketing scope.

- [ ] **Step 3: Update the footer content and links**

Make the footer match the source layout more closely: About Us, Contact Us, Services, and the ITMS contact details.

- [ ] **Step 4: Reorder or tweak homepage sections only if needed for fidelity**

Keep the current landing-page flow unless the source order demands a change. Do not add decorative sections that are not present on the source page.

## Phase 4: Add the Real Asset Set

### Task 4: Replace placeholder imagery with source-like assets

**Files:**
- Add: `public/itms/...` image files
- Modify: `src/data/itmsContent.js`

- [ ] **Step 1: Download or copy the real source images into `public/itms/`**

Add folder groups for:
- brand logos and cards
- homepage banner images
- product gallery images
- brand page section images

- [ ] **Step 2: Point the data module at the local assets**

Update the shared content module so the homepage and brand pages use local paths instead of random placeholders or external filler images. Mirror the source image set as closely as possible.

- [ ] **Step 3: Confirm the image set is complete**

Verify every visible source-site card or gallery tile has a matching local asset path.

## Phase 5: Final Verification

### Task 5: Check layout, routes, and content parity

**Files:**
- Modify only if verification surfaces an issue

- [ ] **Step 1: Build the app**

Run:
```bash
npm run build
```

- [ ] **Step 2: Check the homepage route**

Confirm the homepage renders the transparent header, real hero, brand grid, product gallery, showcase section, and footer.

- [ ] **Step 3: Check every brand route**

Confirm the routes for 3M, LX Hausys, SRF, Vagus, Inkdot, Interone, and any other brand cards you keep all render real content without leaving SriSai.

- [ ] **Step 4: Check the mobile view**

Confirm the header menu is usable on a narrow viewport and the section spacing does not collapse.

- [ ] **Step 5: Add a short implementation note**

Record what changed in the current date file under `Documents/` so the project history stays current.

---

## Execution Order

1. Build the shared content module.
2. Make the header transparent and scalable.
3. Replace placeholder homepage content.
4. Populate brand detail pages.
5. Swap placeholder images for real assets.
6. Run the final build and route checks.