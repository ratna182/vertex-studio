import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Manifesto />
        <Services />
        <Portfolio />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
