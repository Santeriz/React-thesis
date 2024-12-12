import './yhteistyokumppanit.css';
import nelePcImage from '../assets/images/NelePC.jpg';

const Yhteistyokumppanit = () => {
  return (
    <div className="yhteistyokumppanit-container">
      <h1 className="yhteistyokumppanit-title">Tamateurin toimintaa tukemassa</h1>
      <h2 className="nele-title"></h2>
      <div className="image-grid">
        <div className="nele-item">
          <p className="nele-caption">Nele pc Tarjoaa kaikki ne IT-ratkaisut mitä yrityksesi tarvitsee tehokkaaseen työskentelyyn</p>
          <a href="https://nelepc.com/" target="_blank" rel="noopener noreferrer" className="image-link">
    <img src={nelePcImage} alt="NELE-PC" className="yhteistyokumppanit-image" />
            </a>
        </div>
        {/* Add other images here with text */}
      </div>
      {/* Add other content here */}
    </div>
  );
};

export default Yhteistyokumppanit;
