import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		currentStash: JSON.parse(localStorage.getItem('currentStash')) || {},
		currentTheme: localStorage.getItem('currentTheme') || 'DARK'
		// currentImage: { src: '', viewerOn: false }
	},
	reducers: {
		setAppInfo: (state, action) => {
			state.currentStash = action.payload.currentStash;
		},
		setAppTheme: (state, action) => {
			state.currentTheme = action.payload.currentTheme;
		}
		// setImageViewer: (state, action) => {
		// 	state.currentImage = action.payload.currentImage;
		// }
	}
});

export const { setAppInfo, setAppTheme, setImageViewer } = appSlice.actions;

export const selectCurrentStash = (state) => state.app.currentStash;
export const selectCurrentTheme = (state) => state.app.currentTheme;
// export const selectCurrentImage = (state) => state.app.currentImage;

export default appSlice.reducer;
