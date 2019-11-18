export const initialState = [
  {
    item: "Item",
    completed: false,
    id: 1
  },
  {
    item: "Item 2",
    completed: false,
    id: 2
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [ ...state, {item: action.payload, completed: false, id: Date.now() }];
    case "TOGGLE_COMPLETE":
        return state.map(todo => {
            if (todo.id === action.payload) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo;
            }
        });
    case "CLEAR_COMPLETE":
        return state.filter(done => !done.completed)
    default:
      return state;
  }
};
