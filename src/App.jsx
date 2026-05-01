import { useEffect, useState } from 'react'
import './App.css'

const projectData = [
  {
    id: 'perpus',
    title: 'PerpusLite',
    description:
      'Dashboard admin perpustakaan digital untuk manajemen pengguna, buku, peminjaman, dan analitik.',
    details:
      'PerpusLite adalah sistem perpustakaan digital berbasis Laravel dengan fitur dashboard admin, manajemen buku dan pengguna, manajemen peminjaman, serta pelaporan status peminjaman. Memanfaatkan MySQL, Supabase, dan Meilisearch untuk pencarian cepat dan sinkronisasi data yang handal.',
    tags: ['Laravel', 'MySQL', 'Supabase', 'Meilisearch'],
    stats: [
      { id: 'users', label: 'Total Users', value: '7', tone: 'blue' },
      { id: 'books', label: 'Total Books', value: '2', tone: 'purple' },
      { id: 'active', label: 'Active Loans', value: '0', tone: 'green' },
      { id: 'overdue', label: 'Overdue Loans', value: '0', tone: 'red' },
      { id: 'fines', label: 'Unpaid Fines', value: 'Rp 0', tone: 'yellow' },
      { id: 'requests', label: 'New Requests', value: '3', tone: 'teal' },
    ],
  },
  {
    id: 'osis-filament',
    title: 'Web OSIS Filament',
    description:
      'Backend Web OSIS berbasis Laravel dengan panel admin Filament untuk manajemen periode, organisasi, dan konten landing page.',
    details:
      'Projek Web OSIS ini dibangun dengan Laravel dan Filament sebagai library utama untuk admin panel. Fitur meliputi manajemen periode kepengurusan, departemen aktif, anggota, program kerja, dan konten landing page dengan penyajian data yang responsif dan mudah dikembangkan.',
    tags: ['Laravel', 'Filament', 'PHP', 'Backend'],
    stats: [
      { id: 'period', label: 'Periode Aktif', value: '2025/2026', tone: 'blue' },
      { id: 'departments', label: 'Jumlah Sekbid', value: '13', tone: 'purple' },
      { id: 'members', label: 'Total Anggota', value: '60', tone: 'green' },
      { id: 'programs', label: 'Program Kerja', value: '51', tone: 'teal' },
      { id: 'achievements', label: 'Prestasi', value: '0', tone: 'yellow' },
      { id: 'carousel', label: 'Carousel', value: '0', tone: 'red' },
    ],
  },
]

const languageLogos = [
  { id: 'php', name: 'PHP', color: '#7479c5' },
  { id: 'js', name: 'JavaScript', color: '#f7df1e' },
  { id: 'python', name: 'Python', color: '#3776ab' },
  { id: 'csharp', name: 'C#', color: '#239120' },
  { id: 'html', name: 'HTML5', color: '#e34f26' },
  { id: 'css', name: 'CSS3', color: '#264de4' },
  { id: 'sql', name: 'SQL', color: '#00618a' },
]

const frameworkLogos = [
  { id: 'laravel', name: 'Laravel', color: '#ff2d20' },
  { id: 'react', name: 'React.js', color: '#61dafb' },
  { id: 'vite', name: 'Vite.js', color: '#646cff' },
  { id: 'tailwind', name: 'Tailwind CSS', color: '#06b6d4' },
  { id: 'bootstrap', name: 'Bootstrap', color: '#7a1ea1' },
  { id: 'alpine', name: 'Alpine.js', color: '#0f172a' },
]

const databaseLogos = [
  { id: 'mysql', name: 'MySQL', color: '#00758f' },
  { id: 'postgres', name: 'PostgreSQL', color: '#336791' },
  { id: 'supabase', name: 'Supabase', color: '#3ecf8e' },
  { id: 'meilisearch', name: 'Meilisearch', color: '#ff3b81' },
]

const toolLogos = [
  { id: 'git', name: 'Git', color: '#f05033' },
  { id: 'github', name: 'GitHub', color: '#181717' },
  { id: 'restful', name: 'RESTful API', color: '#2563eb' },
  { id: 'postman', name: 'Postman', color: '#ff6c37' },
  { id: 'ai', name: 'AI-Assisted', color: '#8b5cf6' },
]

const logoSvgs = {
  php: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <path fill="#ffffff" d="M22.73 64C22.73 39.86 42.82 22.73 68.01 22.73c25.18 0 45.28 17.13 45.28 41.27s-20.1 41.27-45.28 41.27C42.82 105.27 22.73 88.14 22.73 64Zm9.85 0c0 18.51 14.88 33.54 35.43 33.54 20.54 0 35.43-15.03 35.43-33.54 0-18.51-14.89-33.54-35.43-33.54-20.55 0-35.43 15.03-35.43 33.54ZM53.69 51.84h6.74v24.36h6.08V51.84h6.73v-5.24H53.69v5.24Zm27.2 0h-6.74v24.36h6.74c7.2 0 10.5-3.98 10.5-12.18 0-8.19-3.3-12.18-10.5-12.18Zm5.21 12.18c0 5.73-1.85 8.77-5.21 8.77h-3.86V56.25h3.86c3.36 0 5.21 3.04 5.21 8.77Z"/>
    </svg>
  ),
  js: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <path fill="#f7df1e" d="M0 0h128v128H0z"/>
      <path fill="#000" d="M83.27 102.01c1.08 1.79 2.3 3.3 4.69 3.3 1.91 0 3.12-.95 3.12-2.27 0-1.58-1.25-2.14-3.36-3.06l-1.15-.5c-3.33-1.43-5.56-3.22-5.56-6.99 0-3.48 2.66-6.13 6.82-6.13 2.96 0 5.09 1.03 6.63 3.72l-3.63 2.33c-.8-1.43-1.67-2-2.9-2-1.48 0-2.42.94-2.42 2 0 1.39.94 1.95 3.12 2.79l1.15.5c3.92 1.72 6.14 3.48 6.14 7.43 0 4.26-3.35 6.58-7.86 6.58-4.4 0-7.23-2.09-8.61-4.82l3.7-2.24ZM55.15 101.35c1.03 1.83 1.97 3.39 4.22 3.39 2.15 0 3.51-.85 3.51-4.13V62.09h5.9v34.06c0 6.09-3.59 8.86-8.8 8.86-4.71 0-7.44-2.44-8.86-5.35l3.89-1.66Z"/>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <path fill="#306998" d="M64 7.84c-8.55 0-16.51 3.53-22.46 9.29-1.42 1.32-1.77 3.42-.9 5.08 2.24 4.61 5.4 9.48 10.76 13.57 12.38 9.82 33.35 10.62 48.23 1.74 5.37-3.04 9.93-7.37 12.61-12.8 1.18-2.39.41-5.31-1.81-6.79C95.18 11.5 79.99 7.84 64 7.84ZM42.63 18.33c1.78 0 3.22 1.44 3.22 3.22s-1.44 3.22-3.22 3.22-3.22-1.44-3.22-3.22 1.44-3.22 3.22-3.22Z"/>
      <path fill="#ffd43b" d="M64 120.16c8.55 0 16.51-3.53 22.46-9.29 1.42-1.32 1.77-3.42.9-5.08-2.24-4.61-5.4-9.48-10.76-13.57-12.38-9.82-33.35-10.62-48.23-1.74-5.37 3.04-9.93 7.37-12.61 12.8-1.18 2.39-.41 5.31 1.81 6.79C32.82 116.66 48.01 120.16 64 120.16ZM85.37 109.67c-1.78 0-3.22-1.44-3.22-3.22s1.44-3.22 3.22-3.22 3.22 1.44 3.22 3.22-1.44 3.22-3.22 3.22Z"/>
      <path fill="#ffd43b" d="M87.52 45.5H40.48c-6.01 0-10.91 4.9-10.91 10.91v28.45c0 8.86 7.18 16.05 16.04 16.05h41.88c8.86 0 16.05-7.19 16.05-16.05V56.41c0-6.01-4.9-10.91-10.92-10.91Z"/>
      <path fill="#306998" d="M40.48 82.46h47.04c6.01 0 10.91-4.9 10.91-10.91V43.1c0-8.86-7.18-16.05-16.04-16.05H40.48c-8.86 0-16.05 7.19-16.05 16.05v28.45c0 6.01 4.9 10.91 10.91 10.91Z"/>
    </svg>
  ),
  csharp: (
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <rect width="120" height="120" rx="24" fill="#239120" />
      <path d="M42 34h10v13H42v9h20v-9H52V34H42Zm33 24h7l6-8h-8l-3 4-3-4h-8l6 8Zm3 20h4v-6h7v-4h-7v-6h-4v6h-7v4h7v6Z" fill="#fff"/>
    </svg>
  ),
  html: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <path fill="#e34f26" d="M19 9l9 103 41 11 41-11 9-103H19Z"/>
      <path fill="#ef652a" d="M64 116l33-9 8-90H64v99ZM64 66.7H44l1 11h19v-11Zm1 23.2l-.1.03-12-3.3-1-11h-9l1 11 21 5.8.1-.03Z"/>
      <path fill="#fff" d="M65.3 57.6H44.8l1 11h18.5v-11Zm1.1 23.4-16.2-4.5-1-11h-9l1 11 25 7 24.9-7 1-10.9h-9l-1 11-15.7 4.4Z"/>
    </svg>
  ),
  css: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <path fill="#264de4" d="M19 9l9 103 41 11 41-11 9-103H19Z"/>
      <path fill="#2965f1" d="M64 116l33-9 8-90H64v99ZM64 57.5h20l-1 11H64v-11Zm0 23.5h12.7l-1 11L64 92.5v-11Z"/>
      <path fill="#fff" d="M64.2 57.5h-20l1 11h18.9v-11Zm0 23.5h-12.7l1 11 11.7 3.2v-11.9Z"/>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect x="18" y="18" width="92" height="92" rx="24" fill="#00618a"/>
      <path d="M33 38h62v14H33V38Zm0 22h62v12H33v-12Zm0 22h62v14H33v-14Z" fill="#fff" opacity="0.85"/>
      <path d="M47 72h34v8H47v-8Z" fill="#fff"/>
    </svg>
  ),
  laravel: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <path fill="#ff2d20" d="M22 35h84v58H22z"/>
      <path fill="#fff" d="M40 46h48v12H40v8h48v12H40v8h56V46H40z"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <circle cx="64" cy="64" r="14" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="8" fill="none">
        <ellipse cx="64" cy="64" rx="35" ry="67"/>
        <ellipse cx="64" cy="64" rx="67" ry="35" transform="rotate(60 64 64)"/>
        <ellipse cx="64" cy="64" rx="67" ry="35" transform="rotate(-60 64 64)"/>
      </g>
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="28" fill="#646cff"/>
      <path fill="#fff" d="M35 34l58 15-24 28 24 23-58 16 24-82Z"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <path fill="#06b6d4" d="M24 36c12 0 28-8 46-8 10 0 18 2 26 8 0 0-12 42-46 42-14 0-22-8-26-14-.92-4 0-12 0-18Z"/>
      <path fill="#0ea5e9" d="M24 74c12 0 28-8 46-8 10 0 18 2 26 8 0 0-12 42-46 42-14 0-22-8-26-14-.92-4 0-12 0-18Z"/>
    </svg>
  ),
  bootstrap: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="30" fill="#7a1ea1"/>
      <path fill="#fff" d="M44 36h32c14 0 24 8 24 22 0 10-7 16-14 18v1c10 2 18 8 18 20 0 14-10 22-24 22H44V36Zm19 10v20h12c6 0 10-3 10-10s-4-10-10-10H63Zm0 30v20h12c6 0 10-3 10-10s-4-10-10-10H63Z"/>
    </svg>
  ),
  alpine: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="30" fill="#0f172a"/>
      <path fill="#a8fff9" d="M37 90L64 42l27 48H37Z"/>
      <path fill="#0f172a" d="M64 54 49 90h30L64 54Z"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <circle cx="64" cy="64" r="52" fill="#00758f"/>
      <path fill="#fff" d="M42 48c4 8 14 9 20 7 6-2 12-9 16-7 6 2 16 14 16 28s-5 20-12 24c-7 3-11 4-12 0s3-5 5-10 3-12-1-14c-3-2-6-1-10 1s-9 9-16 9-10-5-11-12-2-26 5-37Z"/>
    </svg>
  ),
  postgres: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="26" fill="#336791"/>
      <path fill="#fff" d="M42 58c2-10 8-20 16-22 8-1 15 2 20 7 3 4 4 10 4 17 0 4-1 5-3 7-2 3-7 4-10 3s-5-4-7-7c-2-4-4-9-2-11 1-1 4-1 8 0 3 1 7 4 8 5 2 3 3 5 3 9 0 8-5 13-9 17-5 5-11 7-18 6-8-1-15-6-17-13-2-7-1-15 1-22Z"/>
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="24" fill="#3ecf8e"/>
      <path fill="#fff" d="M38 38h52v52H38z" opacity="0.18"/>
      <path fill="#fff" d="M38 90V38h52l18 18v34L90 90H38Zm10-10h28v-8H48v8Zm0-18h28v-8H48v8Z"/>
    </svg>
  ),
  meilisearch: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="24" fill="#ff3b81"/>
      <path fill="#fff" d="M44 36l40 28-40 28V36Zm50 28-10 8v10l10-8v-10Z" opacity="0.9"/>
      <path fill="#fff" d="M60 40h8v48h-8z"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="32" fill="#f05033"/>
      <path fill="#fff" d="M44 34h8l28 28-8 8-28-28v28H44V34Zm40 40-8-8 28-28v-8h8v8l-28 28Z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="28" fill="#181717"/>
      <path fill="#fff" d="M64 38c-14 0-24 11-24 25 0 11 8 20 19 23 1 0 2 0 2-1v-8c-7 1-8-3-8-3-1-2-3-3-3-3-2-1 0-1 0-1 2 0 3 2 3 2 3 5 8 3 10 2 0-1 2-3 4-3-7-1-14-3-14-15 0-3 1-5 3-7 0-1-1-4 1-8 0 0 2 0 6 3 2-1 5-2 8-2s6 1 8 2c4-3 6-3 6-3 2 4 1 7 1 8 2 2 3 4 3 7 0 12-7 14-14 15 2 2 4 5 4 10v14c0 1 1 1 2 1 11-3 19-12 19-23 0-14-10-25-24-25Z"/>
    </svg>
  ),
  restful: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="28" fill="#2563eb"/>
      <path fill="#fff" d="M36 46h56v12H36zm0 24h56v12H36zm0 24h56v12H36zm64-38 12 10-12 10V56z"/>
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="30" fill="#ff6c37"/>
      <path fill="#fff" d="M46 44l36 20-36 20V44zM82 44l12 7v14l-12 7V44z"/>
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false">
      <rect width="128" height="128" rx="28" fill="#8b5cf6"/>
      <circle cx="64" cy="52" r="16" fill="#fff" opacity="0.92"/>
      <path fill="#fff" d="M54 76h20v10H54v-10Zm-8-12h36v8H46v-8Z"/>
    </svg>
  ),
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const projectCount = projectData.length
  const hasNext = currentSlide < projectCount - 1
  const hasPrevious = currentSlide > 0

  const nextSlide = () => {
    if (hasNext) setCurrentSlide(currentSlide + 1)
  }

  const previousSlide = () => {
    if (hasPrevious) setCurrentSlide(currentSlide - 1)
  }

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 30)
    window.scrollTo(0, 0)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    revealElements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = Math.min(scrollY, 200)
          document.documentElement.style.setProperty('--hero-offset', `${offset}`)
          document.documentElement.style.setProperty(
            '--hero-decor-rotate', `${offset * 0.22}deg`,
          )
          document.documentElement.style.setProperty(
            '--hero-decor-translate', `${offset * 0.22}px`,
          )
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openProject = project => setActiveProject(project)
  const closeProject = () => setActiveProject(null)
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeProject()
    }
  }

  return (
    <div className={`page-shell ${isLoaded ? 'is-loaded' : ''}`}>
      <header className="topbar">
        <div className="brand">Ridwan Adiansyah</div>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="#projects">Proyek</a>
          <a href="#skills">Keahlian</a>
          <a href="#experience">Pengalaman</a>
          <a href="#contact">Kontak</a>
        </nav>
        <button 
          className="btn btn-secondary resume-btn" 
          onClick={() => {
            const link = document.createElement('a')
            link.href = '/Ridwan-Adiansyah-CV.pdf'
            link.download = 'Ridwan-Adiansyah-CV.pdf'
            link.click()
          }}
          type="button">
          CV
        </button>
      </header>

      <main className="page-content">
        <section className="hero-panel reveal">
          <div className="hero-decor hero-decor-one" aria-hidden="true"></div>
          <div className="hero-decor hero-decor-two" aria-hidden="true"></div>
          <div className="hero-profile-image">
            <img src="/ridwan-profile.jpg" alt="Ridwan Adiansyah" className="profile-photo" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Software Engineer</p>
            <h1>Software Engineer dari Sukaraja, Bogor</h1>
            <div className="hero-contact-line">
              <span>sulaimane627@gmail.com</span>
              <span>•</span>
              <span>+62 812-8557-1317</span>
            </div>
            <p className="hero-description">
              Software Engineer lulusan Rekayasa Perangkat Lunak (RPL) yang fokus pada pengembangan
              aplikasi web dan manajemen basis data. Memahami siklus hidup pengembangan perangkat lunak,
              mulai dari perancangan database hingga implementasi kode dengan framework modern.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Proyek Unggulan
              </a>
              <a className="btn btn-ghost" href="#contact">
                Hubungi Saya
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block reveal">
          <div className="section-heading">
            <span className="section-line"></span>
            <h2>Keahlian</h2>
          </div>
          <div className="skills-group">
            <div className="skill-panel">
              <h3>Bahasa Pemrograman</h3>
              <div className="logo-grid">
                {languageLogos.map(lang => (
                  <div key={lang.id} className="logo-card">
                    <div className="logo-icon" style={{ background: lang.color }}>
                      {logoSvgs[lang.id]}
                    </div>
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-panel">
              <h3>Framework & Library</h3>
              <div className="logo-grid">
                {frameworkLogos.map(item => (
                  <div key={item.id} className="logo-card">
                    <div className="logo-icon" style={{ background: item.color }}>
                      {logoSvgs[item.id]}
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-panel">
              <h3>Database & Cloud</h3>
              <div className="logo-grid">
                {databaseLogos.map(item => (
                  <div key={item.id} className="logo-card">
                    <div className="logo-icon" style={{ background: item.color }}>
                      {logoSvgs[item.id]}
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-panel">
              <h3>Tools & Backend</h3>
              <div className="logo-grid">
                {toolLogos.map(item => (
                  <div key={item.id} className="logo-card">
                    <div className="logo-icon" style={{ background: item.color }}>
                      {logoSvgs[item.id]}
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-panel">
              <h3>Soft Skills</h3>
              <p>Berpikir Kritis, Logika Pemrograman, Kerja Sama Tim, Manajemen Waktu, Adaptabilitas, Dokumentasi Teknis.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section-block reveal">
          <div className="section-heading">
            <span className="section-line"></span>
            <h2>Proyek Unggulan</h2>
          </div>

          <div className="project-carousel-container">
            <button
              type="button"
              className="carousel-control carousel-control-left"
              onClick={previousSlide}
              disabled={!hasPrevious}
              aria-label="Proyek sebelumnya">
              ‹
            </button>
            <div className="project-carousel-wrapper">
              <div
                className="project-carousel"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projectData.map((project, index) => (
                  <article
                    key={project.id}
                    className="project-card project-slide"
                    aria-hidden={currentSlide !== index}>
                    <div className="project-visual" aria-hidden="true">
                      <div className="project-dashboard-card">
                        <div className="dashboard-bar">
                          <span className="dashboard-brand">{project.title}</span>
                          <button type="button" className="dashboard-logout">Logout</button>
                        </div>
                        <div className="dashboard-stats">
                          {project.stats.map(stat => (
                            <div key={stat.id} className={`dashboard-stat-card ${stat.tone}`}>
                              <span className="dashboard-stat-value">{stat.value}</span>
                              <span className="dashboard-stat-label">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map(tag => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="project-link"
                        onClick={() => openProject(project)}>
                        Lihat Detail →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="carousel-control carousel-control-right"
              onClick={nextSlide}
              disabled={!hasNext}
              aria-label="Proyek berikutnya">
              ›
            </button>
          </div>
        </section>

        <section id="experience" className="section-block reveal">
          <div className="section-heading">
            <span className="section-line"></span>
            <h2>Pengalaman & Pendidikan</h2>
          </div>

          <div className="timeline">
            <div className="timeline-line" aria-hidden="true"></div>

            <div className="timeline-item left">
              <div className="timeline-badge" aria-hidden="true"></div>
              <div className="timeline-content">
                <span className="timeline-title">PT Indomedia Global Mandiri</span>
                <span className="timeline-subtitle">Software Engineer (Intern)</span>
                <span className="timeline-date">Okt 2025 — Feb 2026</span>
                <ul className="timeline-list">
                  <li>Merancang alur program melalui penyusunan ERD, Use Case, dan Flowchart sistem.</li>
                  <li>Membangun Dashboard Admin untuk manajemen aktivitas pengguna secara terpusat.</li>
                  <li>Mengembangkan database Perpustakaan Digital menggunakan Laravel dan MySQL.</li>
                  <li>Melakukan debugging dan perbaikan bug untuk optimasi stabilitas aplikasi.</li>
                  <li>Mengelola deployment serta menyusun dokumentasi teknis laporan proyek.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-badge" aria-hidden="true"></div>
              <div className="timeline-content">
                <span className="timeline-title">Organisasi Siswa Intra Sekolah (OSIS)</span>
                <span className="timeline-subtitle">Sekretaris</span>
                <span className="timeline-date">Mei 2025 — Apr 2026</span>
                <ul className="timeline-list">
                  <li>Mengelola administrasi dan dokumentasi organisasi secara digital untuk efisiensi alur informasi.</li>
                  <li>Menyusun draf AD/ART serta protokol organisasi untuk memastikan standardisasi kegiatan kesiswaan.</li>
                  <li>Mengkoordinasikan komunikasi antar divisi untuk memastikan program kerja berjalan tepat waktu.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-badge" aria-hidden="true"></div>
              <div className="timeline-content">
                <span className="timeline-title">SMKN 1 Cibinong</span>
                <span className="timeline-subtitle">Rekayasa Perangkat Lunak (RPL)</span>
                <span className="timeline-date">Jul 2023 — Mei 2026</span>
                <p>
                  Pendidikan di jurusan RPL yang mempelajari pengembangan perangkat lunak, basis data,
                  dan analisis sistem untuk mendukung karir sebagai Software Engineer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-block contact-block reveal">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Siap berkolaborasi?</p>
              <h2>Mari bangun arsitektur sistem kamu selanjutnya.</h2>
              <p>
                Saya tersedia untuk proyek yang membutuhkan ketelitian teknis, UI modern, dan
                rekayasa berfokus pada performa.
              </p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:sulaimane627@gmail.com">
                Email Saya
              </a>
              <a className="btn btn-ghost" href="#projects">
                Lihat Proyek
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Ridwan Adiansyah. Software Engineer.</p>
        <div className="footer-links">
          <a href="https://github.com/Wannn-TZY" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#skills">LinkedIn</a>
          <a href="#experience">Dokumentasi</a>
          <a href="#contact">Email</a>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button
              type="button"
              className="modal-close"
              aria-label="Tutup detail proyek"
              onClick={closeProject}>
              ×
            </button>
            <span className="eyebrow">Detail Proyek</span>
            <h2 id="modal-title">{activeProject.title}</h2>
            <p>{activeProject.details}</p>
            <div className="project-tags modal-tags">
              {activeProject.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="modal-actions">
              <a className="btn btn-primary" href="mailto:sulaimane627@gmail.com">
                Kontak Saya
              </a>
              <button type="button" className="btn btn-ghost" onClick={closeProject}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
