import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { ShopTeaser } from "@/components/sections/ShopTeaser";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <ShopTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
