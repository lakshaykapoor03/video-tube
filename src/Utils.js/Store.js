import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import suggestionSlice from "./suggestionSlice";

const Store = configureStore({

   reducer:{
    menu:menuSlice,
    suggestion: suggestionSlice,

   }
}
)

export default Store;