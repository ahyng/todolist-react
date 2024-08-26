import React from "react";

function TodoItem({item, deleteItem}) {
    console.log('item:', item)
    return (
        <div className="todo-item">
            <span>{item.value}</span>
            <button onClick={() => deleteItem(item.id)}>삭제</button>
        </div>
    )
}

export default TodoItem