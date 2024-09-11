import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartReducer";
import createSagaMiddleware from 'redux-saga';
import UserReducer from "./redux/UserReducer";
import watchPostData from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
    reducer: {
        cart: CartReducer,
        user: UserReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)

});

sagaMiddleware.run(watchPostData);