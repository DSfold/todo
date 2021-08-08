import './App.css';
import NewTodo from './components/NewTodo';
import  TodoItemsList  from './components/TodoItemsList';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
      <Header>
        <h1 style={{color:'white'}}>Todo List</h1>
      </Header>
      <Content>
        <NewTodo/>
      </Content>
      <Footer>
        <TodoItemsList/>
      </Footer>
    </Layout>  
    </div>
  );
}

export default App;
