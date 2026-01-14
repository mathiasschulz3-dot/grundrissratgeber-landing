# GrundrissRatgeber.de - Landing Page

## 🚀 Schnell-Upload Guide für GitHub

### Schritt 1: GitHub Repository erstellen
1. Gehe zu https://github.com/new
2. Name: `grundrissratgeber-landing`
3. **Wichtig:** KEINE README, .gitignore oder License hinzufügen
4. Repository erstellen

### Schritt 2: Diese Dateien hochladen

**ALLE Dateien in diesem Ordner** auf einmal hochladen:

```
✅ Diese Dateien hochladen:
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/                  (leerer Ordner)
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

**So geht's:**
1. In deinem GitHub Repo auf "uploading an existing file" klicken
2. ALLE Dateien aus diesem Ordner auswählen (Strg+A / Cmd+A)
3. In GitHub ziehen
4. Commit message: "Initial commit"
5. Fertig!

### Schritt 3: Auf Vercel deployen

1. Gehe zu https://vercel.com
2. "New Project" → Dein GitHub Repo auswählen
3. "Deploy" klicken
4. ✅ Läuft!

### Domain verbinden

**In Vercel:**
- Settings → Domains
- `grundrissratgeber.de` hinzufügen

**Bei IONOS:**
- A Record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

---

**Fragen?** Schreib mir einfach! 😊

## Technische Details

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Outfit & Playfair Display

## Features

✨ Modernes Design mit Animationen
📱 Vollständig responsive
🚀 "Coming Soon" Badge
💰 Alle Revenue-Streams vorbereitet
🎯 6 Feature-Bereiche angeteast
