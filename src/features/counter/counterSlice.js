import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    count: 0,
    status: ""
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=> {
            state.count += 100;
            console.log("added by 100");
            state.status = "increased";
        },
        decrement: (state)=> {
            state.count -= 100;
            console.log("subtracted by 100");
            state.status = "decreased";
        }
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer