import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About_Me from "./components/About_Me";
import Testimonials from "./components/Testimonials";
import data from "./components/testimonialData";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gradient-to-b from-white to-[#ad91a4]">
        <About_Me />
        <Testimonials data={data} />
        <Services />
        <Footer />
      </div>
    </>
  );
}
