import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo (state, action) {
            state.push(action.payload)
        },

        deleteTodo (state, action) {
            state.filter((todo) => todo.id !== action.payload)
        },

        editTodo (state, action) {
            state.forEach((todo) => {
                if (todo.name === action.payload.name) {
                    todo.items = action.payload.items;
                }
            })
        }
    }
});

export const {addTodo, deleteTodo, editTodo} = todoSlice.actions;

export const todosSelector = (state) => {
    return state.todos;
};

export default todoSlice.reducer;