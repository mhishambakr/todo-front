import React, { useContext, useEffect } from 'react'
import Todo from './Todo'
import listContext from '../context/list/ListContext';

const TodoList = ({ toggleComplete }) => {
    const ListContext = useContext(listContext);
  
    let { list } = ListContext;
  
    useEffect(() => {
      ListContext.getList()
      
    }, []);

    return (
        <ul>
            {list?.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    )
}

export default TodoList