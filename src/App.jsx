import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Main from "./Components/MainComponent.jsx";
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import About from "./Components/sections/About.jsx";
import EreWeGo from "./Components/sections/EreWeGo.jsx";

function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/ere-we-go" element={<EreWeGo />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
