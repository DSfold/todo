import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Card, Input } from "antd";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../store/todo/actions";
import { Button } from "antd";
import "antd/dist/antd.css";
import { useCallback } from "react";
import { Row, Col } from "antd";

const TodoItem = ({ id, title, editTodo, deleteTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [actualTitle, setActualTitle] = useState("");
  useEffect(() => {
    setActualTitle(title);
  }, [title]);

  const activateEditMode = useCallback(() => {
    setEditMode(true);
  }, []);

  const handleChange = useCallback((e) => {
    setActualTitle(e.target.value);
  }, []);

  const deactivateEditMode = useCallback(() => {
    setEditMode(false);
    editTodo(id, actualTitle);
  }, [id, actualTitle, editTodo]);

  const handleDelete = useCallback(() => {
    deleteTodo(id);
  }, [deleteTodo, id]);

  return (
    <div>
      <Card
        id={id}
        style={{ width: "45%", margin: "auto", marginBottom: "5px" }}
      >
        <Row>
          <Col span={6} push={0}>
            {!editMode && (
              <span
                onDoubleClick={activateEditMode}
                style={{ fontWeight: "bold", fontSize: "140%" }}
              >
                <div>{actualTitle}</div>
                <div
                  style={{
                    fontWeight: "lighter",
                    color: "#c9c9c9",
                    fontSize: "60%",
                    fontStyle: "oblique",
                    marginTop: "2px",
                  }}
                >
                  double click to edit
                </div>
              </span>
            )}
            {editMode && (
              <Input
                autoFocus={true}
                onChange={handleChange}
                onBlur={deactivateEditMode}
                style={{
                  width: "250%",
                  fontWeight: "bold",
                  fontSize: "140%",
                }}
                value={actualTitle}
              />
            )}
            {/* <div style></div> */}
          </Col>
          <Col span={18} push={6}>
            <Button type="primary" danger onClick={handleDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const mapDispatchToProps = {
  deleteTodo,
  editTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
