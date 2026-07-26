import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { sitio } from '@/data/sitio';

const enlaces = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#enfoque', label: 'Enfoque' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso-900/90 backdrop-blur-md shadow-lg shadow-espresso-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="contenedor flex h-20 items-center justify-between">
        <a
          href="#inicio"
          className="font-serif text-xl font-medium tracking-tight text-ivory-100"
        >
          {sitio.nombreGenerico}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {enlaces.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="text-sm font-medium text-ivory-200/80 transition-colors hover:text-ivory-100"
            >
              {e.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contacto" className="boton-primario">
            {sitio.ctaPrincipal}
          </a>
        </div>

        <button
          type="button"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ivory-100 transition-colors hover:bg-ivory-100/10 md:hidden"
        >
          {abierto ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {abierto && (
        <div className="border-t border-ivory-100/10 bg-espresso-900/95 backdrop-blur-md md:hidden">
          <nav className="contenedor flex flex-col gap-1 py-6">
            {enlaces.map((e) => (
              <a
                key={e.href}
                href={e.href}
                onClick={() => setAbierto(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ivory-200/90 transition-colors hover:bg-ivory-100/10 hover:text-ivory-100"
              >
                {e.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setAbierto(false)}
              className="boton-primario mt-3 w-full"
            >
              {sitio.ctaPrincipal}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
