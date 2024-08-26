import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({todoList, deleteItem}) {
    return (
    <div>
        <h1>Todo List</h1>
        {todoList.map((item) => 
            <TodoItem item={item} key={item.id} deleteItem={deleteItem} />
        )}
    </div>
    )
}

export default TodoBoard