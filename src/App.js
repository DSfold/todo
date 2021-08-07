import './App.css';
import NewTodo from './components/NewTodo';
import  TodoItemsList  from './components/TodoItemsList';

function App() {
  return (
    <div className="App">
        <h1>Todo List</h1>
        <NewTodo/>
        <TodoItemsList/>
    </div>
  );
}

export default App;
