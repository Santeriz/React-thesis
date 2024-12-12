import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Kuvacomponent from './pages/components/Kuvacomponent';
import NotFound from './pages/NotFound';
import NavBar from './pages/components/NavBar';
import Ilmoittautumiset from './pages/Ilmoittautumiset';
import Yhteistyokumppanit from './pages/yhteistyokumppanit';
import Meista from './pages/Meista';
import Footer from './pages/components/Footer';
import Maksutiedot from './pages/Maksutiedot';
import ScrollToTop from './pages/components/ScrollToTop'; // Import ScrollToTop

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <div className="app-container">
        <NavBar /> {/* Include NavBar */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kuvagalleria" element={<Kuvacomponent />} />
            <Route path="/ilmoittautumiset" element={<Ilmoittautumiset />} />
            <Route path="/maksutiedot" element={<Maksutiedot />} />
            <Route path="/yhteistyokumppanit" element={<Yhteistyokumppanit />} />
            <Route path="/meista" element={<Meista />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer /> {/* Include Footer */}
      </div>
    </Router>
  );
};

export default App;
