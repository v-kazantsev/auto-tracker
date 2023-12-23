import { DeviceList } from './device-list';
import { devicesTableConfig } from './table-config';
import { mockData } from './mock-data';

export const DeviceListView = () => {
  return (
    <DeviceList config={devicesTableConfig} tableData={mockData} />
  );
};
