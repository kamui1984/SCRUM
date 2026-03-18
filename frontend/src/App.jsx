import './index.css'
import Navbar     from './components/Navbar.jsx'
import Hero       from './components/Hero.jsx'
import Catalogo   from './components/Catalogo.jsx'
import Comparador from './components/Comparador.jsx'
import Nosotros   from './components/Nosotros.jsx'
import Footer     from './components/Footer.jsx'
import { useProductos }  from './hooks/useProductos.js'
import { useComparador } from './hooks/useComparador.js'

function App() {
  const { productos, cargando, error, fuenteDatos } = useProductos()
  const { slots, toggleProducto, limpiarSlot, compararEspecificaciones } = useComparador()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <Hero />

        {/* Banner informativo cuando se usan datos locales */}
        {fuenteDatos === 'local' && (
          <div style={{
            maxWidth: '1280px', margin: '0 auto 0', padding: '0 48px',
            display: 'flex', alignItems: 'center', gap: '10px',
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            color: 'var(--accent-color)', opacity: 0.7,
          }}>
            <span>⚡</span> Modo offline — mostrando datos locales (backend no disponible)
          </div>
        )}

        <Catalogo
          productos={productos}
          cargando={cargando}
          error={error}
          slots={slots}
          onToggleComparar={toggleProducto}
        />

        <Comparador
          slots={slots}
          productos={productos}
          onLimpiarSlot={limpiarSlot}
          compararEspecificaciones={compararEspecificaciones}
        />

        <Nosotros />
      </main>

      <Footer />
    </div>
  )
}

export default App
