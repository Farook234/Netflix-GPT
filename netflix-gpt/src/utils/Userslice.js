import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name : "user",
    initialState :null,
    reducers : {
        adduser : (state, action) => {
            return action.payload;
        },
        removeUser : (state, action) =>{
            return null;
        },
    },
});

export const { adduser, removeUser} = userslice.actions;

export default userslice.reducer;