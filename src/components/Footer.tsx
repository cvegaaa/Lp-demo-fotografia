import { Instagram, Facebook, Camera } from 'lucide-react';
import { sitio } from '@/data/sitio';

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-espresso-950 py-14 text-ivory-200/70">
      <div className="contenedor">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-ivory-100/10 pb-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Camera size={20} className="text-clay-400" />
              <span className="font-serif text-lg text-ivory-100">
                {sitio.nombreGenerico}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ivory-200/60">
              {sitio.eslogan}.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#servicios" className="hover:text-ivory-100">Servicios</a>
            <a href="#galeria" className="hover:text-ivory-100">Portafolio</a>
            <a href="#testimonios" className="hover:text-ivory-100">Testimonios</a>
            <a href="#contacto" className="hover:text-ivory-100">Contacto</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={sitio.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-200/70 transition-all hover:border-clay-400 hover:text-clay-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href={sitio.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-200/70 transition-all hover:border-clay-400 hover:text-clay-300"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-center text-xs text-ivory-200/50 sm:flex-row sm:text-left">
          <p>
            &copy; {anio} {sitio.nombreGenerico}. Todos los derechos reservados.
          </p>
          <p>
            Demo diseñada por{' '}
            <a
              href="https://www.vegora.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-clay-300 underline-offset-4 transition-colors hover:text-clay-200 hover:underline"
            >
              Vegora
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
