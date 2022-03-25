import React, { useState } from "react";
import UserDetails from "./components/UserDetails/UserDetails";
import UserForm from "./components/UserForm/UserForm";
import "./App.css";

const users = [];

function App() {
  const [newUserDetails, setUserDetails] = useState(users);

  const formdataPassing = (detail) => {
    setUserDetails((preuser) => {
      return [detail, ...preuser];
    });
  };

  return (
    <div className="main-class">
      <UserForm onFormData={formdataPassing} />
      <UserDetails data={newUserDetails} />
    </div>
  );
}

export default App;
