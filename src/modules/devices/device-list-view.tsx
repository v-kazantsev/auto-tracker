import { Skeleton, Alert, AlertTitle } from '@mui/material';
import { DeviceList } from './device-list';
import { devicesTableConfig } from './table-config';
import { useDeviceListView } from './use-device-list-view';
import { COMMON_ERROR } from 'config/constants';

export const DeviceListView = () => {
  const { data, loading, error } = useDeviceListView();

  if (error) return (
    <Alert severity="error">
    <AlertTitle>Ошибка</AlertTitle>
      {COMMON_ERROR}
    </Alert>
  )
  
  return loading
  ? (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
    
  ) : (
    <DeviceList config={devicesTableConfig} tableData={data} />
  );
};
