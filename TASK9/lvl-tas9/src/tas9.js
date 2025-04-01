import React from "react";
import { useState } from "react";

const InputFieldState = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <p>Input: {inputValue}</p>  
        </div>
    );
};    

export default InputFieldState;

