import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Karnataka from "./pages/Karnataka";
import Kerala from "./pages/Kerala";
import Telangana from "./pages/Telangana";
import AndhraPradesh from "./pages/AndhraPradesh";
import TamilNadu from "./pages/TamilNadu";

// Karnataka
import KarnatakaArchitecture from "./pages/Categories/Karnataka/Architecture";
import KarnatakaCuisine from "./pages/Categories/Karnataka/Cuisine";
import KarnatakaCulture from "./pages/Categories/Karnataka/Culture";
import KarnatakaKingdoms from "./pages/Categories/Karnataka/Kingdoms";
import KarnatakaPlaces from "./pages/Categories/Karnataka/Places";
import KarnatakaWildlife from "./pages/Categories/Karnataka/Wildlife";

// Kerala
import KeralaArchitecture from "./pages/Categories/Kerala/Architecture";
import KeralaCuisine from "./pages/Categories/Kerala/Cuisine";
import KeralaCulture from "./pages/Categories/Kerala/Culture";
import KeralaKingdoms from "./pages/Categories/Kerala/Kingdoms";
import KeralaPlaces from "./pages/Categories/Kerala/Places";
import KeralaWildlife from "./pages/Categories/Kerala/Wildlife";

// Andhra Pradesh
import AndhraArchitecture from "./pages/Categories/Andhrapradesh/Architecture";
import AndhraCuisine from "./pages/Categories/Andhrapradesh/Cuisine";
import AndhraCulture from "./pages/Categories/Andhrapradesh/Culture";
import AndhraKingdoms from "./pages/Categories/Andhrapradesh/Kingdoms";
import AndhraPlaces from "./pages/Categories/Andhrapradesh/Places";
import AndhraWildlife from "./pages/Categories/Andhrapradesh/Wildlife";

// Tamil Nadu
import TamilNaduArchitecture from "./pages/Categories/Tamilnadu/Architecture";
import TamilNaduCuisine from "./pages/Categories/Tamilnadu/Cuisine";
import TamilNaduCulture from "./pages/Categories/Tamilnadu/Culture";
import TamilNaduKingdoms from "./pages/Categories/Tamilnadu/Kingdoms";
import TamilNaduPlaces from "./pages/Categories/Tamilnadu/Places";
import TamilNaduWildlife from "./pages/Categories/Tamilnadu/Wildlife";

// Telangana
import TelanganaArchitecture from "./pages/Categories/Telangana/Architecture";
import TelanganaCuisine from "./pages/Categories/Telangana/Cuisine";
import TelanganaCulture from "./pages/Categories/Telangana/Culture";
import TelanganaKingdoms from "./pages/Categories/Telangana/Kingdoms";
import TelanganaPlaces from "./pages/Categories/Telangana/Places";
import TelanganaWildlife from "./pages/Categories/Telangana/Wildlife";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* State Pages */}
        <Route path="/karnataka" element={<Karnataka />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/andhra-pradesh" element={<AndhraPradesh />} />
        <Route path="/tamil-nadu" element={<TamilNadu />} />
        <Route path="/telangana" element={<Telangana />} />

        {/* Karnataka */}
        <Route path="/karnataka/architecture" element={<KarnatakaArchitecture />} />
        <Route path="/karnataka/cuisine" element={<KarnatakaCuisine />} />
        <Route path="/karnataka/culture" element={<KarnatakaCulture />} />
        <Route path="/karnataka/kingdoms" element={<KarnatakaKingdoms />} />
        <Route path="/karnataka/places" element={<KarnatakaPlaces />} />
        <Route path="/karnataka/wildlife" element={<KarnatakaWildlife />} />

        {/* Kerala */}
        <Route path="/kerala/architecture" element={<KeralaArchitecture />} />
        <Route path="/kerala/cuisine" element={<KeralaCuisine />} />
        <Route path="/kerala/culture" element={<KeralaCulture />} />
        <Route path="/kerala/kingdoms" element={<KeralaKingdoms />} />
        <Route path="/kerala/places" element={<KeralaPlaces />} />
        <Route path="/kerala/wildlife" element={<KeralaWildlife />} />

        {/* Andhra Pradesh */}
        <Route path="/andhra-pradesh/architecture" element={<AndhraArchitecture />} />
        <Route path="/andhra-pradesh/cuisine" element={<AndhraCuisine />} />
        <Route path="/andhra-pradesh/culture" element={<AndhraCulture />} />
        <Route path="/andhra-pradesh/kingdoms" element={<AndhraKingdoms />} />
        <Route path="/andhra-pradesh/places" element={<AndhraPlaces />} />
        <Route path="/andhra-pradesh/wildlife" element={<AndhraWildlife />} />

        {/* Tamil Nadu */}
        <Route path="/tamil-nadu/architecture" element={<TamilNaduArchitecture />} />
        <Route path="/tamil-nadu/cuisine" element={<TamilNaduCuisine />} />
        <Route path="/tamil-nadu/culture" element={<TamilNaduCulture />} />
        <Route path="/tamil-nadu/kingdoms" element={<TamilNaduKingdoms />} />
        <Route path="/tamil-nadu/places" element={<TamilNaduPlaces />} />
        <Route path="/tamil-nadu/wildlife" element={<TamilNaduWildlife />} />

        {/* Telangana */}
        <Route path="/telangana/architecture" element={<TelanganaArchitecture />} />
        <Route path="/telangana/cuisine" element={<TelanganaCuisine />} />
        <Route path="/telangana/culture" element={<TelanganaCulture />} />
        <Route path="/telangana/kingdoms" element={<TelanganaKingdoms />} />
        <Route path="/telangana/places" element={<TelanganaPlaces />} />
        <Route path="/telangana/wildlife" element={<TelanganaWildlife />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;