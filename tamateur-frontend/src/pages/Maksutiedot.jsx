import React from 'react';
import './Maksutiedot.css';

const Maksutiedot = () => {
  return (
    <div className="payment-info-wrapper">
      <h1>Maksutiedot</h1>
      <p>Kiitos rekisteröitymisestä! Alla maksutiedot:</p>
      <ul>
        <li>Saajan nimi: asd</li>
        <li>Pankkitili: asd</li>
        <li>Viitenumero: asd</li>
        <li>Virtuaaliviivakoodi: asd </li>
        <li>Maksun määrä: €</li>
      </ul>

      {/* QR Code placeholder */}
      <div className="qr-code-placeholder">
        <p> </p>
      </div>

      <p>Maksa osallistumismaksu viimeistään xx.xx.2024.</p>

      {/* QR placeholder */}
      <div className="qrplaceholder">
        <p></p>
      </div>
    </div>
  );
};

export default Maksutiedot;
