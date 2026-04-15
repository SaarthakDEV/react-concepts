import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice"
import userReducer from "./features/user/userSlice"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        user: userReducer
    },
})

export default store;