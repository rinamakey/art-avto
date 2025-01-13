import audi0001 from './main/audi0000.jpeg';
import NameAvto from './NameAvto/NameAvto';
import { data } from './Avto/data';
import Avto from './Avto/Avto';
import { useState } from 'react';
import Buttons from './Avto/Buttons';
import Forms from './Form/Forms';
import { Accardion } from './Acardion/Accardion';
import SpareParts from './SparePart/SpareParts';
import Aboutme from './About/Aboutme';
import Whyus from './Whyus/Whyus';
import Layba from './Layba/Layba';
import Ad from './Ad/Ad';
import Footer from './Footer';
import Application from './Application/Application';
import BtnDarkMode from './BtnDarkMode/BtnDarkMode';



function Home() {

    const [buyAvto,setBuyAvto] = useState(data);
    
    const [byFoto, setByFoto] = useState();
  

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

          <Footer/>

      </div>
      </div>
    );
  }
  
  export default Home;
  