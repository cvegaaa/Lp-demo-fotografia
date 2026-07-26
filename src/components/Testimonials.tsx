import { Quote } from 'lucide-react';
import { sitio } from '@/data/sitio';

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-ivory-100 py-24 sm:py-32">
      <div className="contenedor">
        <div className="mb-14 text-center">
          <p className="etiqueta mb-5 text-clay-600">Lo que dicen</p>
          <h2 className="titulo-serif text-4xl leading-[1.1] text-espresso-900 sm:text-5xl">
            Voces de quienes confiaron
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-espresso-600">
            Testimonios de ejemplo — se reemplazan con reseñas reales del
            negocio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sitio.testimonios.map((t) => (
            <figure
              key={t.nombre}
              className="flex h-full flex-col rounded-2xl border border-espresso-200/60 bg-ivory-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-espresso-900/5"
            >
              <Quote size={28} className="mb-5 text-clay-400" />
              <blockquote className="flex-1 text-base leading-relaxed text-espresso-700">
                &ldquo;{t.texto}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-espresso-200/60 pt-5">
                <p className="font-serif text-lg text-espresso-900">{t.nombre}</p>
                <p className="mt-1 text-sm text-espresso-500">{t.rol}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
