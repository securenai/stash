import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		currentStash: JSON.parse(localStorage.getItem('currentStash')) || {},
		currentTheme: localStorage.getItem('currentTheme') || "DARK",
	},
	reducers: {
		setAppInfo: (state, action) => {
			state.currentStash = action.payload.currentStash;
		},
		setAppTheme: (state, action) => {
			state.currentTheme = action.payload.currentTheme;
		},
	}
});

export const { setAppInfo, setAppTheme } = appSlice.actions;

export const selectCurrentStash = (state) => state.app.currentStash;
export const selectCurrentTheme = (state) => state.app.currentTheme;

export default appSlice.reducer;
