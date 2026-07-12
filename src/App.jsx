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
import KarnatakaArchitecture from "./pages/categories/karnataka/Architecture";
import KarnatakaCuisine from "./pages/categories/karnataka/Cuisine";
import KarnatakaCulture from "./pages/categories/karnataka/Culture";
import KarnatakaKingdoms from "./pages/categories/karnataka/Kingdoms";
import KarnatakaPlaces from "./pages/categories/karnataka/Places";
import KarnatakaWildlife from "./pages/categories/karnataka/Wildlife";

// Kerala
import KeralaArchitecture from "./pages/categories/kerala/Architecture";
import KeralaCuisine from "./pages/categories/kerala/Cuisine";
import KeralaCulture from "./pages/categories/kerala/Culture";
import KeralaKingdoms from "./pages/categories/kerala/Kingdoms";
import KeralaPlaces from "./pages/categories/kerala/Places";
import KeralaWildlife from "./pages/categories/kerala/Wildlife";

// Andhra Pradesh
import AndhraArchitecture from "./pages/categories/Andhrapradesh/Architecture";
import AndhraCuisine from "./pages/categories/Andhrapradesh/Cuisine";
import AndhraCulture from "./pages/categories/Andhrapradesh/Culture";
import AndhraKingdoms from "./pages/categories/Andhrapradesh/Kingdoms";
import AndhraPlaces from "./pages/categories/Andhrapradesh/Places";
import AndhraWildlife from "./pages/categories/Andhrapradesh/Wildlife";

// Tamil Nadu
import TamilNaduArchitecture from "./pages/categories/TamilNadu/Architecture";
import TamilNaduCuisine from "./pages/categories/TamilNadu/Cuisine";
import TamilNaduCulture from "./pages/categories/TamilNadu/Culture";
import TamilNaduKingdoms from "./pages/categories/TamilNadu/Kingdoms";
import TamilNaduPlaces from "./pages/categories/TamilNadu/Places";
import TamilNaduWildlife from "./pages/categories/TamilNadu/Wildlife";

// Telangana
import TelanganaArchitecture from "./pages/categories/Telangana/Architecture";
import TelanganaCuisine from "./pages/categories/Telangana/Cuisine";
import TelanganaCulture from "./pages/categories/Telangana/Culture";
import TelanganaKingdoms from "./pages/categories/Telangana/Kingdoms";
import TelanganaPlaces from "./pages/categories/Telangana/Places";
import TelanganaWildlife from "./pages/categories/Telangana/Wildlife";

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