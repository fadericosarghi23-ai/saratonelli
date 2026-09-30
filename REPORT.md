# Sara Tonelli Studio — report di riempimento

Sito della cliente clonato da `base-architettura-studio-2` (la base resta vuota), riempito con
`CONTENT_FILL.md` (mappa 04) e poi completato con il materiale del sito originale
**www.saratonellistudio.com** (Wix) e del suo Instagram.
Dev `npm run dev` → http://localhost:4630 · preview 4631 · build verde, 23 pagine.

## Esito

| Controllo | Esito |
|---|---|
| Build | verde, 23 pagine, nessun avviso, `dist` 13 MB |
| Pagine in dev | tutte 200, 404 corretta, nessuna immagine rotta |
| Animazioni | intro col marchio, marquee hero, reveal, mazzo progetti, mazzo team, filtri, gallery a clip: vive |
| Mobile 375 px | nessuno scroll orizzontale |
| Segnaposto nel build di produzione | **0** |
| Residui base/enzoferrara | zero |

## Palette (bianco, nero e grigi come il sito originale — solo token in `src/styles/global.css`)

Misurata a schermo sul sito: fondo bianco, testo quasi nero, fasce e bottoni grigio scuro #363636;
grigi neutri del tema Wix #727272 e #B0B0B0. Il petrolio #035772 del tema Wix **non** è usato
a schermo, quindi non è stato adottato.

| Token | Valore |
|---|---|
| `--bg` / `--surface` | #FFFFFF |
| `--tint` | #F5F5F5 |
| `--ink` | #111111 |
| `--muted` | #5C5C5C (il #727272 del tema su --tint darebbe 4.4:1) |
| `--line` / `--line-strong` | #DCDCDC / #B0B0B0 |
| `--accent` / `--accent-deep` | #363636 / #1F1F1F |
| `--accent-on-dark` (nuovo) | #B0B0B0 |
| `--dark` / `--dark-2` | #363636 / #2A2A2A |

Contrasti: testo 18.9:1, muted 6.7:1, accento/bianco 12.1:1, grigio chiaro su fasce scure 5.6:1.
Il rosso chiaro `#f07575` era scritto a mano in 10 punti dei componenti: ora è il token
`--accent-on-dark`. `theme-color` #363636. Marchio SVG in #111111 con tessera bordata #B0B0B0.

## Media importati dal sito originale

- **Foto**: 23 originali Wix a piena risoluzione (tutte le foto del sito, esclusi i post
  Instagram incorporati, che sono contenuti di terze parti).
  1 hero · 4 nuove costruzioni · 10 ristrutturazioni · 7 interior · 1 ritratto.
  Salvate in `src/assets/images/<sezione>/` (passano da `astro:assets`), ridotte a max 2400 px
  JPEG q82: da 38 MB a 4 MB, a video identiche.
- **Ritratto**: 1036×1404, sufficiente per la card del team (la mappa lo dava per inutilizzabile).
- **Logo**: sul sito c'è solo il wordmark testuale; l'unico asset del marchio è l'immagine del
  favicon (casa a linea con germoglio, 1254×1254 raster). Ridisegnato in vettoriale sulle
  coordinate dell'originale e verificato in sovrapposizione: `public/brand/logo.svg`,
  `mark.svg` (tessera 34×34 dell'header), `favicon.svg`, `favicon-16/32.png`,
  `apple-touch-icon.png`. L'originale raster è in `../sara-tonelli-media/`.
- **Video**: nessuno sul sito originale. **Mappe/iframe**: nessuno.
- **OG image**: 1200×630 dalla foto hero.

## Contenuti

- Testi della mappa (verbatim, accenti ripristinati) + frasi della cliente dal suo Instagram
  (didascalia del post incorporato in home) per le introduzioni di ambiti e portfolio.
- 16 progetti con le foto delle tre gallerie del sito: 4 nuove costruzioni, 8 ristrutturazioni,
  4 interior. Le foto sono raggruppate solo quando ritraggono lo stesso edificio/ambiente.
  Titoli e testi descrivono ciò che si vede nella foto; luogo e anno lasciati vuoti (non
  esistono sul sito originale e la pagina li nasconde).
- Dominio `https://www.saratonellistudio.com` (canonical, sitemap, robots, JSON-LD).
- Instagram `https://www.instagram.com/saratonelli.studio/` (header, footer, JSON-LD).
- Orari: "Ricevo su appuntamento" (assenti sul sito, suggerimento della mappa).
- Form: resta **inerte** (`data-endpoint=""`) finché non si collega un servizio di invio.

## Ancora aperto (3 righe `[[DA COMPILARE]]`, un solo dato)

- **URL LinkedIn**: sul sito originale l'icona LinkedIn c'è ma non ha link, e la ricerca non trova
  il profilo (i risultati sono omonime). In produzione il link LinkedIn non viene reso finché
  manca l'URL.

## Da far verificare alla cliente (28 `[[DA VALIDARE]]`)

- Titoli e descrizioni dei 16 progetti (scritti da noi sulle foto), e i raggruppamenti di foto.
- Descrizioni dei 6 servizi (RISCRITTO nella mappa) e titoli delle fasi.
- Sintesi degli ambiti, titolo "Costruire, ristrutturare, abitare", card "Tutti i progetti",
  numeri della pagina Chi sono, tempistiche del form, orari.
- **Privacy**: la formula di consenso è standard, ma serve un'informativa vera. Le pagine
  "Privacy policy" e "Cookie policy" del sito originale **non sono riutilizzabili**: sono copiate
  da altri siti (citano `studiotecnicotonelli.it` con SiteGround e Google Analytics, e
  `induestudio.com`) e riportano un'email diversa (tonellisara93@gmail.com).

`npm run slots` elenca tutti i marker.
