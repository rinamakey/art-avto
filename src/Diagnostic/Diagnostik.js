import diagnost from'./../main/diagnost.jpg';
import advice from'./../main/advice.jpg';
import './../App.css';


function Diagnostik (){

    return(<div>
    
        <div className='stock'>
        
            <div  className='astock'>
                <img className="" src={diagnost}alt="foto"/>
                <h2 className='text'>Бесплатная компьютерная диагностика</h2>
                <a className='stockbtn'>Записаться</a>
            </div>


            <div className='astock'>
                <img className="" src={advice}alt="foto"/>
                <h2 className='text'>Бесплатная консультация</h2>
                <a className='stockbtn'>Записаться</a>
            </div>          
        </div>
        </div>
    )
}
export default Diagnostik;