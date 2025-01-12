import quality from'./1.png';
import speed from'./2.png';
import avto from'./3.png';
import paralax from'./art-Av.jpeg';


function Forms() {

    return(
        <div>
        <div className="servised">
            <h3 >Наши преимущества</h3>
        </div>

        <div className="content">
            <div className="works">
                <div className='work'>
                    <img src={speed}alt="speed"className='s'/>
                    <h2> СКОРОСТЬ </h2>
                </div>
                <p className='ss'>Мы используем современное оборудование для ремонта и детейлинга вашего авто.</p>
            </div>


            <div className="works">
                <div className='work'>
                    <img src={quality} alt="quality"width="50px"className='s'/>
                    <h2> КАЧЕСТВО </h2>
                </div>
                <p className='ss'>Мы используем только оригинальы детали, краски и комлектующие от производителей вашего авто. </p>
            </div>



            <div className="works">
                <div className='work'>
                    <img src={avto}alt="avto"width="50px" className='s'/>
                    <h2>ВЫДАЧА АВТО </h2>
                </div>
                <p className='ss'>Сдаем в срок и без сбоев, если мы утвердили время, мы его не нарушаем.</p>
            </div>


            </div>
            
                <div className='paralax'>
                
            </div>

        </div>
    )
}
export default Forms;