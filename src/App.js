import './App.css';
import { Typography, Divide  } from 'antd';
import Filter from './components/Filter';
import TodoList from './components/TodoList';


const { Title } = Typography;


function App() {
  return (
    <div style={{
      width: 500,
      margin: '20px auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 20,
      boxShadow: '0 0 10px 4px #bfbfbf',
      borderRadius: 5,
      height: '90vh',
    }}>
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
