// ============================================================
// SEMUA KONTEN ADA DI FILE INI. Ganti placeholder dengan data asli.
// Foto anggota: taruh file di /public/team/ lalu isi `photo: '/team/nama.jpg'`
// ============================================================

export const site = {
  name: 'Trio', // placeholder nama kelompok
  headline: ['Kami membangun', 'produk digital,', 'dari sketsa sampai', 'bisa dipakai.'],
  intro:
    'Portofolio kelompok tiga mahasiswa dengan keahlian yang saling melengkapi: desain antarmuka, pengembangan web, dan basis data.',
  footerNote: 'Portofolio kelompok mahasiswa. Dibuat dengan React, Vite, dan Tailwind CSS.',
  email: 'kelompok@example.com',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  about: {
    lead: 'Kami kelompok beranggotakan tiga mahasiswa. Setiap anggota memegang bidang yang berbeda, sehingga satu proyek bisa dikerjakan dari riset sampai jadi.',
    items: [
      {
        term: 'Tujuan',
        text: 'Membangun portofolio bersama yang menunjukkan cara kami bekerja sebagai tim, bukan hanya hasil akhirnya.',
      },
      {
        term: 'Fokus',
        text: 'Aplikasi web dan mobile yang mudah dipakai, dengan antarmuka yang jelas dan kode yang rapi.',
      },
      {
        term: 'Bidang',
        text: 'Desain antarmuka, pengembangan frontend, basis data, dan perangkat IoT ringan.',
      },
    ],
  },
}

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Team', id: 'team' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

// `tone` dipakai sebagai penanda warna anggota di bagian Skills.
export const members = [
  {
    id: 'anggota-1',
    name: 'Nama Anggota 1',
    short: 'Anggota 1',
    role: 'Frontend Developer',
    bio: 'Tulis dua sampai tiga kalimat tentang diri sendiri di sini. Misalnya apa yang sedang dipelajari, jenis proyek yang paling disukai, dan cara kerja yang diutamakan.',
    about:
      'Paragraf lebih panjang untuk halaman detail. Ceritakan latar belakang singkat, ketertarikan di bidang teknologi, dan peran dalam proyek kelompok.',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'Git'],
    photo: null,
    tone: '#141414',
    links: {
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
    experience: [
      { period: 'Tahun', title: 'Judul pengalaman atau kegiatan', place: 'Organisasi / mata kuliah / perusahaan' },
      { period: 'Tahun', title: 'Judul pengalaman atau kegiatan', place: 'Organisasi / mata kuliah / perusahaan' },
    ],
  },
  {
    id: 'anggota-2',
    name: 'Nama Anggota 2',
    short: 'Anggota 2',
    role: 'Backend & Database',
    bio: 'Tulis dua sampai tiga kalimat tentang diri sendiri di sini. Fokuskan pada hal yang membedakan peran ini dari dua anggota lainnya.',
    about:
      'Paragraf lebih panjang untuk halaman detail. Ceritakan latar belakang singkat, ketertarikan di bidang teknologi, dan peran dalam proyek kelompok.',
    skills: ['PostgreSQL', 'Node.js', 'Python', 'Git'],
    photo: null,
    tone: '#2b47e0',
    links: {
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/',
      instagram: '',
    },
    experience: [
      { period: 'Tahun', title: 'Judul pengalaman atau kegiatan', place: 'Organisasi / mata kuliah / perusahaan' },
      { period: 'Tahun', title: 'Judul pengalaman atau kegiatan', place: 'Organisasi / mata kuliah / perusahaan' },
    ],
  },
  {
    id: 'anggota-3',
    name: 'Nama Anggota 3',
    short: 'Anggota 3',
    role: 'UI/UX Designer',
    bio: 'Tulis dua sampai tiga kalimat tentang diri sendiri di sini. Sebutkan jenis desain yang dikerjakan dan alat yang biasa dipakai.',
    about:
      'Paragraf lebih panjang untuk halaman detail. Ceritakan latar belakang singkat, ketertarikan di bidang teknologi, dan peran dalam proyek kelompok.',
    skills: ['Figma', 'Wireframing', 'User Research', 'Tailwind CSS'],
    photo: null,
    tone: '#9a9a92',
    links: {
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
    experience: [
      { period: 'Tahun', title: 'Judul pengalaman atau kegiatan', place: 'Organisasi / mata kuliah / perusahaan' },
      { period: 'Tahun', title: 'Judul pengalaman atau kegiatan', place: 'Organisasi / mata kuliah / perusahaan' },
    ],
  },
]

// `by` = indeks anggota (0, 1, 2) yang menguasai skill tersebut.
export const skillGroups = [
  {
    name: 'Programming',
    icon: 'code',
    items: [
      { name: 'Java', by: [0, 1] },
      { name: 'Python', by: [1, 2] },
      { name: 'JavaScript', by: [0, 2] },
      { name: 'C++', by: [1] },
    ],
  },
  {
    name: 'Web Development',
    icon: 'globe',
    items: [
      { name: 'React', by: [0] },
      { name: 'Tailwind CSS', by: [0, 2] },
      { name: 'Node.js', by: [1] },
      { name: 'PHP', by: [1] },
    ],
  },
  {
    name: 'UI/UX Design',
    icon: 'pen',
    items: [
      { name: 'Figma', by: [2] },
      { name: 'Wireframing', by: [0, 2] },
      { name: 'User Research', by: [2] },
    ],
  },
  {
    name: 'Database',
    icon: 'database',
    items: [
      { name: 'PostgreSQL', by: [1] },
      { name: 'MySQL', by: [1, 2] },
      { name: 'SQLite', by: [0] },
    ],
  },
  {
    name: 'Tools',
    icon: 'wrench',
    items: [
      { name: 'Git & GitHub', by: [0, 1, 2] },
      { name: 'VS Code', by: [0, 1, 2] },
      { name: 'Android Studio', by: [0, 1] },
      { name: 'Postman', by: [1] },
    ],
  },
]

// Data dummy. `variant` memilih thumbnail placeholder (0 web, 1 mobile, 2 IoT, 3 desain).
// Untuk gambar asli, tambahkan `image: '/projects/nama.jpg'`.
export const projects = [
  {
    id: 'dashboard-inventaris',
    title: 'Dashboard Inventaris',
    category: 'Web App',
    year: 'Tahun',
    variant: 0,
    summary: 'Aplikasi web untuk mencatat stok barang dan melihat ringkasannya dalam satu layar.',
    description:
      'Ganti dengan penjelasan proyek: masalah yang ingin diselesaikan, siapa penggunanya, dan hasil yang dicapai. Dua sampai tiga paragraf pendek sudah cukup.',
    highlights: ['Fitur utama pertama', 'Fitur utama kedua', 'Fitur utama ketiga'],
    tech: ['React', 'Tailwind CSS', 'PostgreSQL'],
    roles: 'Semua anggota',
    links: { demo: '', repo: 'https://github.com/' },
  },
  {
    id: 'catatan-kuliah',
    title: 'Aplikasi Catatan Kuliah',
    category: 'Mobile App',
    year: 'Tahun',
    variant: 1,
    summary: 'Aplikasi Android untuk menyimpan catatan per mata kuliah, bisa dipakai tanpa internet.',
    description:
      'Ganti dengan penjelasan proyek: masalah yang ingin diselesaikan, siapa penggunanya, dan hasil yang dicapai. Dua sampai tiga paragraf pendek sudah cukup.',
    highlights: ['Fitur utama pertama', 'Fitur utama kedua', 'Fitur utama ketiga'],
    tech: ['Java', 'Android Studio', 'SQLite'],
    roles: 'Anggota 1 dan Anggota 3',
    links: { demo: '', repo: 'https://github.com/' },
  },
  {
    id: 'monitoring-suhu',
    title: 'Monitoring Suhu Ruangan',
    category: 'IoT',
    year: 'Tahun',
    variant: 2,
    summary: 'Sensor suhu yang mengirim data ke server dan menampilkannya sebagai grafik.',
    description:
      'Ganti dengan penjelasan proyek: masalah yang ingin diselesaikan, siapa penggunanya, dan hasil yang dicapai. Dua sampai tiga paragraf pendek sudah cukup.',
    highlights: ['Fitur utama pertama', 'Fitur utama kedua', 'Fitur utama ketiga'],
    tech: ['ESP32', 'MQTT', 'C++', 'PostgreSQL'],
    roles: 'Anggota 1 dan Anggota 2',
    links: { demo: '', repo: 'https://github.com/' },
  },
  {
    id: 'redesign-portal',
    title: 'Redesign Portal Informasi',
    category: 'UI/UX',
    year: 'Tahun',
    variant: 3,
    summary: 'Studi dan rancangan ulang antarmuka portal informasi agar lebih mudah dipakai.',
    description:
      'Ganti dengan penjelasan proyek: masalah yang ingin diselesaikan, siapa penggunanya, dan hasil yang dicapai. Dua sampai tiga paragraf pendek sudah cukup.',
    highlights: ['Temuan riset pertama', 'Temuan riset kedua', 'Hasil rancangan'],
    tech: ['Figma', 'User Research', 'Wireframing'],
    roles: 'Anggota 3',
    links: { demo: 'https://www.figma.com/', repo: '' },
  },
]
