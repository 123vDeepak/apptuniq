import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Process from './components/Process';
import Industries from './components/Industries';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Technologies />
        <Process />
        <Industries />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}