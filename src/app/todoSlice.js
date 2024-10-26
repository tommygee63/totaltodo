import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo (state, action) {
            state.append(action.payload)
        },

        deleteTodo (state, action) {
            state.filter((todo) => !todo.id === action.payload)
        }
    }
});

export const {addTodo, deleteTodo} = todos.actions;

export const todosSelector = (state) => {
    return state.todos;
}

export default todoSlice.reducer;