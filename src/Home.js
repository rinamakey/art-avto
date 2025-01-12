
import audi0001 from './audi0000.jpeg';
import image from'./aud.bl.jpeg';
import NameAvto from './NameAvto';
import { data } from './data';
import Avto from './Avto';
import { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Forms from './Forms';
// import img from'./art-Av.jpeg';
import { Accardion } from './Acardion/Accardion';
import SpareParts from './SpareParts';
import Aboutme from './Aboutme';
import Whyus from './Whyus';
import Layba from './Layba';
import Ad from './Ad/Ad';
import Futer from './Futer';
import Application from './Application';
import images from'./11.jpeg';


// {isLoading ? <CardSkeleton /> : <img className='card' src={card} alt="Card" />}

function Home() {
 
  // const [stateLoader, setStateloader] = useState(true);
  


    const [buyAvto,setBuyAvto] = useState(data);
    
    const [byFoto, setByFoto] = useState();
  
  
//   useEffect(()=>{
//     const timer = setTimeout(()=>setStateloader(false),4000);
//  return()=>clearTimeout(timer)
//   },[])
  
 
    const productSelection =( searchTerm )=> {
      const newSelection = data.filter(element => element.searchTerm === searchTerm)
      setBuyAvto(newSelection);
    }
  

  
    return (<div>


  
    <div>
  
      <header className="App">
           <img className='avto' src={audi0001 }alt="avto"/> 
          <h1 className='name'>ART&MOTORS</h1>
      </header>
  
  
      
          <NameAvto/>
      
      <div className='servised'>
          <h3> Предлагаем вам наши услуги </h3>
          <p className='pp'> Специалисты автосервиса окажут профессиональную помощь в ремонте автомобиля любого производства </p>
      </div>
  
  
          <Buttons productSelection={productSelection} />
  
          <Avto  buyAvto={buyAvto}/>
         
          <Forms/>
  
  
        <div className='servised'>
              <h3>Часто задаваемые вопросы:</h3>
        </div>
  
          <Accardion  />
  
          <SpareParts/>
  
          <Aboutme/>
  
          <Layba/>
  
          <Whyus/>
          
          <Ad  /> 
          <Application/>
          <Futer/>
      </div>
      </div>
    );
  }
  
  export default Home;
  