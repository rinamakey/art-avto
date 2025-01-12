import { BsTelephoneInboundFill } from "react-icons/bs";
import { BsFillGeoFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";



function Contact(){

    return(
        <div >
        <div >
            <h3 className="servised">УДОБНОЕ МЕСТОРАСПОЛОЖЕНИЕ</h3>
        </div>

        <div className="frame">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.544928189416!2d30.280660977067505!3d60.072341674982624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696353a1f6f023b%3A0xa09cf1027b00fc7!2z0JLRi9Cx0L7RgNCz0YHQutC-0LUg0YguLCAyMTIsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTQzNjI!5e0!3m2!1sru!2sru!4v1734428997339!5m2!1sru!2sru" width="100%" height="450"></iframe>
        </div>

        <div className="futer">

            <div  className="futer-block">
                <h2><BsTelephoneInboundFill /> Звоните по номеру </h2>
                <a className="fut">  8(905)352-92-22 </a>
            </div>

            <div  className="futer-block">
                <h2><BsFillGeoFill /> Мы находимся по адресу: </h2>
                <a className="fut"> Выборгское шоссе 313 корп 12 </a>
            </div>

            <div  className="futer-block">
                <h2><MdEmail /> Электронная почта: </h2>
                <a className="fut" >  ArtMotors@gmail.ru </a>
            </div> 
            
        </div>
        </div>  
    )
}
export default Contact;