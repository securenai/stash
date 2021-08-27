import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		currentStash: JSON.parse(localStorage.getItem('currentStash')) || {},
		currentTheme: localStorage.getItem('currentTheme') || 'DARK',
		bannerColor: JSON.parse(localStorage.getItem('bannerColor'))
	},
	reducers: {
		setAppInfo: (state, action) => {
			state.currentStash = action.payload.currentStash;
		},
		setAppTheme: (state, action) => {
			state.currentTheme = action.payload.currentTheme;
		},
		setBannerColor: (state, action) => {
			state.bannerColor = action.payload.bannerColor;
		}
	}
});

export const { setAppInfo, setAppTheme, setBannerColor } = appSlice.actions;

export const selectCurrentStash = (state) => state.app.currentStash;
export const selectCurrentTheme = (state) => state.app.currentTheme;
export const selectBannerColor = (state) => state.app.bannerColor;

export default appSlice.reducer;
