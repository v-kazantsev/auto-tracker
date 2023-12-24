import { useSelector } from 'react-redux';
import { DeviceList } from './device-list';
import { devicesTableConfig } from './table-config';
import { mockData } from './mock-data';
import { devicesSelector } from 'storage/slices/devices/selectors';

export const DeviceListView = () => {
  const devices = useSelector(devicesSelector);
  console.log('DEVICES', devices)
  return (
    <DeviceList config={devicesTableConfig} tableData={mockData} />
  );
};
