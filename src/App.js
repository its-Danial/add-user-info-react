import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = (props) => {
  return (
    <div style={{ backgroundColor: "#b3caf8" }}>
      <AddUser />
      <UsersList />
    </div>
  );
};

export default App;
