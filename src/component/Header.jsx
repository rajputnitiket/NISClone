import React from 'react';
import indianEmblem from '../image/indian-emblemm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import g20 from '../image/g20logo1.png'
import twitter from '../image/twitter1.png'
import Archive from './Archive';
import '../App.css';
import '../stellarnav.min.css'
import '../mycss.css';
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="row hdd_r">
        <div className="col-md-2">
          <div className="emb_m">
            <img src={indianEmblem} alt="Indian Emblem" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="right_hdr">
            <h3>न्यू इंडिया समाचार</h3>
            <h5>भारत का संकल्प</h5>
          </div>
        </div>
        <div className="col-md-3">
          <center>
            <a href="https://www.g20.in/en/g20-india-2023/logo-theme/" target="_blank" rel="noopener noreferrer">
              <img src={g20} style={{ width: '35%', backgroundColor: 'white', padding: '2px 10px', height: '80px' }} title="G20" alt="G20" />
            </a>
          </center>
        </div>
        <div className="col-md-2">
          <div className="nis_twitter">
            <a href="https://twitter.com/NISPIBIndia" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" /><span style={{ width: '20px', fontSize: '16px', color: 'white' }}>@NISPIBIndia</span>
            </a>
          </div>
        </div>
      </div>
      <div id="main-nav" className='stellarnav' style={{ fontSize: '110%' }}>
        <ul>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.7rem' }} />
            </NavLink>
          </li>
          <li>
            <NavLink to='./Archive'>
              Archive
            </NavLink>
          </li>
          <li>
            <NavLink to='./Default'>
              Default
            </NavLink>
          </li>
          <li>
            <a href="http://newindiasamachar.pib.gov.in/archive" target='_self'>
              Old Site
            </a>
          </li>
        </ul>
      </div>

    </>
  );
}

export default Header;
