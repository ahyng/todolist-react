import React, { useState, useEffect } from "react";
import TodoBoard from "./components/TodoBoard";
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todos') ? localStorage.getItem('todos') : []))
  const addItem = () => {
    if (inputValue == '') {
      alert('내용을 입력해 주세요.')
    } else {
      setTodoList([...todoList, {id: Date.now() ,value : inputValue}])
      setInputValue('')
    }
    
  }

  const deleteItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  useEffect(() => {
    // todoList가 변경될 때마다 localStorage를 업데이트
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <main>
      <form>
        <div className="inputBox">
          <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          <button onClick={addItem}>add</button>
        </div>
      </form>
      <TodoBoard todoList={todoList}  deleteItem = {deleteItem} />
    </main>
  );
}

export default App;
