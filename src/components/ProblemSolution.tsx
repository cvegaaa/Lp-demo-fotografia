import { sitio } from '@/data/sitio';

export function ProblemSolution() {
  return (
    <section id="enfoque" className="bg-ivory-100 py-24 sm:py-32">
      <div className="contenedor">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="etiqueta mb-5 text-clay-600">El enfoque</p>
            <h2 className="titulo-serif text-4xl leading-[1.1] text-espresso-900 sm:text-5xl">
              Menos poses rígidas.
              <br />
              <span className="text-clay-600">Más momentos reales.</span>
            </h2>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <div className="border-l-2 border-clay-300 pl-6">
              <p className="etiqueta mb-3 text-espresso-400">El problema</p>
              <p className="text-lg leading-relaxed text-espresso-700">
                {sitio.problemaTipo}
              </p>
            </div>
            <div className="border-l-2 border-clay-500 pl-6">
              <p className="etiqueta mb-3 text-clay-600">La oportunidad</p>
              <p className="text-lg leading-relaxed text-espresso-700">
                {sitio.solucionTipo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
