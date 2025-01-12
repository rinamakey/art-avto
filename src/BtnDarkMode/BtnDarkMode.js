import sun from'./sun.png';
import moon from'./moon.png';
import './styleDarkMode.css';
import { useEffect,useRef } from 'react';
import { useLocalStorage } from '../utils/UseLocalStorage';


const BtnDarkMode=()=>{


    const [darkMode, setDarkMode] = useLocalStorage('darkMode','ligth');
    const btnRef = useRef(null) ;


    useEffect(() => {
        
        if(darkMode === 'dark'){
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active');
        } 
        else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active');
        }

    }, [darkMode]);



    const toggleDarkMode=()=>{

        setDarkMode((currentvalue) => {

            return currentvalue ==='ligth'?'dark':'ligth'
        })
    };


    return(
        
        <button ref={btnRef}  className="dark-mode-btn dark-mode-btn--active"  onClick={toggleDarkMode} >

            <img className="dark-mode-btn_icon"
                src={sun}
                alt="ligth mode"
                width="22px"height="20px"/>

            <img className="dark-mode-btn_icon" 
                src={moon} 
                alt="Dark mode"
                width="22px"height="20px"/>

        </button>
    )
}
export default BtnDarkMode;