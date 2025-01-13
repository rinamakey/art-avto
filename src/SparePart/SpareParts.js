import parts from'./../main/parts.jpg'; 
import motor from'./../main/motor.jpg';


function SpareParts(){


    return(
        <div className="parts">
            <div className='partmot'>
                    <img className='motor' src={motor}alt="motor"/>
                    <img className='motors' src={parts}alt="motors"/>             
            </div>
           
            <div className='mot'>
                    <h2 className='motH'> Привезем автозапчасти из Европы <br/> на любой автомобиль за 2 недели</h2>
            
                    <p className='motp'>Из каких городов Европы TSM осуществляет перевозку автозапчастей</p>

                    <ul className='li'>
                        <li>Гетеборг в Швеции;</li>
                        <li>Ингольштадт в Германии;</li>
                        <li>Млада–Болеслав в Чехии;</li>
                        <li>Мюнхен в Баварии;</li>
                        <li>Рюссельсхайм в Германии;</li>
                        <li>Крю в Англии;</li>
                    </ul>

                    <a className="btnmot"> <button> Заказать </button> </a>
            </div>
                
        </div>
    )
}
export default SpareParts;