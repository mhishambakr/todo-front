import React, { useContext, useState } from 'react'
import { Button, TextField } from "@material-ui/core";
import listContext from '../context/list/ListContext';

const TodoForm = ({ addTodo }) => {
    const ListContext = useContext(listContext);

    const [todo, setTodo] = useState({
        text: '',
        isDone: false
    });

    const handleInputChange = (e) => {
        setTodo({ ...todo, text: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.text.trim()) {
            addTodo({ ...todo })
            ListContext.addItem({ text: todo.text })
            setTodo({ ...todo, text: '' })
        }
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="text"
                type="text"
                name="text"
                value={todo.text}
                onChange={handleInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoForm