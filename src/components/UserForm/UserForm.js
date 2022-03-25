import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [enteredNameValue, setNameValue] = useState("");
  const [enteredAgeValue, setAgeValue] = useState("");

  const nameChangeHandler = (nameData) => {
    setNameValue(nameData.target.value);
  };

  const ageChangeHandler = (ageData) => {
    setAgeValue(ageData.target.value);
  };

  const submitHandler = (data) => {
    data.preventDefault();
    const userdata = {
      id: Math.random().toString(),
      name: enteredNameValue,
      age: enteredAgeValue,
    };
    
    if (enteredNameValue === "" && enteredAgeValue === "") {
      console.log("Please enter correct fields");
    } else {
      props.onFormData(userdata);
      setNameValue("");
      setAgeValue("");
    }
  };

  return (
    <form className="formStyle" onSubmit={submitHandler}>
      <div>
        <div>UserName </div>
        <input
          type="text"
          value={enteredNameValue}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <div>Age (Year) </div>
        <input
          type="number"
          value={enteredAgeValue}
          onChange={ageChangeHandler}
        />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
export default UserForm;
