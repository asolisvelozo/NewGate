export default function HalfLightSeries() {
  return (
    <div className="min-h-screen pt-0 pb-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        {/* IMAGEN 0: Con animación de entrada rápida */}
        <div className="flex justify-center -mt-10 mb-0 relative z-10 pointer-events-none animate-fadeInUp">
          <img 
            src="/half-light/0.PNG" 
            alt="The Half-Light Series" 
            className="w-full h-auto max-w-4xl"
          />
        </div>

        {/* SECCIÓN 1: Aparece con un poco de delay */}
        <div className="-mt-16 md:-mt-80 mb-24 space-y-12 relative z-20 animate-fadeInUp" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-widest italic drop-shadow-md">¿Qué es Half-Light?</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Half-Light para mí no es solo un término técnico del mundo del arte. Tiene un significado mucho más profundo. Es el título de mi canción favorita, una obra y una historia que me revolucionaron la forma de ver muchos aspectos de la vida. Me ayudó a transitar momentos tristes y difíciles, así como también me acompañó en los felices y alegres.
            </p>
          </div>
          {/* FOTOS 1 Y 2: Con efecto Hover de Zoom */}
          <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img src="/half-light/1.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Detalle 1" />
            </div>
            <div className="w-full md:w-1/2 overflow-hidden">
              <img src="/half-light/2.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Detalle 2" />
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: Aparece con más delay */}
        <div className="mb-24 space-y-12 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-widest italic drop-shadow-md">¿Cómo surgió?</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Nació del concepto que utilicé para la guitarra de Steven Wilson, mi artista favorito. Quería que esa guitarra tuviera un significado extra, un propósito detrás de su construcción.
              <br /><br />
              Tomando Half-Light como inspiración —tanto su sentido poético como el valor personal que tiene para mí— busqué una manera de plasmar ese concepto en un instrumento único.
              <br /><br />
              Así nació <span className="text-white font-medium italic">"The Half-Light Series"</span>.
            </p>
          </div>
          {/* FOTOS 3 Y 4 */}
          <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img src="/half-light/3.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Construcción 1" />
            </div>
            <div className="w-full md:w-1/2 overflow-hidden">
              <img src="/half-light/4.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Construcción 2" />
            </div>
          </div>
        </div>

        {/* SECCIÓN 3 */}
        <div className="mb-24 space-y-12 animate-fadeInUp" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-wider italic drop-shadow-md text-balance">
              ¿Qué significa que una NewGate pertenezca a <br className="hidden md:block"/> The Half-Light Series?
            </h2>
            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light mt-8">
              <p>La idea nació con aquella guitarra para Steven, inspirada en mi canción favorita. Busqué la belleza y el equilibrio en el contraste absoluto, construyendo algo sobrio pero a la vez llamativo, del cual nació este instrumento que tanta felicidad me dió y me da.</p>
              <p>Ese camino dio origen a una nueva filosofía de construcción: usar las maderas en su coloración natural, sin tintas, buscando un contraste absoluto entre ellas, así como también buscando equilibrio y belleza en dicho contraste.</p>
              <p>The Half-Light Series representa precisamente eso — la búsqueda del equilibrio, la armonía y la belleza que habitan entre la luz y la sombra.</p>
              <p>Esta Genesis Singlecut “Half-Light” fue la primera en materializar esa idea y marcar el inicio de esta nueva etapa creativa.</p>
            </div>
          </div>
          {/* FOTOS 5 Y 6 */}
          <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img src="/half-light/5.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Steven Wilson 1" />
            </div>
            <div className="w-full md:w-1/2 overflow-hidden">
              <img src="/half-light/6.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Steven Wilson 2" />
            </div>
          </div>
        </div>

        {/* CIERRE Y GALERÍA FINAL */}
        <div className="pt-16 border-t border-white/5 space-y-16 animate-fadeInUp" style={{ animationDelay: '800ms', animationFillMode: 'both' }}>
          <p className="text-center font-medium text-xl md:text-3xl italic tracking-tight drop-shadow-lg">
            La guitarra fue entregada personalmente a Steven Wilson como regalo.
          </p>
          
          {/* FOTOS 7, 8, 9 */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
              <img src="/half-light/7.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Final 7" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
              <img src="/half-light/8.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Final 8" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
              <img src="/half-light/9.jpeg" className="w-full h-auto block hover:scale-105 transition-transform duration-1000" alt="Final 9" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}