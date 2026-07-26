/**
 * Configuración central de la landing.
 *
 * Reemplazar los valores de este archivo para adaptar la plantilla a un
 * negocio real del sector fotografía. Todos los datos aquí son genéricos
 * del sector y no corresponden a ningún negocio real.
 */

export interface Servicio {
  titulo: string;
  descripcion: string;
  imagen: string;
}

export interface Testimonio {
  nombre: string;
  rol: string;
  texto: string;
}

export interface DatosSitio {
  sector: string;
  nombreGenerico: string;
  eslogan: string;
  propuestaValor: string;
  problemaTipo: string;
  solucionTipo: string;
  ctaPrincipal: string;
  servicios: Servicio[];
  testimonios: Testimonio[];
  imagenesHero: string[];
  datosContacto: {
    telefono: string;
    whatsapp: string;
    direccion: string;
    horario: string;
    email: string;
  };
  redes: {
    instagram: string;
    facebook: string;
  };
}

export const sitio: DatosSitio = {
  sector: 'fotografía profesional',
  nombreGenerico: 'Estudio de Fotografía',
  eslogan: 'Historias que merecen ser recordadas',
  propuestaValor:
    'Capturamos los momentos que importan con una mirada editorial y natural. Cada sesión es una conversación, no una pose.',
  problemaTipo:
    'Las fotografías de celular se acumulan en carpetas perdidas: los recuerdos importantes quedan sin un relato visual que los haga perdurar.',
  solucionTipo:
    'Convertimos tus momentos en imágenes con alma: sesiones pensadas, dirección natural y entregables listos para compartir y conservar.',
  ctaPrincipal: 'Agenda tu sesión',
  imagenesHero: [
    'https://images.pexels.com/photos/36697247/pexels-photo-36697247.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/12088591/pexels-photo-12088591.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/36697538/pexels-photo-36697538.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/18322549/pexels-photo-18322549.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/30696869/pexels-photo-30696869.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
  servicios: [
    {
      titulo: 'Bodas y Eventos',
      descripcion:
        'Cobertura completa de tu día, desde la preparación hasta la celebración. Edición editorial y galería digital para compartir.',
      imagen:
        'https://images.pexels.com/photos/29891256/pexels-photo-29891256.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      titulo: 'Retratos y Sesiones de Estudio',
      descripcion:
        'Retratos individuales, familiares o profesionales con dirección natural. Luz de estudio y locaciones a elección.',
      imagen:
        'https://images.pexels.com/photos/36697251/pexels-photo-36697251.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      titulo: 'Fotografía de Producto y Marca',
      descripcion:
        'Imágenes para catálogos, tiendas online y redes. Composición cuidada y color preciso para que tu producto venda.',
      imagen:
        'https://images.pexels.com/photos/3584932/pexels-photo-3584932.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
      titulo: 'Sesiones en Locación',
      descripcion:
        'Paisajes, arquitectura y reportaje en exteriores. Aprovechamos la luz natural para contar el lugar que habitas.',
      imagen:
        'https://images.pexels.com/photos/35558646/pexels-photo-35558646.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
  ],
  testimonios: [
    {
      nombre: 'María y Sebastián',
      rol: 'Pareja — sesión de bodas',
      texto:
        'Nos hicieron sentir cómodos desde el primer minuto. Las fotos no parecían posadas, parecían nosotros de verdad.',
    },
    {
      nombre: 'Daniela R.',
      rol: 'Emprendedora — fotografía de marca',
      texto:
        'Las imágenes elevaron por completo la presentación de mi tienda. Recibí comentarios desde el primer día que las publiqué.',
    },
    {
      nombre: 'Familia Gómez',
      rol: 'Retrato familiar',
      texto:
        'Una experiencia cálida y profesional. El resultado quedó como un regalo que vamos a conservar por años.',
    },
  ],
  datosContacto: {
    telefono: '+57 300 000 0000',
    whatsapp: '+57 300 000 0000',
    direccion: 'Ciudad, Colombia',
    horario: 'Lunes a viernes, 8 a. m. - 6 p. m.',
    email: 'hola@estudio-demo.co',
  },
  redes: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
};
