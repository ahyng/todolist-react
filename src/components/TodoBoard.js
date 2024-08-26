import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({todoList, deleteItem}) {
    return (
    <div className="todoBoard">
        <h1>Todo List</h1>
        {todoList.length === 0 ?
        <div>
            <p>할 일을 입력해 주세요.</p>
        </div> :
        <div className="todoListBox">
            {todoList.map((item) => 
                <TodoItem item={item} key={item.id} deleteItem={deleteItem} />
            )}
        </div>
        }
    </div>
    )
}

export default TodoBoard