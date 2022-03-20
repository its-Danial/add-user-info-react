import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../UI/Card.module.css";
import AlertModal from "../UI/AlertModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const [modalErrorTxt, setModalErrorTxt] = useState("");

  const [userData, setUserData] = useState([{}]);

  const handleUserNameSubmit = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };
  const handleUserAgeSubmit = (event) => {
    console.log(event.target.value);
    setUserAge(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setModalErrorTxt("Input cannot be empty");
      setModalShow(true);
      return;
    }
    if (+userAge < 1) {
      console.log("Age cannot be negative");
      setModalErrorTxt("Age cannot be negative");
      setModalShow(true);
      return;
    }
    setUserData({
      userName: userName,
      userAge: userAge,
    });

    console.log(userData);
    setUserName("");
    setUserAge("");
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={handleFormSubmit}>
        <ListGroup variant="flush">
          <Card.Header>
            <label htmlFor="userName">User Name</label>
          </Card.Header>
          <input
            onChange={handleUserNameSubmit}
            id="userName"
            type="text"
            value={userName}
          />
          <Card.Header>
            <label htmlFor="userAge">User Age</label>
          </Card.Header>
          <input
            onChange={handleUserAgeSubmit}
            id="userAge"
            type="number"
            value={userAge}
          />
          <Button className={styles.button} type="submit" variant="primary">
            Add User
          </Button>
        </ListGroup>
      </form>
      <AlertModal
        errorText={modalErrorTxt}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
};

export default AddUser;
