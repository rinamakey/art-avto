import {AccardionItem} from'./AccardionItem';
import { List } from "./List";
import './Style.css';
import React, { useState} from "react";



export const Accardion = ({title,content}) => {

    const [OpenId, setOpenId] = useState(null);
  

   
    return(<ul className="accardion">

                {List.map((list,id) => {

                        return(
                            <AccardionItem  onClick={()=>(id === OpenId? setOpenId(null) : setOpenId(id))}
                            list={list}
                            OpenId={ id === OpenId }
                            key={ id }/>
                        )

                  
                })}
    </ul>

      
    )

}