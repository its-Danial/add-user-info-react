import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = (props) => {
  const [userDataArray, setUserDataArray] = useState([]);

  function userItemHandler(userData) {
    setUserDataArray((prevUserDataArray) => {
      return [...prevUserDataArray, userData];
    });
    console.log(userDataArray);
  }

  return (
    <div style={{ backgroundColor: "#b3caf8" }}>
      <AddUser onSetUserData={userItemHandler} />
      <UsersList userData={userDataArray} />
    </div>
  );
};

export default App;
