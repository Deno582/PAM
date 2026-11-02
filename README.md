# Portofolio Kelompok

Website portofolio kelompok 3 orang. Frontend saja: React, Vite, Tailwind CSS v4, Lucide, Framer Motion.

## Menjalankan

```bash
npm install
npm run dev        # buka alamat yang muncul, biasanya http://localhost:5173
npm run build      # hasil produksi di folder dist/
npm run preview    # coba hasil build
```

Butuh Node.js 20 atau lebih baru.

## Mengganti isi (cukup satu file)

Semua teks, anggota, skill, dan proyek ada di `src/data/site.js`. Data saat ini masih placeholder.

| Yang diganti | Di mana |
| --- | --- |
| Nama kelompok, judul hero, email, link sosial | `site` |
| Teks bagian About | `site.about` |
| Nama, peran, bio, skill, link, pengalaman anggota | `members` |
| Skill per kategori dan siapa yang menguasainya | `skillGroups` (`by: [0, 1]` = indeks anggota) |
| Proyek | `projects` |

**Foto anggota:** taruh file di `public/team/`, lalu isi `photo: '/team/nama.jpg'`. Rasio 4:5 paling pas.
**Gambar proyek:** taruh di `public/projects/`, lalu tambahkan `image: '/projects/nama.jpg'`. Rasio 4:3 paling pas.
Link yang dikosongkan (`''`) otomatis tidak ditampilkan.

## Warna dan font

Ada di `src/index.css` bagian `@theme` (`--color-accent`, `--color-ink`, dst). Font: Bricolage Grotesque (judul) dan Instrument Sans (isi), terpasang lewat paket npm sehingga tidak butuh internet saat dijalankan.

## Struktur

```
src/
  data/site.js            semua konten
  hooks/useActiveSection  penanda menu aktif saat scroll
  components/
    layout/               Navbar, Footer
    sections/             Hero, About, Team, Skills, Projects, Contact
    team/                 MemberCard, MemberModal
    projects/             ProjectCard, ProjectModal
    ui/                   Button, Modal, Avatar, Thumb, SocialLinks, ...
```

## Catatan

- Form kontak tidak memakai backend. Setelah validasi, tombol kirim membuka aplikasi email pengguna dengan pesan yang sudah terisi (`mailto:`). Kalau nanti butuh backend, ganti fungsi `onSubmit` di `Contact.jsx`.
- Ikon GitHub, LinkedIn, dan Instagram dibuat sendiri di `ui/BrandIcons.jsx` karena Lucide versi baru tidak menyertakan ikon merek.
