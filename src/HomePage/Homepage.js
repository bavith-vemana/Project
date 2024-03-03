import React, { useEffect, useState } from 'react';
import './hp.css';
import { useLocation, useNavigate } from 'react-router-dom';
import moptro from '../images/moptro.png';
import person from '../images/person.png';
import call from '../images/call.png';
import Home from '../images/Home.png';

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [productivityDetails, setProductivityDetails] = useState(null);

  useEffect(() => {
    const { type, productivityDetails } = location.state || {}; 
    if (type === "access") {
      
      const storedProductivityDetails = localStorage.getItem('productivityDetails');
      if (storedProductivityDetails) {
        
        setProductivityDetails(JSON.parse(storedProductivityDetails));
        console.log("Productivity details retrieved from local storage:", productivityDetails);
      }
    } else if (type === "update") {
      
      setProductivityDetails(productivityDetails);
      localStorage.setItem('productivityDetails', JSON.stringify(productivityDetails));
      console.log("Productivity details updated in local storage:", productivityDetails);
    }
  }, []);

  return (
    <div className='home'>
      <img src={call} style={{ top: '19px', left: '293px', height: '41px' }} alt="Call" />
      <img src={moptro} alt="Moptro Logo" style={{ top: '104px', left: '145px' }} />

      <div className='details'>
        <div className='heading'>
          <p style={{ textAlign: "center" }}>Employee Productivity</p>

          {productivityDetails && Object.entries(productivityDetails).map(([day, productivity]) => (
            <div key={day}>
              <p className='day'> Productivity on {day}:<span>{productivity} %</span></p>
              <div className="bar" style={{ width: `${(productivity / 200) * 100}%` }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className='navigation'>
      <button className="hm" onClick={() => {}}>
          <img src={Home} alt="Home" />
        </button>
        <button className='person' onClick={() => { navigate('/List') }}>
          <img src={person} alt='person' />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
