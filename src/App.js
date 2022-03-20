import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = (props) => {
  const [userDataArray, setUserDataArray] = useState([]);

  function userItemHandler(userData) {
    setUserDataArray((prevUserDataArray) => {
      return [...prevUserDataArray, userData];
    });
  }

  const deleteUserHandler = (userId) => {
    setUserDataArray((prevUserDataArray) => {
      const updatedUsers = prevUserDataArray.filter(
        (user) => user.id !== userId
      );
      return updatedUsers;
    });
  };

  return (
    <div style={{ backgroundColor: "#c7dde7" }}>
      <AddUser onSetUserData={userItemHandler} />
      <UsersList onDelete={deleteUserHandler} userData={userDataArray} />
    </div>
  );
};

export default App;
