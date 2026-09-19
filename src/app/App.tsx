import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { About } from "@/app/components/About";
import { NewCar } from "@/app/components/NewCar";
import { Location } from "@/app/components/Location";
import { Contact } from "@/app/components/Contact";
import { Gallery } from "@/app/components/Gallery";
import { Reviews } from "@/app/components/Reviews";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <NewCar />
        <Gallery />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
