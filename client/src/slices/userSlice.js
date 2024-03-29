import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {
			token: localStorage.getItem('token') || null,
			expiresAt: localStorage.getItem('expiresAt') || null,
			userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
			isAuthenticated:
				localStorage.getItem('expiresAt') !== null
					? new Date().getTime() / 1000 < localStorage.getItem('expiresAt')
					: false
		},
		userStashList: [],
		userPlanner: JSON.parse(localStorage.getItem('userPlanner')) || null
	},
	reducers: {
		login: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.user = action.payload;
		},
		logout: (state, action) => {
			state.user = action.payload;
		},
		setUserStashList: (state, action) => {
			state.userStashList = action.payload;
		},
		setUserInfo: (state, action) => {
			state.user.userInfo = action.payload;
		},
		setUserPlanner: (state, action) => {
			state.userPlanner = action.payload;
		}
	}
});

export const {
	login,
	logout,
	setUserStashList,
	setUserInfo,
	setUserPlanner
} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.user.value)`
export const selectUser = (state) => state.user.user;
export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserStashList = (state) => state.user.userStashList;
export const selectUserPlanner = (state) => state.user.userPlanner;

export default userSlice.reducer;
