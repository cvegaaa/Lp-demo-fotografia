import { sitio } from '@/data/sitio';

// Galería editorial con recortes variados para dar ritmo visual.
const composiciones = [
  {
    src: 'https://images.pexels.com/photos/15641348/pexels-photo-15641348.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Pareja durante una boda',
    clase: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/36697244/pexels-photo-36697244.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Retrato de estudio con luz natural',
    clase: '',
  },
  {
    src: 'https://images.pexels.com/photos/13293704/pexels-photo-13293704.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Detalle de producto',
    clase: '',
  },
  {
    src: 'https://images.pexels.com/photos/37929756/pexels-photo-37929756.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Fotógrafo en exteriores',
    clase: '',
  },
  {
    src: 'https://images.pexels.com/photos/12031176/pexels-photo-12031176.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Ceremonia al aire libre',
    clase: 'sm:col-span-2',
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-espresso-900 py-24 sm:py-32">
      <div className="contenedor">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="etiqueta mb-5 text-clay-300">Portafolio</p>
            <h2 className="titulo-serif text-4xl leading-[1.1] text-ivory-100 sm:text-5xl">
              Una selección de
              <br />
              <span className="text-clay-300">miradas recientes</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ivory-200/70">
            Muestra editorial de trabajo de estudio y locación. Las imágenes son
            ilustrativas del sector.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-4">
          {composiciones.map((c) => (
            <figure
              key={c.src}
              className={`group relative overflow-hidden rounded-xl ${c.clase}`}
            >
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso-950/0 transition-colors duration-500 group-hover:bg-espresso-950/20" />
              <figcaption className="absolute bottom-0 left-0 translate-y-2 p-4 text-sm text-ivory-100 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {c.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#contacto" className="boton-secundario">
            {sitio.ctaPrincipal}
          </a>
        </div>
      </div>
    </section>
  );
}
