import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const Store = configureStore({

   reducer:{
    menu:menuSlice,

   }
}
)

export default Store;