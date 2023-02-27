import './App.css';
import {useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {v4 as uuid} from "uuid";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Sleep',
            status: true
        },
        {
            id: 2,
            title: 'Work',
            status: true
        },
        {
            id: 3,
            title: 'Read',
            status: false
        },
    ]);

    //console.log(todos)
    const addTodo = () => {
        if (todo !== "") {
            setTodos(
                [...todos, {
                    id: uuid(),
                    title: todo,
                    status: true,
                }
                ]);
            setTodo("")
        }
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    const doneTodo = (id) => {
        const newTodos = todos.filter(todo => {
            if (todo.id == id) {
                todo.status = !todo.status;
            }
            return todos;
        })
        setTodos(newTodos);
    }

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
            <TodoList list={todos} remove={deleteTodo} done={doneTodo}/>
        </div>
    );
}

export default App;
