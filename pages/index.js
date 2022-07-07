import AboutUs from "layouts/AboutUs";
import Believe from "layouts/Believe";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import Partners from "layouts/Partners";
import Services from "layouts/Services";
import Sidebar from "layouts/Sidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="mb-200px">
        <Hero />
      </div>
      <div className="mb-200px">
        <Believe />
      </div>
      <div className="mb-200px">
        <Services />
      </div>
      <div className="mb-200px">
        <AboutUs />
      </div>
      <div className="mb-200px">
        <Partners />
      </div>
      <Footer />
    </div>
  );
}
