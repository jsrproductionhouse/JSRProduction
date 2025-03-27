import Home from "./Pages/Home";
import axios from 'axios'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Services from "./Pages/Services";
// import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";
import Rentals from "./Pages/Rentals";
import Member from "./Pages/Member";
import { useEffect } from "react";
import ReactGA from "react-ga4";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";
ReactGA.initialize("G-QJMTS5LSV3");
function App() {
  const location = useLocation();
  useEffect(()=>{
    
    ReactGA.send({ hitType: "pageview", page: window.location.pathname+window.location.search});
  },[location])


  return (
    <>
      {/* <AnimatePresence> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/member" element={<Member />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
