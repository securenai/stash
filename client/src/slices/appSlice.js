import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		currentStash: JSON.parse(localStorage.getItem('currentStash')) || {},
		currentTheme: localStorage.getItem('currentTheme') || 'DARK',
		bannerColor: JSON.parse(localStorage.getItem('bannerColor')),
		sideBarClosed: JSON.parse(localStorage.getItem('sideBarClosed')) || false
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
		},
		setSideBarClosed: (state, action) => {
			state.sideBarClosed = action.payload.sideBarClosed;
		}
	}
});

export const {
	setAppInfo,
	setAppTheme,
	setBannerColor,
	setSideBarClosed
} = appSlice.actions;

export const selectCurrentStash = (state) => state.app.currentStash;
export const selectCurrentTheme = (state) => state.app.currentTheme;
export const selectBannerColor = (state) => state.app.bannerColor;
export const selectSideBarClosed = (state) => state.app.sideBarClosed;

export default appSlice.reducer;
