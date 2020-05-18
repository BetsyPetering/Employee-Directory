import React from "react";
import "./style.css";

function Buttons(props) {  
    return(
        <div>      
            <div className="butLast">
                <button onClick={() => props.sortLast(props.last)} className="sortlast">
                    Sort by Last Name
                </button>
            </div>
            <div className="butFirst">
                <button onClick={() => props.sortFirst(props.name)} className="sortfirst">
                    Sort by First Name
                </button>
            </div>
        </div>
    );
  }


export default Buttons;