import { configureStore} from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import goalsReducer from "./reducers/goalsSlice";

export default configureStore({
    reducer: {
        todos:todoReducer,
        goals:goalsReducer,
    }
});