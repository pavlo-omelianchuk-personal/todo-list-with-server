import './App.css';
import { TodoListContainer } from './components';

function App() {
  return (
    <div className="App">
      <div className='flex justify-center items-center flex-col font-mono'>
        <TodoListContainer />
      </div>
    </div>
  );
}

export default App;
