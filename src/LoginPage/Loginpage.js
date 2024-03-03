import React ,{ useState }from 'react';
import Logo from '../images/Logo.png';
import { useNavigate } from 'react-router-dom';
import './lp.css';

export default function Loginpage() {
  const [Values, SetValues] = useState({
    Mail: "",
    Password: "",
  });
  const navigate = useNavigate();
  
  const { Mail, Password} = Values;
  
    const onchange = (e) => {
      SetValues({ ...Values, [e.target.name]: [e.target.value] });
    };
  
    const sub = (e) => {
      e.preventDefault();
      console.log(Values);
      if(Mail == "bavith@gmail.com" && Password=="123")
      {
        navigate('/List')
      }
      else
      {
        alert("Invalid credentials. Please try again.");
      }
    };
  return (
    <div className='homepage'>
      <img  className="lg" style={{ top: '160px', left: '134px', width: '90px', height: '90px' }} src={Logo} alt="Description" />
      <p className='electric'>#We are Electric</p>
      <form  onSubmit={sub}>
        <input type="email" className="email" placeholder="E-MAIL" name="Mail" value={Mail} onChange={onchange}/>
        <input type="password" className="pass" placeholder="Password" name="Password" value={Password} onChange={onchange}/>
        <button type="submit" className='Login' >login</button>
      </form>
      <p className="forget" onClick={()=>{alert("Credentials: \n        Username : bavith@gmail.com  \n        password : 123")}}>Forgot Password?</p>
    </div>
  );
}

