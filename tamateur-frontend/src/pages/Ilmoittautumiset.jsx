import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Ilmoittautumiset.css'; 

const Ilmoittautumiset = () => {
  const [email, setEmail] = useState('');
  const [real_name, setRealName] = useState('');
  const [player_name, setPlayerName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, real_name, player_name };

    setLoading(true); // Start loading
    setError(null); // Reset error state

    try {
        const response = await fetch('link', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Network response was not ok');
        }

        // Redirect to the Maksutiedot page if registration is successful
        navigate('/maksutiedot');
        // Reset the form fields
        setEmail('');
        setRealName('');
        setPlayerName('');
    } catch (error) {
        console.error('Registration failed:', error);
        setError(error.message);
    } finally {
        setLoading(false); // Stop loading
    }
  };

  return (
    <div className="registration-wrapper">
      <p className="event-date">29.11 - 30.11.2024, Bar & Cafe Lategame</p>
      <div className="registration-form">
        <h1>Turnaukseen rekisteröityminen</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Sähköposti:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="real_name">Etu- ja sukunimi:</label>
            <input type="text" id="real_name" value={real_name} onChange={(e) => setRealName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="player_name">Pelinick:</label>
            <input type="text" id="player_name" value={player_name} onChange={(e) => setPlayerName(e.target.value)} required />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div>
            <button className="buttonIlmot" type="submit" disabled={loading}>
              {loading ? 'ilmoittautuu...' : 'Ilmoittaudu turnaukseen'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ilmoittautumiset;
