// src/pages/Home.jsx
import './Home.css';
import logo from '../assets/images/tamateur-logo.svg';

const Home = () => {
    return (
        <div className="home-page">
            <p className="welcome-text">
                Seuraava Tamateur CS2 LAN-turnaus<br />
                järjestetään tutussa ja turvallisessa Bar & Cafe Lategamessa<br />
                Tampereella 29.11 - 30.11.2024
            </p>
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Home;
