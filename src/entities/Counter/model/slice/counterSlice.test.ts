import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        // работает за счет наличия initialState
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
