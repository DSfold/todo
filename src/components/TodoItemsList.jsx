import React, { useMemo } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import SearchTodo from "./SearchTodo";

const TodoItemsList = ({ todos, search }) => {
  const filteredTodos = useMemo(
    () =>
      search ? todos.filter((el) => el.title.includes(search)) : [...todos],
    [todos, search]
  );

  if (!todos.length) {
    return <h3>Nothing here...</h3>;
  }
  return (
    <div>
      <SearchTodo />
      {filteredTodos
        .map((todo) => (
          <TodoItem title={todo.title} id={todo.id} key={todo.id} />
        ))
        .reverse()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    search: state.search.search,
  };
};

export default connect(mapStateToProps, null)(TodoItemsList);
