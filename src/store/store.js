import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../features/meals/mealSlice";
export default configureStore({
  reducer: {
    meals: mealReducer,
  },
});
