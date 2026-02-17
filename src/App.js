import Anasayfa from './components/Anasayfa';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Modal from './components/Modal';
import 'animate.css/animate.min.css'; // Import animate.css
import AmacVeKapsam from './components/AmacVeKapsam';
import Iletisim from './components/Iletisim';
import Hakkimizda from './components/Hakkimizda';
import DuzenlemeKurulu from './components/DuzenlemeKurulu';
import KatilimciDegerlendirma from './components/KatilimciDegerlendirma';
import ToTopButton from './components/ToTopButton';
import Konaklama from './components/Konaklama';
import Egitmenler from './components/Egitmenler';

import 'aos/dist/aos.css';
import EgitimProgrami from './components/EgitimProgrami';
import NotFound from './components/NotFound';
import BilimKurulu from './components/BilimKurulu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/anasayfa" element={<Anasayfa />} />
          <Route path="/amac-ve-kapsam" element={<AmacVeKapsam />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/duzenleme-kurulu" element={<DuzenlemeKurulu />} />
          <Route path="/bilim-kurulu" element={<BilimKurulu />} />
          <Route path="/katilimci-degerlendirme" element={<KatilimciDegerlendirma />} />
          <Route path="/konaklama" element={<Konaklama />} />
          <Route path="/egitmenler" element={<Egitmenler />} />
          <Route path="/egitim-programi" element={<EgitimProgrami />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToTopButton />
        <Modal/>
      </Router>
    </div>
  );
}

export default App;
