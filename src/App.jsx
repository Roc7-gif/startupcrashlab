import React from "react"; // needed for JSX (if your build setup requires it)
// component imports
import HeroSection from "./components/HeroSection";
import BookshelfSection from "./components/BookshelfSection";
import BlackboxSection from "./components/BlackboxSection";
import PourquoiSection from "./components/PourquoiSection";
import Programme from "./components/Programe";
import WorkingSection from "./components/WorkingSection";
import ForWhat from "./components/ForWhat";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Coach from "./components/Coach";
import Cta from "./components/Cta";
import Footer from "./components/footer";
// additional imports (hooks, assets, styles) can go here

export default function App() {
  return (
    <>
      {/* hero now delegated to its own component */}
      <HeroSection />
     
      {/* bookshelf now delegated to its own component */}
      <BookshelfSection />
    
      {/* blackbox now delegated to its own component */}
      <BlackboxSection />
     
      {/* pourquoi section delegated to its own component */}
      <PourquoiSection />
     
    
      {/* PROGRAMMES */}
      <Programme/>

      {/* COMMENT ÇA MARCHE */}
     <WorkingSection/>

      {/* POUR QUI */}
     <ForWhat/>

      {/* IMPACT */}
     <Impact/>

      {/* TESTIMONIALS SECTION */}
      <Testimonials/>

      {/* COACH */}
    <Coach/>

      {/* CTA FINAL */}
    <Cta/>

      {/* FOOTER */}
     <Footer/>
     
      <floatingBtn/>

      
    </>
  );
}
