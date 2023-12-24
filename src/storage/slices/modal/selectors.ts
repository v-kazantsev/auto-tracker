import { createSelector } from '@reduxjs/toolkit';
import { Store } from 'types/store';

export const modalSelector = createSelector(
  (state: Store) => state.modal,
({ open }) => open
);
