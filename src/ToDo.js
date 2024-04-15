import React, { useState } from "react";

function ToDo({ task = "default todo", id = "1", remove, update }) {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    };

    const handleChange = evt => {
        setEditTask(evt.target.value);
    };

    const handleDelete = () => remove(id);

    const handleUpdate = evt => {
        evt.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    };

    // DEFAULT
    let jsx = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>X_DELETE_X</button>
        </div>
    );

    // ToDo WHEN EDITING
    if (isEditing) {
        jsx = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text"
                    value={editTask}
                    onChange={handleChange}
                    />
                    <button>UPDATE</button>
                </form>
            </div>
        );
    }

    return jsx;
}

export default ToDo;