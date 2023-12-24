import { createSelector } from '@reduxjs/toolkit';
import { Store } from 'types/store';
import { tableDataNormalizer } from 'utils/table-data-normalizer';

export const devicesSelector = createSelector(
  (state: Store) => state.devices,
  ({isLoading, error, data}) => ({
    isLoading,
    error,
    data: tableDataNormalizer(data)
  })
);
