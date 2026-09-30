# Sara Tonelli Studio — Palette, errori corretti e migliorie

Nuovo sito (Astro 5, statico) che sostituisce il sito Wix su www.saratonellistudio.com.
23 pagine · 16 progetti · 23 foto originali · 0 link rotti. Versione impaginata:
`Sara-Tonelli-Palette-Interventi.pdf` (consegnato a parte, non versionato).

---

## 1. Palette

Il sito originale è **bianco, nero e grigio**: fondo bianco, testo quasi nero, fasce e bottoni
grigio scuro. Colori misurati a schermo e presi dai grigi del tema Wix. Il petrolio presente
nelle impostazioni del tema non compare mai a schermo, quindi **non** è stato adottato.
Tutti i colori sono token in `src/styles/global.css` (`:root`).

| Token | HEX | Uso | Contrasto |
|---|---|---|---|
| `--bg` · `--surface` | `#FFFFFF` | Fondo, card, velo dell'intro | — |
| `--tint` | `#F5F5F5` | Sezioni a fondo alternato | — |
| `--ink` | `#111111` | Titoli e testo principale | 18,9:1 |
| `--muted` | `#5C5C5C` | Testo corrente (il `#727272` del tema su `--tint` darebbe 4,4:1) | 6,7:1 |
| `--line` · `--line-strong` | `#DCDCDC` · `#B0B0B0` | Linee, bordi di campi e bottoni | — |
| `--accent` · `--accent-deep` | `#363636` · `#1F1F1F` | Bottoni, link, sopratitoli; hover | 12,1:1 |
| `--dark` · `--dark-2` | `#363636` · `#2A2A2A` | Fasce scure (ambiti, CTA, footer) | bianco 12,1:1 |
| `--accent-on-dark` (nuovo) | `#B0B0B0` | Numeri e sopratitoli sulle fasce scure | 5,6:1 |

**Marchio.** Sul sito originale esisteva solo come JPEG (icona del browser). Ridisegnato in SVG
sulle coordinate dell'originale e verificato per sovrapposizione: `public/brand/logo.svg`,
`mark.svg`, favicon, icona Apple.

**Tipografia.** Nessun font di brand (il sito Wix usa Avenir/Helvetica/Raleway di sistema):
Fraunces per i titoli, Inter per il testo.

## 2. Errori corretti rispetto al sito originale

| Sito originale | Nel nuovo sito |
|---|---|
| Pagina Progetti vuota: il menu porta a tre gallerie senza titoli né descrizioni | Portfolio con 16 progetti, filtri, schede con galleria, pagina Ambiti |
| URL Wix sbagliati: `/copia-di-progetti`, `/copia-di-progetti-1`, `/copia-di-ristrutturazioni` (che mostra l'Interior design) | URL puliti: `/progetti/`, `/ambiti/`, `/metodo/`, `/studio/`, `/contatti/` |
| Quattro pagine con lo stesso titolo "PROGETTI" | Titolo e meta description unici per pagina e progetto |
| Icone WhatsApp, Instagram, LinkedIn senza link | Link a WhatsApp e Instagram `saratonelli.studio`; LinkedIn quando ci sarà l'URL |
| Servizi solo come titoli | Descrizione per ogni servizio, in tre fasi |
| Foto senza testo alternativo; ritratto con alt "WhatsApp Image 2026-09-28 at 15.39_edite" | Testi alternativi descrittivi |
| Telefono "+ 39 3468381479" | "+39 346 8381479", cliccabile |
| Marchio solo JPEG | Marchio SVG |
| Nessun dato strutturato | JSON-LD dello studio (indirizzo, coordinate, contatti, fondatrice, anno, Instagram) |
| Nessun link alle indicazioni | Link a Google Maps |
| **Privacy e Cookie policy copiate da altri siti** (`studiotecnicotonelli.it`, `induestudio.com`, email `tonellisara93@gmail.com`) | **Non importate**: serve un'informativa nuova |

Rispetto alla prima bozza di riempimento: grigio testo della mappa `#8A8579` (3,5:1) portato a
6,7:1; il rosso `#f07575` scritto nei componenti è ora un token; foto da 38 a 4 MB (`dist` da 47 a
13 MB); foto orizzontale ritagliata a striscia nella pagina Chi sono sostituita con una verticale.

## 3. Migliorie

- **Intro col marchio**: la casa si disegna, cresce il germoglio, compare "SARA TONELLI STUDIO"
  (una volta per visita, saltabile, disattivata con reduced-motion).
- Hero con colonne di foto in scorrimento, mazzo progetti trascinabile, reveal delle sezioni.
- Modulo contatti con tipo di intervento (i 6 servizi), città, superficie, tempistica + WhatsApp.
- Immagini WebP responsive, sitemap, robots, canonical, Open Graph 1200×630, responsive a 375 px.

## 4. Verifiche e cosa resta

Pre-deploy: installazione pulita come Netlify + build ok (23 pagine, nessun avviso); 966
riferimenti interni, 0 rotti; nessun segnaposto/localhost nel build; 404, sitemap (22 URL), robots.

Da fornire: privacy e cookie policy nuove · endpoint del modulo contatti · URL LinkedIn ·
spostamento del dominio da Wix a Netlify.
Da far confermare a Sara: titoli e testi dei 16 progetti (+ luogo e anno), descrizioni dei
servizi, sintesi degli ambiti, orari, frase di consenso.
