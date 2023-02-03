import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About_Me from "./components/About_Me";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About_Me />
      <Services />
    </>
  );
}
