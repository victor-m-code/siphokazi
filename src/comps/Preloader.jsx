import React from 'react';
import './Preloader.css'; // CSS for styling

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
