import { createSlice } from '@reduxjs/toolkit';

const bankSlice = createSlice({
    name: 'bank', 
    initialState: { money:0, totalMoney: ''},
    reducers: {
        totalMoney: (state, action) => {
            state.totalMoney = action.payload

        },
        plus: (state, action) => {
            state.money += action.payload 
        },
        minus: (state, action) => {
            state.money -= action.payload;
        },
    },
});


export const {totalMoney, plus, minus } = bankSlice.actions;

export default bankSlice.reducer;