import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const changeTodo = (e) => {
    setTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    if (todo) {
      setList(list => [...list, '🚀 ' + todo]);
      setTodo('');
    }
  }

  return (
    <div className="App container">
      <div className="form">
        <form action="">
          <input
            type="text"
            name="todo"
            id="input"
            placeholder='Enter something to add....'
            value={todo}
            onChange={changeTodo}
            autoComplete='off'
          />
          <button
            type='submit'
            id="submit"
            onClick={addTodo}>ADD TODO</button>
        </form>
      </div>
      <div className="todos">
        <ul className="todo-items">
          {list.map((elem, index) => {
            return (
              <li key={index}>{elem.slice(0, 3) + elem.slice(3, 4).toUpperCase() + elem.slice(4)}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
