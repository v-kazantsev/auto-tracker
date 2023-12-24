import { DeviceList } from './device-list';
import { devicesTableConfig } from './table-config';
import { useDeviceListView } from './use-device-list-view';
import { UiTableLoader, UiCommonError } from 'ui';

export const DeviceListView = () => {
  const { data, loading, error } = useDeviceListView();

  if (error) return <UiCommonError />;
  
  return loading ? <UiTableLoader /> : <DeviceList config={devicesTableConfig} tableData={data} />;
};
