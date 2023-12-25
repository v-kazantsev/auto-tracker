import { useMemo } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Add } from '@mui/icons-material';
import { DeviceList } from './device-list';
import { devicesTableConfig } from './table-config';
import { useDeviceListView } from './use-device-list-view';
import { UiTableLoader, UiCommonError, UiSearchBar, UiDialog } from 'ui';
import { COMMON_NO_RIGHTS } from 'config/constants';
import { ActionPanel } from 'components';

export const DeviceListView = () => {
  const { data, loading, error, filter, setFilter, modalOpen, handleCloseModal, handleOpenModal } = useDeviceListView();

  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    if (!filter) return data;
    return data.filter((item) => item?.id?.toString() === filter);
  }, [filter, data]);

  if (error) return <UiCommonError />;
  
  return loading
  ? <UiTableLoader />
  : (
      <Box>
        <ActionPanel
          items={[
            <UiSearchBar value={filter} onChange={(e) => setFilter(e.target.value)} />,
            <Tooltip title='Добавить' arrow color='primary'>
            <IconButton onClick={handleOpenModal}>
              <Add />
            </IconButton>
            </Tooltip>
          ]}
        />
        <DeviceList config={devicesTableConfig} tableData={filteredData} />
        <UiDialog open={modalOpen} onClick={handleCloseModal} title='ОШИБКА'>
          {COMMON_NO_RIGHTS}
        </UiDialog>
      </Box>
    );
};
