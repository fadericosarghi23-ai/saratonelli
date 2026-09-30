# Sara Tonelli Studio — sito

Sito di Sara Tonelli Studio, progettazione architettonica e interior design a Sassuolo (MO).
Astro 5, statico, nessun framework UI. Dominio: https://www.saratonellistudio.com

```bash
npm install
npm run dev       # http://localhost:4630
npm run build     # build statica in dist/
npm run preview   # anteprima della build su :4631
npm run slots     # elenca i marker [[DA COMPILARE]] / [[DA VALIDARE]] rimasti
```

## Struttura

```
src/
  layouts/BaseLayout.astro     head, SEO, JSON-LD dello studio, reveal on scroll
  components/                  header, footer, bottone, mazzo progetti, mazzo team, intro col marchio
  pages/                       home, progetti (+ scheda), ambiti, metodo (servizi), studio (chi sono), contatti, 404
  content/progetti/*.md        16 progetti (nuove costruzioni, ristrutturazioni, interior design)
  content.config.ts            schema della collection "progetti"
  assets/images/               foto originali della cliente, per sezione
  styles/global.css            token di colore e tipografia (palette in :root)
  lib/testo.ts                 nasconde i marker in produzione
public/brand/                  marchio SVG, favicon, icona Apple, copertina Open Graph
```

## Deploy (Netlify)

`netlify.toml` è già pronto: `npm run build`, pubblica `dist/`, Node 20.
Il `package-lock.json` non è versionato: quello generato su Windows rompe i binding nativi su
Linux (npm#4828), quindi Netlify installa da zero (`NPM_FLAGS=--no-package-lock`).

Il **modulo contatti non invia**: `data-endpoint=""` in `src/pages/contatti.astro`. Va collegato
(Netlify Forms, Formspree…) prima di andare online.

## Documenti

- `PALETTE-E-INTERVENTI.md` — palette, errori corretti rispetto al sito originale, migliorie.
- `REPORT.md` — dettaglio del riempimento, media importati, cosa resta aperto.
