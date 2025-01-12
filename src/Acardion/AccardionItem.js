import React, {  useRef } from "react";
import { FiChevronDown } from "react-icons/fi";


export const AccardionItem = ( {title, content, onClick , OpenId, list} ) => {

        const itemRef = useRef(null);


return(

        <li className="accardion-item">

                <button
                        className="accardion-header" 
                        onClick={ ()=> onClick()}> 
                                {list.title} 
                               <FiChevronDown className={`accardion-arrow ${OpenId?'active':''}`}/> 
                </button>

                        <div className="accardion-collaps"
                                style={
                                        OpenId ? {height: itemRef.current.scrollHeight} : {height: "0px"}
                        }>
                                <div className="accardion-body"ref={itemRef}>
                                                {list.content} 
                                </div>
                        </div>
        </li>
        );
}