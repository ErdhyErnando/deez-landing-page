import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Stats from "./components/Stats";
import Insights from "./components/Insights";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Insights />
      <Stats />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
