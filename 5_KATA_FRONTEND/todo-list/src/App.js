import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList'
function App() {
  return (
    <div className="App">
      <h2>Lista de pendientes</h2>
      <TodoList />
    </div>
  );
}

export default App;
