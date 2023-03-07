import React, {useState} from "react";



 export function FilterButton(props){
  //  setting the state of the filter button
  const[isPressed, setPressed]=useState(false);
    return(
        <button 
        type="button" 
        className="btn toggle-btn" 
        aria-pressed={isPressed}
        onClick={()=>props.setFilter(props.name)}>
          <span className="visually-hidden">Show </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    );
}
