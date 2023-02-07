import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About_Me from "./components/About_Me";
import Testimonials from "./components/Testimonials";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About_Me />
      <Testimonials />
      <Services />
    </>
  );
}
