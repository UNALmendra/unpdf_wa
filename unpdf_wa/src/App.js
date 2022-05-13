import './App.css';
import ParticlesBg from 'particles-bg';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";


export default function App() {
  let navigate = useNavigate();
  return (
    <div>
      <ParticlesBg type="circle" bg={true} />
      <div className='flex flex-row justify-content-center'>
        <div className='flex align-items-center full-height'>
          <Card className='flex'>
            <div  className='flex flex-column justify-content-center'>
              <img src='/unpdf.svg' alt='logo' className='landing-logo'/>
              <div className='flex flex-row justify-content-center'>
                <Button label="Log in" className='m-2' onClick={toLogin}/>
                <Button label="Sign in" className='m-2' onClick={toSignin}/>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div> 
  );

  function toSignin(){

  }
  
  function toLogin(){
    navigate("/login");
  }
  
}
