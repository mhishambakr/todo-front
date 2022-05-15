import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Typography from "@material-ui/core/Typography";
import ListState from './context/list/ListState';
import { isAuthenticated } from './context/auth';
import Login from './components/Login';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './LoginTheme';

function App() {


  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }



  return isAuthenticated() ? (
    <div className="App">
      <ListState>
        <Typography style={{ padding: 16 }} variant="h3">
          My Todo List
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
        />
      </ListState>
    </div>
  ) : (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;
