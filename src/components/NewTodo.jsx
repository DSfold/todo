import React, { useState, useCallback } from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { Button } from "antd";
import { connect } from "react-redux";
import { showAlert } from "../store/alert/actions";
import { addTodo } from "../store/todo/actions";
import { Alert } from "antd";

const NewTodo = ({ showAlert, alert, addTodo }) => {
  const [title, setTitle] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const newTodoHandler = useCallback(() => {
    if (!title.trim()) {
      return showAlert("Title cannot be empty");
    }
    const newTodo = {
      title,
      id: Date.now().toString(),
    };
    addTodo(newTodo);
    setTitle("");
  }, [addTodo, showAlert, title]);

  return (
    <div className="addTodo">
      {alert && (
        <Alert
          message="Warning"
          description={alert}
          type="warning"
          showIcon
          closable
        />
      )}
      <Input
        placeholder="Todo title"
        id="title"
        value={title}
        onChange={titleHandler}
        style={{ width: "40%", margin: "15px" }}
      />
      <Button type="primary" onClick={newTodoHandler}>
        Add
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.alert.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
