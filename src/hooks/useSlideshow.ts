import { useEffect, useState } from 'react';

/**
 * Hook para alternar imágenes del hero en crossfade.
 * Devuelve el índice activo y avanza automáticamente cada `intervalo` ms.
 */
export function useSlideshow(cantidad: number, intervalo = 5000) {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    if (cantidad <= 1) return;
    const id = window.setInterval(() => {
      setActivo((prev) => (prev + 1) % cantidad);
    }, intervalo);
    return () => window.clearInterval(id);
  }, [cantidad, intervalo]);

  return { activo, setActivo };
}
