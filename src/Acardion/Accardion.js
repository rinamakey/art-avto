import {AccardionItem} from'./AccardionItem';
import { List } from "./List";
import './Style.css';
import React, { useState} from "react";



export const Accardion = ( { title, content } ) => {

    const [OpenId, setOpenId] = useState(null);
  

   
    return(<ul className="accardion">

                {List.map((list,idx) => {

                        return(
                            <AccardionItem  key={ idx } onClick={()=>(idx === OpenId? setOpenId(null) : setOpenId(idx))}

                            list={list}

                            OpenId={ idx === OpenId }

                        />
                        )

                  
                })}
    </ul>

      
    )

}