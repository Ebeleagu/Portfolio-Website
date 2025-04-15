import Header from "./Header.tsx";
import First from "./First.tsx";
import Services from "./Services.tsx";
import About from "./About.tsx";

import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import Projects from "./Projects.tsx";
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <section className="mt-18">

      <First />
      
      <About />
      <Services />
      <Projects />

      <Contact />
      <Footer />
      </section>
    </>
  );
}

export default App;
