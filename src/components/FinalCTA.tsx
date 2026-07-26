import { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { sitio } from '@/data/sitio';

function enlaceWhatsApp() {
  const numero = sitio.datosContacto.whatsapp.replace(/[^0-9]/g, '');
  const texto = encodeURIComponent(
    `Hola, me gustaría ${sitio.ctaPrincipal.toLowerCase()} con ${sitio.nombreGenerico}.`
  );
  return `https://wa.me/${numero}?text=${texto}`;
}

export function FinalCTA() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: redirige a WhatsApp con el mensaje prellenado.
    const texto = encodeURIComponent(
      `Hola, soy ${form.nombre}. ${form.mensaje} (Contacto: ${form.email})`
    );
    const numero = sitio.datosContacto.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    setEnviado(true);
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-espresso-900 py-24 sm:py-32"
    >
      {/* Imagen de fondo sutil */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/30657776/pexels-photo-30657776.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/80 to-espresso-950/40" />
      </div>

      <div className="relative z-10 contenedor">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Columna izquierda: invitación + datos */}
          <div>
            <p className="etiqueta mb-5 text-clay-300">Conversemos</p>
            <h2 className="titulo-serif text-4xl leading-[1.1] text-ivory-100 sm:text-5xl">
              {sitio.ctaPrincipal}
              <br />
              <span className="text-clay-300">y contamos tu historia.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory-200/80">
              Cuéntanos tu idea y te proponemos un plan a la medida. Respondemos
              en menos de 24 horas hábiles.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={enlaceWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="boton-primario group"
              >
                <MessageCircle size={18} />
                Escríbenos por WhatsApp
              </a>

              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-ivory-200/85">
                  <Phone size={18} className="text-clay-300" />
                  <a href={`tel:${sitio.datosContacto.telefono.replace(/\s/g, '')}`}>
                    {sitio.datosContacto.telefono}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-ivory-200/85">
                  <Mail size={18} className="text-clay-300" />
                  <a href={`mailto:${sitio.datosContacto.email}`}>
                    {sitio.datosContacto.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-ivory-200/85">
                  <MapPin size={18} className="text-clay-300" />
                  {sitio.datosContacto.direccion}
                </li>
                <li className="flex items-center gap-3 text-ivory-200/85">
                  <Clock size={18} className="text-clay-300" />
                  {sitio.datosContacto.horario}
                </li>
              </ul>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="rounded-2xl border border-ivory-100/10 bg-espresso-800/60 p-8 backdrop-blur-sm sm:p-10">
            {enviado ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-clay-500/20 text-clay-300">
                  <Send size={24} />
                </div>
                <h3 className="titulo-serif text-2xl text-ivory-100">
                  ¡Listo! Te redirigimos a WhatsApp.
                </h3>
                <p className="mt-3 max-w-xs text-sm text-ivory-200/75">
                  Si no se abrió, revisa el bloqueo de ventanas emergentes o
                  escríbenos directamente.
                </p>
                <button
                  type="button"
                  onClick={() => setEnviado(false)}
                  className="mt-6 text-sm font-medium text-clay-300 underline-offset-4 hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-sm font-medium text-ivory-200/85"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-ivory-100/15 bg-espresso-950/40 px-4 py-3 text-ivory-100 placeholder:text-ivory-200/40 transition-colors focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-ivory-200/85"
                  >
                    Correo
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full rounded-lg border border-ivory-100/15 bg-espresso-950/40 px-4 py-3 text-ivory-100 placeholder:text-ivory-200/40 transition-colors focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-2 block text-sm font-medium text-ivory-200/85"
                  >
                    ¿Qué tienes en mente?
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    placeholder="Cuéntanos el tipo de sesión, fecha tentativa y lugar."
                    className="w-full resize-none rounded-lg border border-ivory-100/15 bg-espresso-950/40 px-4 py-3 text-ivory-100 placeholder:text-ivory-200/40 transition-colors focus:border-clay-400 focus:outline-none focus:ring-1 focus:ring-clay-400"
                  />
                </div>
                <button type="submit" className="boton-primario w-full">
                  <Send size={16} />
                  Enviar solicitud
                </button>
                <p className="text-center text-xs text-ivory-200/50">
                  Al enviar, se abrirá WhatsApp con tu mensaje prellenado.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
