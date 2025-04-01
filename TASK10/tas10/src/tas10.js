import React, { useState } from "react";
const FormSubmission = () => {
    const [formData,setFormData] = useState("");

    const handleChange = (event)=>{
        setFormData(event.target.value);
}
   const handleSubmit = (event)  => {
    event.preventDefault();
    console.log("Form  submitted with data",formData);
   }
   return(
    <div>
        <form onSubmit={handleSubmit}>
        <input 
                type="text"
                value={formData}
                onChange={handleChange}
                placeholder="Enter text..."
        />
          <button type="submit">Submit</button>
          </form>   
    </div>
   )
}
export default  FormSubmission