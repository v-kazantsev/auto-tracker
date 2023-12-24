import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './state';

export const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('modal/open', (state) => {
      state.open = true
    })
    .addCase('modal/close', (state) => {
      state.open = false
    })
})