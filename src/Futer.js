import { BsTelephoneInboundFill } from "react-icons/bs";
import { BsFillGeoFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


function Futer () {

    return(

<div>
        <div className="servised">
            <h3 >УДОБНОЕ МЕСТОРАСПОЛОЖЕНИЕ</h3>
        </div>

        <div className="futer">
            
            <div className="futer-block">
                <h2><BsTelephoneInboundFill /> Звоните по номеру </h2>
                <a className="fut"> 8(905)352-92-22 </a>
            </div>

            <div className="futer-block">
                <h2><BsFillGeoFill /> Мы находимся по адресу: </h2>
                <a className="fut"> Выборгское шоссе 313 корп 12 </a>
            </div>

            <div className="futer-block">
                <h2><MdEmail /> Электронная почта: </h2>
                <a className="fut" href=""> ArtMotors@gmail.ru </a>
            </div>

            
        </div>
        </div>     
    )
}
export default Futer;