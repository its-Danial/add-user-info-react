import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ListGroup className={styles.usersList}>
      <ListGroup.Item action variant="light">
        Cras justo odio
      </ListGroup.Item>
    </ListGroup>
  );
};

export default UsersList;
