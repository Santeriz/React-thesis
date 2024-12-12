import './Footer.css';
import { FaTwitch, FaDiscord } from 'react-icons/fa'; // react-icons

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h4>Tamateur ry</h4>
      <p>Y-tunnus: 3424799-2</p>
      <p>Finninmäenkatu 27 C 14</p>
      <p>33710 Tampere</p>
    </div>
    <div className="footer-section">
      <h4>Yhteystiedot</h4>
      <p>tamateurry@gmail.com</p>
      <p></p>
    </div>
    <div className="footer-section">
      <h4>Somet</h4>
      <div className="social-media-icons">
  <a href="https://www.twitch.tv/tamateurtv" target="_blank" rel="noopener noreferrer">
    <FaTwitch size="2.5em" style={{ color: '#9146FF' }} />
  </a>
  <a href="https://discord.gg/UHRk5hsyPH" target="_blank" rel="noopener noreferrer">
    <FaDiscord size="2.5em" style={{ color: '#5865F2' }} />
  </a>
</div>
    </div>
  </footer>
);

export default Footer;
