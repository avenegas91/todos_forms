import React, { useState } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

const ToDoList = () => {
    const [todos, setToDos] = useState([]);

    const create = newToDo => {
        setToDos(todos => [...todos, newToDo]);
    };

    const update = (id, updatedTask) => {
        setToDos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, task: updatedTask } : todo
            )
        );
    };

    const remove = id => {
        setToDos(todos => todos.filter(todo => todo.id !== id));
    };

    const toDoComponents = todos.map(todo => (
        <ToDo
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={update}
        />    
    ));

    return (
        <div>
            <NewToDoForm createToDo={create} />
            <ul>{toDoComponents}</ul>
        </div>
    );
}

export default ToDoList;