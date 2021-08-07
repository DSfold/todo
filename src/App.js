import './App.css';
import NewTodo from './components/NewTodo';
import SearchTodo from './components/SearchTodo';
import  TodoItemsList  from './components/TodoItemsList';

function App() {
  return (
    <div className="App">
        <SearchTodo/>
        <h1>Todo List</h1>
        <NewTodo/>
        <TodoItemsList/>
    </div>
  );
}

export default App;
