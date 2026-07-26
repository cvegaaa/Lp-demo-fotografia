import { ArrowRight, ChevronDown } from 'lucide-react';
import { sitio } from '@/data/sitio';
import { useSlideshow } from '@/hooks/useSlideshow';

export function Hero() {
  const { activo, setActivo } = useSlideshow(sitio.imagenesHero.length, 5000);

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Galería rotativa con crossfade + Ken Burns */}
      <div className="absolute inset-0 bg-espresso-950">
        {sitio.imagenesHero.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
            style={{ opacity: i === activo ? 1 : 0 }}
            aria-hidden={i !== activo}
          >
            <img
              src={src}
              alt={`Composición ${i + 1} del portafolio`}
              className={`h-full w-full object-cover ${
                i === activo ? 'animate-kenburns' : ''
              }`}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
            />
          </div>
        ))}
      </div>

      {/* Velos para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-espresso-950/60" />
      <div className="absolute inset-0 bg-espresso-950/30" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end pb-24 pt-32">
        <div className="contenedor">
          <div className="max-w-3xl">
            <p
              className="etiqueta mb-6 text-clay-300 opacity-0"
              style={{ animation: 'riseUp 0.9s 0.1s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              {sitio.sector.charAt(0).toUpperCase() + sitio.sector.slice(1)}
            </p>
            <h1
              className="titulo-serif text-5xl leading-[1.05] text-ivory-100 sm:text-6xl md:text-7xl opacity-0"
              style={{ animation: 'riseUp 0.9s 0.25s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              {sitio.eslogan}
            </h1>
            <p
              className="mt-7 max-w-xl text-lg leading-relaxed text-ivory-200/85 opacity-0"
              style={{ animation: 'riseUp 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              {sitio.propuestaValor}
            </p>
            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center opacity-0"
              style={{ animation: 'riseUp 0.9s 0.55s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              <a href="#contacto" className="boton-primario group">
                {sitio.ctaPrincipal}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a href="#galeria" className="boton-secundario">
                Ver portafolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores del slideshow */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {sitio.imagenesHero.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a la imagen ${i + 1}`}
            onClick={() => setActivo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activo ? 'w-8 bg-ivory-100' : 'w-2.5 bg-ivory-100/40 hover:bg-ivory-100/70'
            }`}
          />
        ))}
      </div>

      {/* Pista de scroll */}
      <a
        href="#enfoque"
        className="absolute bottom-10 right-8 z-20 hidden items-center gap-2 text-ivory-200/60 transition-colors hover:text-ivory-100 lg:flex"
        aria-label="Bajar a la siguiente sección"
      >
        <span className="etiqueta">Descubrir</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
