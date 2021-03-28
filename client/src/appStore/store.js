// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import appReducer from '../slices/appSlice';

// const serializableMiddleware = getDefaultMiddleware({
// 	serializableCheck: false
// });

export default configureStore({
	reducer: {
		user: userReducer,
		app: appReducer
	} //,
	//middleware: serializableMiddleware
});
