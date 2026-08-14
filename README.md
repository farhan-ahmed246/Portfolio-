# Farhan — AI Engineer & Web Developer Portfolio

A premium, single-page portfolio with:

- ⚡ Realistic human-like **typing animation** on load → "Hi, I am Farhan. I am 30 years old." then a gradient word-reveal of **AI ENGINEER & DEVELOPER**
- 🎬 Elegant scroll-reveal animations, animated skill bars, hover effects and transitions throughout
- 🗂️ **Projects** tab — click a card to open a full detail view with a **sharp, never-stretched/pixelated image**
- 🎓 **Education** section ("Currently Studying")
- 📞 **Hire Me** tab — tap-to-call phone (`0336 3016943`) and tap-to-email (`fmukhtar420@gmail.com`)
- 🔗 **Social Links** — LinkedIn, Fiverr, GitHub (inline SVG icons — work on every device)
- ✉️ **Contact Me** — powered by [Web3Forms](https://web3forms.com) → sends to `fmukhtar420@gmail.com`
- 🖱️ **Custom cursor** (dot + trailing glow ring, grows on hover) — desktop only, never on touch screens
- 🎠 Infinite tech marquee ticker (HTML · CSS · JS · Python · N8N · Zapier · AI …)
- 🎴 **3D tilt + mouse spotlight** on project cards, **animated count-up** hero stats
- 📱 Fully responsive: phones, tablets, laptops, TVs — no overflow, no broken icons
- ♿ SEO meta tags + JSON-LD, screen-reader support, `prefers-reduced-motion` support, loading states and error handling

---

## 1. Run it locally

```bash
# from this folder
python -m http.server 8123
```

Then open http://127.0.0.1:8123 in your browser.
(Any static server works — `npx serve`, VS Code Live Server, etc.)

## 2. ✅ Web3Forms — already set up

Your access key is already pasted into **`js/main.js`** and the form was verified end-to-end
(preflight 200 + `{"success": true}` with your key). Submissions are delivered to
`fmukhtar420@gmail.com`.

If you ever need to change it: open `js/main.js` and edit:

```js
var WEB3FORMS_ACCESS_KEY = '99b9c475-6d69-4d35-b369-4934590623c4';
```

You can manage the destination inbox anytime in your Web3Forms dashboard (https://web3forms.com).

## 3. Add / edit your projects (easy)

Open **`js/projects.js`**. Each project is one object:

```js
{
  title: "My Project",                          // card + modal title
  description: "Short text shown on the card.",
  longDescription: "Full details in the modal.\nUse \\n for new lines.",
  image: "assets/img/my-project.png",           // path or full URL
  tags: ["HTML", "CSS", "JavaScript"]
}
```

Copy a block, paste it inside `PROJECTS`, edit, done. The card and modal update automatically.

**For sharp images:** use images at least **1200px wide**. The detail view caps the display size at the image's real pixel width, so it never upscales, stretches, or pixelates. Missing/broken images show a styled gradient placeholder instead of an ugly broken icon.

## 4. Customize the rest

| What | Where |
| --- | --- |
| Name / tagline / hero | `index.html` (hero section) |
| About text | `index.html` (About section) |
| Skill names & levels | `js/main.js` → `SKILLS` array (level 0–100) |
| Education | `index.html` (Education section) |
| Phone / email | `index.html` (Hire Me section + footer) |
| Social links | `index.html` (Social section + footer) |
| Colors / fonts | `css/styles.css` → `:root` variables |
| SEO title / description / canonical | `index.html` `<head>` (update `https://farhanahmed.dev/`) |

## 5. Deploy

It's 100% static — no build step.

- **Netlify:** drag & drop the folder → https://app.netlify.com/drop
- **GitHub Pages:** push to a repo → Settings → Pages → deploy from `main` (root)
- **Vercel:** import the repo, framework = "Other", no build command

> Note: keep `fmukhtar420@gmail.com` verified as the recipient in your Web3Forms dashboard so form emails always arrive.

## Files

```
index.html          → page structure (all sections)
css/styles.css      → all styling + animations + responsive rules
js/main.js          → typing, reveals, skills, modal, form, menu
js/projects.js      → ⭐ your project data (edit this)
assets/img/         → project images, favicon, social-cover
```
