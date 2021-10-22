import React, { ReactNode,HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    /** Provides a text for the button */
   children:ReactNode;

   /** which variant look would you like to use*/
   variant:'primary'|'secondary';
}

/** This is a special button*/
export const Button =({children,variant='primary',...props}:Props)=>{
    return(
        <button {...props} style={{backgroundColor:variant==='primary'?'blue':'grey', color:'white',border:'none',borderRadius:70,padding:6,cursor:'pointer'}}>
           {children}
        </button>
    )
}