import { Box } from '@mui/material';
import { DeviceList } from './device-list';
import { devicesTableConfig } from './table-config';
import { useDeviceListView } from './use-device-list-view';
import { UiTableLoader, UiCommonError, UiSearchBar } from 'ui';

export const DeviceListView = () => {
  const { data, loading, error, filter, setFilter } = useDeviceListView();

  const filteredData = () => {
    if (!data) return [];
    if (!filter) return data;
    return data.filter((item) => item.id?.toString() === filter);
  }

  if (error) return <UiCommonError />;
  
  return loading
  ? <UiTableLoader />
  : (
      <Box>
        <UiSearchBar value={filter} onChange={(e) => setFilter(e.target.value)} />
        <DeviceList config={devicesTableConfig} tableData={filteredData()} />
      </Box>
    );
};
