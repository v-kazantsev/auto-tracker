import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './state';

export const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('MODAL/OPEN', (state) => {
      state.open = true
    })
    .addCase('MODAL/CLOSE', (state) => {
      state.open = false
    })
})