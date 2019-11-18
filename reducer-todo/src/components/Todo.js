import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";
import { isTypeParameter } from "@babel/types";

export const Todo = ({ item, dispatch }) => {

  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: item.id
    });
  };

  const clearCompleted = () => {
      dispatch({
          type: "CLEAR_COMPLETE",
          payload: item.id
      })
  }

  return (
    <>
      <div
        className={`item${item.completed ? " completed" : ""}`}
        onClick={toggleCompleted}
      >
        <p>{item.item}</p>
      </div>
    </>
  );
};
