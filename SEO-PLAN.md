# Rencana SEO Vluffy Accessories

Dokumen hidup. Ditulis berdasarkan audit kode + data Google Suggest (hl=id, gl=id)
pada 2026-11-07. Update setiap fase selesai.

Sumber metodologi: `keupera/seo-skills` — `nextjs-seo`, `keyword-research-briefs`,
`ecommerce-seo`, `local-seo`, `schema-markup`, `internal-linking-architecture`.

---

## Ringkasan keputusan

| Hal | Keputusan |
|---|---|
| Domain | `https://vluffycharm.my.id` |
| Lokasi | Jl. Nusa Indah No.58, Ngringin, Condongcatur, Depok, Sleman, DIY 55283 |
| Koordinat | `-7.7561768, 110.409622` (pin Vluffy Store, Google Maps) |
| Keyword utama | `charm bracelet` (umum) — dipilih pemilik |
| Halaman produk | **Dibuat** di `/produk/[slug]` |
| Bahasa | Indonesia, intent beli + lokal |

---

## Data permintaan pencarian (Google Suggest)

Diambil 2026-11-07. Angka = jumlah varian autocomplete yang muncul.

### Ada permintaan — LAYAK ditargetkan

| Query | Varian | Intent | Catatan |
|---|---|---|---|
| `charm bracelet` | 10 | Buy/Know campur | Head term, kompetitor Pandora/BSS/Barbie |
| `gelang charm` | 10 | Buy/Know | Padanan ID, kompetitor Pandora/Italian Charm |
| `gelang custom` | 10 | Buy | `nama`, `foto`, `couple`, `manik manik` |
| `charm bracelet harga` | 1 | Buy | Sub-intent harga |
| `gelang couple foto` | 10 | Buy | **Peluang bagus** — visual, cocok produk custom |
| `gelang couple custom` | 1 | Buy | Intent jelas |
| `gelang custom foto` | 3 | Buy | Sama dengan di atas |
| `gelang couple murah` | 7 | Buy | Sensitif harga; cocok untuk produk 3k–55k |
| `jam tangan custom` | 10 | Buy | `nama`, `logo`, `foto`, `jogja` |
| `italian charm bracelet` | 10 | Buy | **Volume + varian terkuat** (harga, couple, polos, terdekat) |
| `gelang italian charm` | 8 | Buy | Padanan ID |
| `charm bracelet jogja` | 2 | Buy lokal | Persaingan rendah |
| `gelang custom jogja` | 3 | Buy lokal | Persaingan rendah |
| `jam tangan custom jogja` | 2 | Buy lokal | Persaingan rendah |
| `toko charm jogja` | 2 | Buy lokal | Persaingan rendah |
| `italian charm jogja` | 2 | Buy lokal | Persaingan sangat rendah |
| `gelang anak custom` | 2 | Buy | Segmen tambahan |

### Tidak ada / minim permintaan — JANGAN targetkan

| Query | Alasan |
|---|---|
| `gelang charm jogja` | 0 varian |
| `gelang custom sleman` | 0 varian |
| `custom watch jogja` | 0 varian |
| `gelang couple sleman` | 0 varian |
| `aksesoris couple jogja` | 0 varian |

### Intent mismatch — JANGAN targetkan

| Query | Alasan |
|---|---|
| `charm custom` | Autocomplete mengarah ke `customer service charm` — bukan beli produk |
| `custom watch` | Mengarah ke `watch face` (smartwatch), bukan jam tangan fisik |
| `charm 3d` | Mengarah ke `3d print`, `3d model`, `3d nails` |
| `charm akrilik` | Dominan `bag charm akrilik`, konteks tas bukan gelang |

### Catatan strategi

- `charm bracelet` sebagai head term dipilih pemilik. Realistis: situs baru
  tidak akan mengalahkan Pandora di halaman 1. Yang menang adalah **kombinasi
  long-tail**: `charm bracelet couple`, `charm bracelet murah`,
  `charm bracelet custom nama`, `charm bracelet jogja`.
- `italian charm bracelet` punya permintaan paling terbukti namun **tidak**
  dipakai sebagai keyword utama. Tetap dipakai sebagai keyword sekunder di
  halaman produk/kategori karena relevan dengan produk yang dijual.
- Prioritas efektif: **head term dipakai di title homepage**, lalu
  didistribusikan ke long-tail di halaman kategori dan produk.

---

## Kondisi teknis awal (hasil audit)

| # | Masalah | Tingkat | Status |
|---|---|---|---|
| 1 | `/collections`, `/custom-charm`, `/custom-watch` **tidak punya `<h1>`** | Kritis | ✅ Fase 1 |
| 2 | `breadcrumbSchema` tidak dipakai di halaman selain bundling | Tinggi | ✅ Fase 1 |
| 3 | Tidak ada URL per produk — semua menumpang `/collections` | Kritis | Fase 2 |
| 4 | `Offer.price` dikirim sebagai number, bukan string | Tinggi | ✅ Fase 1 |
| 5 | `shippingDetails` & `hasMerchantReturnPolicy` absen | Tinggi | ✅ Fase 1 |
| 6 | Internal link hub↔spoke belum ada | Tinggi | Fase 2 |
| 7 | `ItemList` menunjuk `/collections` untuk semua produk (non-spesifik) | Sedang | ✅ Fase 1 |
| 8 | `meta keywords` dirender (diabaikan Google sejak 2009) | Rendah | ✅ Fase 1 dihapus |
| 9 | `FAQPage` schema — dampak rich result ~0 sejak 2023 | Rendah | dibiarkan |
| 10 | Judul & h1 berbahasa Inggris tanpa keyword | Tinggi | ✅ Fase 1 |
| 11 | Konten kategori tidak ada (hanya grid produk) | Tinggi | Fase 2 |

> Koreksi: `productSchema` **sudah** terpasang di halaman bundling sebelum Fase 1.
> Hanya field-nya yang tidak lengkap.

---

## Fase 1 — Fondasi teknis ✅ SELESAI (2026-11-07)

Tujuan: perbaiki bug tanpa mengubah URL. Risiko nol, bisa deploy kapan saja.

- [x] Tambah `<h1>` bermakna di `/collections`, `/custom-charm`, `/custom-watch`
- [x] Ganti h1 berbahasa Inggris di homepage menjadi head term
- [x] `productSchema` dilengkapi: `price` string, `shippingDetails`,
      `hasMerchantReturnPolicy`
- [x] `breadcrumbSchema` + komponen `Breadcrumb` visual di 4 halaman
- [x] `ItemList` di `/collections` menunjuk anchor `#produk-[slug]` yang nyata
- [x] Hapus `<meta name="keywords">` dari render
- [x] Title & description homepage/koleksi/custom memakai keyword Indonesia
- [x] Audit: tepat 1 `<h1>` di semua halaman, JSON-LD valid, konten ada di `curl`

**Bukti verifikasi:**
- `/` → h1 "Charm Bracelet Custom, Ceritamu Sendiri"
- `/collections` → h1 "Koleksi Bracelet Charm & Watch Ready"
- `/custom-charm` → h1 "Buat Gelang Charm Custom Sesuai Ceritamu"
- `/custom-watch` → h1 "Buat Jam Tangan Custom dengan Charm Pilihanmu"
- `tsc --noEmit` exit 0, `next build` sukses 18 halaman
- Semua blok JSON-LD parse valid, `price: "55000"` string

---

## Fase 2 — Arsitektur URL & halaman produk ✅ SELESAI (2026-11-07)

Tujuan: memberi setiap produk URL sendiri dan membuat hierarki hub→spoke.

Struktur final:

```
/                                → hub brand
/collections                     → hub koleksi + link kategori
  /collections/bracelet          → kategori "gelang charm"
  /collections/watch-ready       → kategori "jam tangan custom"
  /collections/bundling          → kategori
/produk/[slug]                   → 3 produk jadi
/bundling/[slug]                 → 5 paket bundling (tetap)
```

- [x] Route `/collections/[kategori]` + `generateStaticParams` + metadata
- [x] Route `/produk/[slug]` + `generateStaticParams`
- [x] `generateMetadata` per produk: title (nama + harga), description, canonical, OG
- [x] `Product` schema lengkap per halaman produk
- [x] `BreadcrumbList` berjenjang 4 level di halaman produk
- [x] Sitemap mencakup kategori + produk (16 URL)
- [x] Internal link: hub→kategori, kategori→hub/lain, produk→kategori/produk lain
- [x] Konten asli per kategori (`categoryData.ts`, 3 paragraf unik tiap kategori)
- [x] Deskripsi unik per produk (bukan templat)
- [x] ProductCard: "Pesan Sekarang" (WA) → "Lihat Detail" (halaman produk)
- [x] WA dipindah ke halaman produk (lebih terukur, ada halaman perantara)

**Catatan:** tidak ada redirect 301 karena sebelum Fase 2 semua produk
memang tidak punya URL sendiri (hanya anchor), jadi tidak ada URL lama
yang perlu dialihkan.

**Bukti verifikasi:**
- `/`, `/collections`, 3 kategori, 3 produk, 5 bundling → 200
- `/produk/italian-bundling-1` → 404 (sengaja; bundling punya route sendiri)
- sitemap: 16 URL, semua domain `vluffycharm.my.id`
- tepat 1 `<h1>` per halaman, JSON-LD valid
- `tsc --noEmit` exit 0, `next build` sukses 24 halaman

---

## Fase 3 — Konten bertarget lokal & long-tail ✅ SELESAI (2026-11-07)

- [x] Landing page `/charm-jogja` dengan konten yang hanya bisa dibuat untuk
      lokasi ini (workshop bisa dikunjungi, jalur dari Ring Road/Kaliurang,
      alasan geografis bahan stainless, segmen mahasiswa pendatang)
- [x] `LocalBusiness` dinaikkan ke tipe lebih spesifik: `Store`
- [x] NAP sebagai teks HTML (`<address>`), bukan gambar
- [x] Koordinat tampil di halaman + tombol ke Google Maps
- [x] Area asal pelanggan (Condongcatur, Seturan, Babarsari, dll.) sebagai teks
- [x] FAQ lokal 5 pertanyaan (bukan templat) di halaman
- [x] Sitemap: 17 URL
- [x] Footer: link ke 3 kategori + `/charm-jogja`
- [x] Produk bestseller ditampilkan di halaman lokal (internal link)

**Yang sengaja tidak dibuat:** halaman `/charm-sleman`, `/charm-bantul`, dsb.
Skill `local-seo` menyebut templat kota hasil find-and-replace sebagai
scaled content abuse. Satu halaman lokal kuat lebih baik daripada banyak
halaman kembar.

**Yang masih perlu data dari pemilik:**
- Foto workshop asli (stok foto terlihat palsu)

**Jam operasional:** 13.00-21.00 setiap hari, sudah dipakai di dua tempat dari
satu sumber (`seoData.openingHours`):
- `openingHoursSpecification` di JSON-LD `Store`
- teks "Jam buka" di blok alamat `/charm-jogja`

**Bukti verifikasi:**
- `/charm-jogja` → 200, h1 "Charm Bracelet Custom di Jogja", canonical benar
- JSON-LD: `Organization/Store`, `WebSite`, `BreadcrumbList`
- `tsc --noEmit` exit 0, `next build` sukses 25 halaman
- Jam buka 13.00 - 21.00 tampil di blok alamat
- FAQ memakai komponen `Faq.tsx` yang sama dengan homepage, hanya data berbeda

---

## Revisi struktur (2026-11-07)

Keputusan tetap: **`page.tsx` hanya memanggil section.** Tidak ada markup
panjang di dalam halaman.

**Perbaikan yang dikerjakan:**

1. **Breadcrumb tertutup navbar.** Header `fixed` tingginya ~56-64px,
   sementara halaman memakai `pt-16` (64px) dan `pt-18` (72px) — mepet.
   Semua halaman ber-breadcrumb sekarang memakai `pt-24 md:pt-28`
   (96/112px), sehingga jarak aman 32-48px di bawah navbar.
2. **Jarak breadcrumb ke h1** diseragamkan `mb-4` di semua halaman.
3. **Satu sumber spacing:**
   - `ui/PageShell.tsx` — pembungkus halaman + slot breadcrumb
     (dipakai `/produk/[slug]`, `/charm-jogja`)
   - `collections/CategoryShell.tsx` — halaman kategori (`h1` di tengah)
   - `custom/CustomShell.tsx` — halaman custom, `h1` terlihat
     (sebelumnya `sr-only` di dalam `CustomBuilder`)
4. **`page.tsx` dipecah jadi section komponen:**

   | Halaman | Komponen |
   |---|---|
   | `/collections` | `CollectionsSection` (breadcrumb jadi props `crumbs`) |
   | `/collections/[kategori]` | `CategoryShell`, `CategoryGrid`, `CategoryIntro` |
   | `/produk/[slug]` | `PageShell`, `ProductDetail`, `ProductRelated` |
   | `/charm-jogja` | `PageShell`, `LocalHero`, `LocalHighlights`, `LocalProducts` |
   | `/bundling/[slug]` | `BundlingDetail` (breadcrumb jadi props `crumbs`) |
   | `/custom-charm`, `/custom-watch` | `CustomShell` + `CustomBuilder` |

5. **Padding ganda dihapus:** `CustomBuilder` tidak lagi memakai
   `py-20 lg:py-22` karena pembungkusnya (`CustomShell`) sudah memberi offset.
   `AboutIntro` berubah `py-12` → `pb-12`.

**Hasil akhir ukuran `page.tsx`:** 7-108 baris, tanpa `className` sama sekali.

**Verifikasi:**
- `tsc --noEmit` exit 0, `next build` 25 halaman
- Semua halaman ber-breadcrumb: breadcrumb muncul sebelum `<h1>`, satu `<h1>`
- `/` FAQ = 3 pertanyaan + "Lihat Selengkapnya"; `/charm-jogja` FAQ = 5
  pertanyaan tanpa tombol (limit = jumlah item)
- Tidak ada komentar di file yang dibuat sesi ini

---

## Fase 4 — Entity & otoritas (di luar kode)

Tidak bisa dikerjakan di repo. Wajib oleh pemilik.

- [ ] Google Business Profile: kategori utama paling spesifik, alamat, jam
      **13.00-21.00**, produk/layanan, foto asli, Q&A
- [ ] Apple Business Connect, Bing Places
- [ ] NAP identik di semua listing (Nusa Indah No.58 / Sleman / 55283)
- [ ] Review systematis, jangan di-gate, balas semua
- [ ] Google Search Console: submit sitemap, pantau query
- [ ] Merchant Center feed bila ada rencana Google Shopping
- [ ] Backlink lokal: press, komunitas, direktori yang benar-benar dipakai

---

## Keyword → halaman (peta target)

| Halaman | Primary | Sekunder |
|---|---|---|
| `/` | charm bracelet | gelang charm, charm bracelet custom |
| `/collections` | koleksi charm bracelet | gelang charm siap pakai |
| `/collections/bracelet` | gelang charm | gelang italian charm, charm bracelet couple |
| `/collections/watch-ready` | jam tangan custom | watch ready, jam tangan couple |
| `/collections/bundling` | paket charm bracelet | bundling hemat |
| `/produk/[slug]` | nama produk | varian, kategori, harga |
| `/custom-charm` | gelang custom | gelang custom nama, gelang couple custom |
| `/custom-watch` | jam tangan custom | jam tangan custom nama |
| `/charm-jogja` | charm bracelet jogja | toko charm jogja, gelang custom jogja |

---

## Yang sengaja TIDAK dilakukan

- Tidak membuat halaman per kota hasil find-and-replace (`/charm-sleman`,
  `/charm-bantul`, dst.) — dianggap scaled content abuse oleh Google.
- Tidak menargetkan `gelang custom sleman` dkk. karena tidak ada permintaan.
- Tidak memasang `HowTo` schema (sudah dipensiunkan Google).
- Tidak menaruh blok keyword 800 kata di atas grid produk (merusak konversi).
- Tidak menargetkan `charm custom` / `custom watch` English (intent mismatch).
