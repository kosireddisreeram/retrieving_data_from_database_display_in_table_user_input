import React, { useState } from "react";

function Form({onTable}) {
  const [formData, setFormData] = useState({
    // showPassword: false,
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    console.log(inputName);
    if (e.target.type === "checkbox") {
      console.log(e.target.value, e.target.checked);
      setFormData({
        ...formData,
        [inputName]: e.target.checked,
      });
    } else if (e.target.type === "file") {
      setFormData({
        ...formData,
        [inputName]: e.target.files[0].name,
      });
    } else {
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    }
  };
 
  const postTodo = async (value) => {
     console.log(value)
    try {
      let res = await fetch(`http://localhost:3000/form1`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          value,
         
        }),
      });
      let data = await res.json();
      onTable(data)
    
      //handleClick(data)
    } catch (e) {
      console.log(e);
    }
  };
 
  const haddleSubmit = (e) => {
    e.preventDefault();
    var value=formData
    if(value){
    postTodo(value)
    }
    
  };
  return (
    <form onSubmit={haddleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter YOUR NAME"
      />
      <br />
      <input
        type={formData.showPassword ? "text":"password"}
        name="password"
        placeholder="Enter PASSWORD"
        onChange={handleChange}
      />
      <br />
      <input type="checkbox" name="showPassword" onChange={handleChange} />I have a boat
      <br />
      <input
        type="number"
        name="Age"
        placeholder="Enter YOUR NAME"
        onChange={handleChange}
      />
      <br />
      <input
        type="date"
        id="birthday"
        name="birthday"
        onChange={handleChange}
      />
      <br />
      <br />
      <input type="file" name="file" onChange={handleChange} />
      <br />
      <br />
      <input type="submit" name="submit" />
    </form>
  );
}

export default Form;