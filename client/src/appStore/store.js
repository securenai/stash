// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';

// const serializableMiddleware = getDefaultMiddleware({
// 	serializableCheck: false
// });

export default configureStore({
	reducer: {
		user: userReducer
	} //,
	//middleware: serializableMiddleware
});
