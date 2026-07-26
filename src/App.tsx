import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProblemSolution } from '@/components/ProblemSolution';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory-100">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
