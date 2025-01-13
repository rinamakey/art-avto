
import Diagnostik from "../Diagnostic/Diagnostik";
import Slider from "../Slider/Slider";

function Sale(){

    return(
    <div>
  <div>
        <Slider/>
</div>
     
     
        <div >
            
            <h2 className="sale">Акции :</h2>

            <Diagnostik/>
            
        </div>

        <div className="futer">
        
        <div className="futer-block">
            <h2> График работы </h2>
            <a className="fut"> c 10:00 до 20:00</a>
        </div>


        <div className="futer-block">
            <h2> Мы находимся по адресу: </h2>
            <a className="fut"> Выборгское шоссе 313 корп 12 </a>
        </div>


        <div className="futer-block">
            <h2> Телефон</h2>
            <a className="fut" href="#"> 8(921) 354-65-89 </a>
        </div>

    </div>

</div>
    )
}
export default Sale;