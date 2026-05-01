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
              <p>PHP, JavaScript, Python, C#, HTML5, CSS3, SQL.</p>
            </div>
            <div className="skill-panel">
              <h3>Framework & Library</h3>
              <p>Laravel, React.js, Tailwind CSS, Bootstrap, Alpine.js.</p>
            </div>
            <div className="skill-panel">
              <h3>Database & Cloud</h3>
              <p>MySQL, PostgreSQL, Supabase, Meilisearch.</p>
            </div>
            <div className="skill-panel">
              <h3>Tools & Backend</h3>
              <p>Git, GitHub, RESTful API, Postman, AI-Assisted Development (GitHub Copilot, Antigravity).</p>
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
          <a href="#projects">GitHub</a>
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
              <a className="btn btn-primary" href="mailto:hello@example.com">
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
