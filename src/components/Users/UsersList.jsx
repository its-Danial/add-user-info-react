import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const onClickHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <ListGroup className={styles.usersList}>
      {props.userData.map((item) => {
        return (
          <ListGroup.Item
            onClick={(e) => onClickHandler(item.id)}
            key={item.id}
            action
            variant="light"
          >
            {item.userName} (age is {item.userAge})
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default UsersList;
