import React from 'react';
import '../styles/nav-tabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1>
        Brian Wiley <br />
        Profile and Portfolio
      </h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
