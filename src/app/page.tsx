import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Transformations from '@/components/Transformations';
import Services from '@/components/Services';
import Schedule from '@/components/Schedule';
import BMICalculator from '@/components/BMICalculator';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Transformations />
      <Services />
      <Schedule />
      <BMICalculator />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
