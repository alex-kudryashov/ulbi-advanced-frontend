import { createSlice } from '@reduxjs/toolkit';
import type { CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterSchema) => {
            state.value += 1;
        },
        decrement: (state: CounterSchema) => {
            state.value -= 1;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
} = counterSlice;
