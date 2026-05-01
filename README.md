# Ridwan Adiansyah - Portfolio Website

Portfolio website profesional saya yang menampilkan proyek-proyek unggulan, keahlian, pengalaman kerja, dan CV dalam satu platform interaktif.

![Portfolio Preview](./public/portfolio-preview.png)

## 🚀 Tentang Proyek

Website ini adalah showcase digital dari profil profesional saya sebagai **Software Engineer** lulusan Rekayasa Perangkat Lunak (RPL). Dibangun dengan teknologi modern dan menampilkan dua proyek unggulan dengan dashboard preview interaktif.

**Live Demo:** [Kunjungi Portfolio](https://ridwanportofolio.vercel.app/)

## 💻 Tech Stack

- **Frontend Framework:** React.js 18+
- **Build Tool:** Vite
- **Styling:** CSS3 dengan Glassmorphism Design
- **Animasi:** CSS Animations & JavaScript Scroll Effects
- **Package Manager:** npm

## ✨ Fitur Utama

### 1. **Hero Section**
- Foto profil dengan efek shadow profesional
- Contact line dengan email & nomor telepon
- Call-to-action buttons untuk proyek dan kontak

### 2. **Skills Section**
- Organisasi keahlian dalam 6 kategori utama
- Penampilan grid yang responsif
- Teknologi: Bahasa Pemrograman, Framework, Database, Tools, Soft Skills

### 3. **Featured Projects Carousel**
- Navigasi dengan tombol previous/next
- Preview dashboard interaktif untuk setiap proyek
- Statistik dinamis yang ditampilkan per proyek
- Modal detail untuk informasi lengkap

**Proyek yang ditampilkan:**
- **PerpusLite** - Sistem manajemen perpustakaan digital dengan Laravel
- **Web OSIS Filament** - Backend Web OSIS dengan panel admin Filament

### 4. **Experience & Education Timeline**
- Timeline visual dengan badge dan badge line
- Detail pengalaman kerja dan organisasi
- Informasi pendidikan terstruktur

### 5. **CV Section**
- Tampilan profesional dari CV lengkap
- Download CV dengan satu klik
- Format ATS-friendly

### 6. **Contact Section**
- Call-to-action untuk kolaborasi
- Direct email contact button
- Link ke proyek unggulan

## 📋 Struktur Project

```
portofolio/
├── public/
│   ├── ridwan-profile.jpg           # Foto profil
│   ├── Ridwan-Adiansyah-CV.pdf      # File CV
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx                      # Main component
│   ├── App.css                      # Styling
│   ├── main.jsx                     # Entry point
│   ├── index.css                    # Global styles
│   └── assets/                      # Assets
├── index.html                       # HTML template
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js v16 atau lebih tinggi
- npm atau yarn

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone https://github.com/ridwan-adiansyah/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Website akan berjalan di `http://localhost:5173`

4. **Build untuk production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Konfigurasi

### Mengupdate Data Profil

**Data Proyek** - Edit `src/App.jsx` bagian `projectData`:
```javascript
const projectData = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Short description',
    details: 'Detailed description',
    tags: ['Tech1', 'Tech2'],
    stats: [
      { id: 'stat1', label: 'Label', value: 'Value', tone: 'blue' }
    ]
  }
]
```

**Foto Profil** - Ganti `/public/ridwan-profile.jpg`

**CV** - Ganti `/public/Ridwan-Adiansyah-CV.pdf`

## 🎨 Design System

Portfolio menggunakan tema dark glassmorphism dengan palet warna:

- **Primary:** `#b4c5ff` (Biru terang)
- **Secondary:** `#7bd0ff` (Cyan)
- **Surface:** `#0c1324` (Navy gelap)
- **Background:** Gradien radial dengan blur effects

Fitur animasi:
- Fade-in on scroll dengan Intersection Observer
- Parallax hero section
- Smooth scroll behavior pada navigasi
- Hover transitions pada tombol dan kartu

## 📱 Responsive Design

Website fully responsive untuk:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🔗 Live Links dalam Portfolio

- **Navbar:** Navigasi smooth scroll ke setiap section
- **CV Button:** Download CV otomatis
- **Contact Button:** Redirect ke email
- **Project Links:** Buka modal detail proyek

## 📊 Performance

- Vite optimized bundling
- CSS-in-JS minimal
- Lazy loading images
- Efficient scroll listeners dengan requestAnimationFrame

## 🤝 Kontribusi

Portfolio ini adalah personal project. Namun, saran dan feedback selalu diterima!

## 📧 Kontak

- **Email:** [sulaimane627@gmail.com](mailto:sulaimane627@gmail.com)
- **Phone:** +62 812-8557-1317
- **Location:** Sukaraja, Bogor
- **LinkedIn:** [Profil LinkedIn](https://linkedin.com/in/ridwan-adiansyah)
- **GitHub:** [@ridwan-adiansyah](https://github.com/Wannn-TZY)

## 📄 License

This project is personal and not licensed for commercial use.

---

**Dibuat dengan ❤️ oleh Ridwan Adiansyah | Software Engineer**

*Last Updated: Mei 2026*
