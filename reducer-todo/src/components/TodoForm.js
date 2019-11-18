import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers'


export const TodoForm = ( {dispatch} ) => {
    const [todo, setTodo] = useState("");

    const handleChanges = e => {
        setTodo(e.target.value); 
    }

    const addTodo = e => {
        e.preventDefault();
        dispatch ({
            type: "ADD_TODO",
            payload: todo
        })
        setTodo('');
        {console.log(todo)}
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETE"
        })
    }

    return (
        <>
        <form onSubmit={addTodo}>
            <input
            type="text"
            name="todo"
            value={todo}
            onChange={handleChanges}
            />
            <button type="submit">
                ADD ITEM
            </button>
            <button onClick={clearCompleted}>
                Clear Complete
            </button>
        </form>
        </>
    );
};

