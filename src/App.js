import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
// import Testimonial from "./components/testimonial/Testimonial";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Testimonial /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
