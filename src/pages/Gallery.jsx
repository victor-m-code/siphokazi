import React, { useState } from 'react';
import desk1 from '../assets/img/events/desk/img-d1.jpg';
import desk2 from '../assets/img/events/desk/img-d2.jpg';
import desk3 from '../assets/img/events/desk/img-d3.jpg';
import desk4 from '../assets/img/events/desk/img-d4.jpg';
import desk5 from '../assets/img/events/desk/img-d5.jpg';

import cell1 from '../assets/img/events/cell/img-c1.jpg';
import cell2 from '../assets/img/events/cell/img-c2.jpg';
import cell3 from '../assets/img/events/cell/img-c3.jpg';
import cell4 from '../assets/img/events/cell/img-c4.jpg';
import cell5 from '../assets/img/events/cell/img-c5.jpg';
import cell6 from '../assets/img/events/cell/img-c6.jpg';

export default function Gallery() {

  const [deskI, setDeskI] = useState(0);
  const [cello, setCello] = useState(0);
  const [cellt, setCellt] = useState(3);
  const desk = [desk1, desk2, desk3, desk4, desk5];
  const totDesk = desk.length;
  const cell = [cell1, cell2, cell3, cell4, cell5, cell6];
  const totCell = cell.length;

  const deskSlide = (direction) => {
    setDeskI(prev =>
      direction === 'prv'
        ? (prev - 1 + totDesk) % totDesk
        : (prev + 1) % totDesk
    );
  };
  const leftCellSlide = (direction) => {
    setCello(prev =>
      direction === 'prv'
        ? (prev - 1 + totCell) % totCell
        : (prev + 1) % totCell
    );
  };
  const rightCellSlide = (direction) => {
    setCellt(prev =>
      direction === 'prv'
        ? (prev - 1 + totCell) % totCell
        : (prev + 1) % totCell
    );
  };

  return (
    <section className='gallery'>
      <h3>Gallery</h3>
      <div className="gallery-intro">
        <div className="fade-slider-container left">
          {cell.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i}`}
              className={`fade-slide ${i === cello ? 'active' : ''}`}
            />
          ))}
          <button className="nav-btn left" onClick={() => leftCellSlide("prv")}>&#10094;</button>
          <button className="nav-btn right" onClick={() => leftCellSlide("nxt")}>&#10095;</button>
        </div>
        <div className="fade-slider-container top">
          {desk.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i}`}
              className={`fade-slide ${i === deskI ? 'active' : ''}`}
            />
          ))}
          <button className="nav-btn left" onClick={() => deskSlide("prv")}>&#10094;</button>
          <button className="nav-btn right" onClick={() => deskSlide("nxt")}>&#10095;</button>
        </div>
        <div className="fade-slider-container right">
          {cell.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i}`}
              className={`fade-slide ${i === cellt ? 'active' : ''}`}
            />
          ))}
          <button className="nav-btn left" onClick={() => rightCellSlide("prv")}>&#10094;</button>
          <button className="nav-btn right" onClick={() => rightCellSlide("nxt")}>&#10095;</button>
        </div>
      </div>
    </section>
  )
}
