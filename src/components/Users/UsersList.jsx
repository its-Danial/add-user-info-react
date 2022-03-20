import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ListGroup className={styles.usersList}>
      {props.userData.map((item) => {
        return (
          <ListGroup.Item key={Math.random()} action variant="light">
            {item.userName} age is {item.userAge}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default UsersList;
