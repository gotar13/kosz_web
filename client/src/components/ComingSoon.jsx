import React from 'react';
import '../styles/comingSoon.css';
import KoszLogo from '../assets/Koszlogo.png'; // Importáljuk a Kosz logót

export default function ComingSoon() {
  return (
    <main className="container">
      <div className="logoKosz">
        <img
          src={KoszLogo}
          alt="Kosz_logo"
        />
      </div>
      <h1>Coming Soon</h1>
      <div className="loader">
        <div className="bar" />
      </div>
    </main>
  );
}