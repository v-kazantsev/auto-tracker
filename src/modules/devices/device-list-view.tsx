import { Box } from '@mui/material';
import { DeviceList } from './device-list';
import { devicesTableConfig } from './table-config';
import { useDeviceListView } from './use-device-list-view';
import { UiTableLoader, UiCommonError, UiSearchBar, UiDialog } from 'ui';
import { COMMON_NO_RIGHTS } from 'config/constants';

export const DeviceListView = () => {
  const { data, loading, error, filter, setFilter, modalOpen, handleCloseModal } = useDeviceListView();

  const filteredData = () => {
    if (!data || !Array.isArray(data)) return [];
    if (!filter) return data;
    return data.filter((item) => item?.id?.toString() === filter);
  }

  if (error) return <UiCommonError />;
  
  return loading
  ? <UiTableLoader />
  : (
      <Box>
        <UiSearchBar value={filter} onChange={(e) => setFilter(e.target.value)} />
        <DeviceList config={devicesTableConfig} tableData={filteredData()} />
        <UiDialog open={modalOpen} onClick={handleCloseModal} title='ОШИБКА'>
          {COMMON_NO_RIGHTS}
        </UiDialog>
      </Box>
    );
};
