import React, { useState } from "react";
const ToggleContent =()=> {
    const[isVissible,setVissible] = useState(false);
    return(
        <div>
            <button onClick={ () => setVissible(!isVissible)}>
                {isVissible ? "Hide":"show"} Content
            </button>                
                {isVissible && <div>This is the toggled content </div>}
            
        </div>
    )
}
export default ToggleContent  ;