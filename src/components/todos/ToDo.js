import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { TodoAction } from "../../redux/actions"
import { Button, IconButton } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import '../../css/todo.css'
const Todo = ({ todo, index, completeTodo, removeTodo, updateToDo, editToDo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.isEdit ? <TodoForm
                addTodo={(value) => updateToDo(index, value)}
                initString={todo.text} > </TodoForm> :
                todo.text}
            <div>
                <IconButton>
                    <EditIcon onClick={() => editToDo(index)} />
                </IconButton>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => completeTodo(index)}>
                    Complete
                        </Button>
                <IconButton onClick={() => removeTodo(index)}>
                    <DeleteIcon fontSize="medium" onClick={() => removeTodo(index)} />
                </IconButton>
            </div>
        </div>
    );
}
const TodoForm = ({ addTodo, initString }) => {
    const [value, setValue] = useState(initString);
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}
function App() {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch();
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    editToDo={(index) => dispatch(TodoAction.Edit(index))}
                    updateToDo={(index, text) => dispatch(TodoAction.Update(index, text))}
                    completeTodo={(index) => dispatch(TodoAction.Complete(index))}
                    removeTodo={(index) => dispatch(TodoAction.Remove(index))}
                />))}
            <TodoForm addTodo={(text) => dispatch(TodoAction.Add(text))} initString="" />
        </div>
    );
}
export default App;