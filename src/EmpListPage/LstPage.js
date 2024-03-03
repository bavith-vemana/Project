import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './lst.css';
import moptro from '../images/moptro.png';
import Home from '../images/Home.png'
import person from '../images/person.png';
import call from '../images/call.png'
import employees from '../Data/employeesData'

function LstPage() {
  const [topPositions, setTopPositions] = useState([]);
  const [productivityDetails, setProductivityDetails] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    const calculateTopPositions = () => {
      let positions = [];
      let topPosition = 33; 
      if (employees.length !== 0) {
        for (let i = 0; i < employees.length; i++) {
          positions.push(topPosition);
          topPosition += 195; 
        }
        setTopPositions(positions);
      }
    };

    calculateTopPositions();
  }, [employees]);

  const handleEmployeeClick = (employee) => {
    setProductivityDetails(employee.Productivity);
    navigate('/home', { state: { productivityDetails: employee.Productivity, type: "update" } });
  };

  const renderEmployeeDetails = () => {
    const filteredEmployees = employees.filter(employee =>
      employee.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredEmployees.map((employee, index) => {
      const detailsStyle = {
        top: `${topPositions[index]}px`, 
        left: employee.Emp_ID % 2 === 1 ? '15px' : '30px',
        paddingLeft: employee.Emp_ID % 2 === 1 ? '20px' : '80px',
      };
      return (
        <div
          className='details'
          style={detailsStyle}
          key={index}
          onClick={() => handleEmployeeClick(employee)}
        >
          <p>Employee ID : {employee.Emp_ID}</p>
          <p>Employee    : {employee.Name}</p>
          <p>Role        : {employee.Role}</p>
          <p>DOB         : {employee.DOB}</p>
        </div>
      );
    });
  };

  return (
    <div className='lst'>
      <img
        src={call}
        style={{
          position: 'absolute',
          top: '19px',
          left: '293px',
          height: '41px',
        }} />
      <img
        src={moptro}
        alt="Moptro Logo"
        style={{
          position: 'absolute',
          top: '104px',
          left: '145px',
        }}
      />
      <input
        type="text"
        className='search'
        placeholder='Search with name'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className='empbox'>{renderEmployeeDetails()}</div>
      <div className='navigation'>
        <button className="hm" onClick={() => {
          console.log(productivityDetails);
          navigate('/home', { state: { productivityDetails: productivityDetails, type: "access" } })
        }}>
          <img src={Home} alt="Home" />
        </button>
        <button className='person' onClick={()=>{}} >
        <img src={person} alt='person'/>
      </button>
      </div>
    </div>
  );
}

export default LstPage;
