import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
	todos: [],
};

const todoReducer = createSlice({
	name: "todo",
	initialState,
	reducers: {
		fillValue(state, action) {
			state.value = action.payload;
		},
		add(state) {
			state.todos.push(state.value);
			state.value = "";
		},
		deleteTodo(state, action) {
			state.todos = state.todos.filter(
				(_todo, todoIndex) => todoIndex !== action.payload
			);
		},
	},
});

export const { fillValue, add, deleteTodo } = todoReducer.actions;
export default todoReducer.reducer;
