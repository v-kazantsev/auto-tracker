import { createSelector } from '@reduxjs/toolkit';
import { DevicesState } from 'types/store';
import { tableDataNormalizer } from 'utils/table-data-normalizer';

export const devicesSelector = createSelector(
  (state: DevicesState) => state.devices as any,
  ({isLoading, error, data}) => ({
    isLoading,
    error,
    data: tableDataNormalizer(data)
  })
);
