import Header from "./Header.tsx";
import First from "./First.tsx";
import Services from "./Services.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <section className="mt-20">

      <First />
      <About />
      <Services />

      <Contact />
      <Footer />
      </section>
    </>
  );
}

export default App;
