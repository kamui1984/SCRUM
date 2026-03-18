// ── Componente: Barra de navegación ──
export default function Navbar() {
  return (
    <header className="glass" style={{
      position: 'sticky', top: 0, zIndex: 100,
      padding: '0 48px', height: '64px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-primary)' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '10px',
          background: 'linear-gradient(135deg, var(--accent-color), var(--accent3))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '800', fontSize: '16px', color: '#000'
        }}>T</div>
        <span style={{ fontWeight: '800', fontSize: '1.1rem' }}>
          Tech<span style={{ color: 'var(--accent-color)' }}>Compare</span>
        </span>
      </a>

      {/* Links de navegación */}
      <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {[
          { label: 'Catálogo',    href: '#catalogo',   activo: true  },
          { label: 'Comparador',  href: '#comparador', activo: false },
          { label: 'Nosotros',    href: '#nosotros',   activo: false },
        ].map(link => (
          <a key={link.label} href={link.href} style={{
            textDecoration: 'none',
            color: link.activo ? 'var(--text-primary)' : '#9090a8',
            fontWeight: '600', fontSize: '0.9rem',
            padding: '8px 18px', borderRadius: '8px',
            background: link.activo ? 'rgba(255,255,255,0.06)' : 'transparent',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.color = 'var(--text-primary)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
          onMouseLeave={e => { e.target.style.color = link.activo ? 'var(--text-primary)' : '#9090a8'; e.target.style.background = link.activo ? 'rgba(255,255,255,0.06)' : 'transparent' }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
