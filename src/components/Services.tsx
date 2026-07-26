import { ArrowUpRight } from 'lucide-react';
import { sitio, type Servicio } from '@/data/sitio';

function TarjetaServicio({ servicio, index }: { servicio: Servicio; index: number }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-espresso-900 shadow-lg shadow-espresso-950/10"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={servicio.imagen}
          alt={servicio.titulo}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <span className="etiqueta mb-3 text-clay-300">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="titulo-serif text-2xl text-ivory-100">{servicio.titulo}</h3>
        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-ivory-200/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
          {servicio.descripcion}
        </p>
        <a
          href="#contacto"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-clay-300 transition-colors hover:text-ivory-100"
        >
          Conocer más
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicios" className="bg-ivory-100 py-24 sm:py-32">
      <div className="contenedor">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="etiqueta mb-5 text-clay-600">Qué hacemos</p>
            <h2 className="titulo-serif text-4xl leading-[1.1] text-espresso-900 sm:text-5xl">
              Servicios pensados
              <br />
              para cada historia
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-espresso-600">
            Cada formato se adapta al momento que querés capturar. Pasa el cursor
            sobre cada tarjeta para ver el detalle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sitio.servicios.map((s, i) => (
            <TarjetaServicio key={s.titulo} servicio={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
