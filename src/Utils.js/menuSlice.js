import { createSlice } from "@reduxjs/toolkit"


const menuSlice= createSlice({

name:"menuSlice",

initialState:{
    isMenuOpen:true
},

reducers:{
    toggleMenu:(state)=>{
        state.isMenuOpen= !state.isMenuOpen

    },
    closeMenu:(state)=>{
        state.isMenuOpen= false
    }
}
})

export const {toggleMenu, closeMenu} = menuSlice.actions;
export default menuSlice.reducer;