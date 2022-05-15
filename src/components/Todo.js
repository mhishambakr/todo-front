import React, { useContext, useState } from 'react'
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import listContext from '../context/list/ListContext';

const Todo = ({ todo }) => {
    let [isDone, setIsDone] = useState(todo.isDone)
    const ListContext = useContext(listContext);
    function handleCheckboxClick(e) {
        console.log(isDone);
        ListContext.markItem({id:todo.id, isDone:!isDone})
        setIsDone(!isDone)
    }


    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox checked={isDone} onClick={handleCheckboxClick} />
            <Typography
                variant="body1"
                style={{
                    textDecoration: isDone ? "line-through" : null
                }}
            >
                {todo.text}
            </Typography>
        </ListItem>
    )
}

export default Todo