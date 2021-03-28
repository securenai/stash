import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		currentStash: JSON.parse(localStorage.getItem('currentStash')) || {}
	},
	reducers: {
		setAppInfo: (state, action) => {
			state.currentStash = action.payload.currentStash;
		}
	}
});

export const { setAppInfo } = appSlice.actions;

export const selectCurrentStash = (state) => state.app.currentStash;

export default appSlice.reducer;
