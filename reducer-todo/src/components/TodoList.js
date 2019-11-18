import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers'


import { TodoForm } from "./TodoForm";
import { Todo } from './Todo';

export const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    

    return (
        <>
        <TodoForm dispatch={dispatch}/>
        {/* <div>
            {console.log(state, "AHHH")}
           {state.map(todo => (
               <p>{todo.item}</p>
           ))}
        </div> */}
        <div>
            {state.map(item => (
                <Todo key={item.id} item={item} dispatch={dispatch}/>
            ))}
        </div>
        </>
    );
};

