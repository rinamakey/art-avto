import audi from'./audi.jpg';
import audi_2 from'./2audi.jpg';
import audi_3 from'./3audi.jpg';
import audi_4 from'./4audi.jpg';
import audi_5 from'./5audi.jpg';
import audi_6 from'./6audi.jpg';
import porsh_1 from'./1.jpg';
import porsh_2 from'./2.jpg';
import porsh_3 from'./3.jpg';
import porsh_4 from'./4.jpg';
import porsh_5 from'./5.jpg';
import porsh_6 from'./6.jpg';
import blue from'./1blue.jpg';
import blue_2 from'./2blue.jpg';
import blue_3 from'./3blue.jpg';
import blue_4 from'./4blue.jpg';
import blue_5 from'./5blue.jpg';
import blue_6 from'./6blue.jpg';
import green from'./1green.jpg';
import green_2 from'./2green.jpg';
import green_3 from'./3green.jpg';
import green_4 from'./4green.jpg';
import green_5 from'./5green.jpg';
import green_6 from'./6green.jpg';
import { useState } from 'react';
import './StyleAd.css';





function Ad() {


    const[openFoto,setOpenFoto]= useState('porsh');

const clickFoto = () => {
console.log('hiiiii')
    setOpenFoto((currentvalue)=>{

    })
}
    
    return(


<div className='contcar'>
 
    <div className='content-contcar'>
        <h3 className='name'>Art&Motors</h3>
        <p className='ap'>Автосервис специализации VAG группа, BMW, MERCEDES BENZ</p>
    </div> 

    <div className='box-contcar'>

        <div className='box'>
            <a href='#' className='overlay-img'>
                <img src={porsh_1} />

                <div className='overlay'></div>
                
                <div className='box-content'>
                    <h3 className='title'>Art&Motors</h3>
                    <h4 className='subtitle'> Автосервис премиум класса</h4>
                </div>
            </a>
        </div>
        <div className='box'>
            <a href='#' className='overlay-img'>
                <img src={ porsh_2 } />
                <div className='overlay'></div>

                <div className='box-content'>
                    <h3 className='title'>Надежность</h3>
                    <h4 className='subtitle'>Качество</h4>
                    <h4 className='subtitle'> Опыт работы более 15 лет</h4>
                </div>
            </a>    
        </div>


        <div className='box'>
            <a href='#' className='overlay-img'>
                <img src={ porsh_3 } />
                <div className='overlay'></div>

                <div className='box-content'>
                    <h3 className='title'>Все виды работ</h3>
                    <h4 className='subtitle'>от планового ТО до ремонта ДВИГАТЕЛЯ</h4>
                </div>
            </a>  
        </div>


        <div className='box'>
            <a href='#' className='overlay-img'>
                <img src={ porsh_4 } />
                
                <div className='overlay'></div>

                <div className='box-content'>
                    <h4 className='title'>Качественные запчасти</h4>
                    <h4 className='subtitle'> а так же контрактные запчасти из Европы</h4>
                </div>
            </a> 
        </div>


        <div className='box'>
            <a href='#' className='overlay-img'>
                <img src={ porsh_5 } />

                <div className='overlay'></div>

                <div className='box-content'>
                    <h3 className='title'>Art&Motors</h3>
                    <h4 className='subtitle'>Все на высшем уровне</h4>
                    <p>С нами самые лучшие клиенты</p>
                </div>
            </a> 
        </div>

        
        <div className='box'>
            <a href='#' className='overlay-img'>
                <img src={ porsh_6 } />

                <div className='overlay'></div>

                <div className='box-content'>
                    <h3 className='title'>Контакты:</h3>
                    <h4 className='subtitle'> 8(911)006-20-22</h4>
                    <h4 className='subtitle'>8(952)391-92-22</h4>
                </div>
            </a> 
        </div>
    </div>
</div>

    )
}
export default Ad;