import { Device } from 'types/models';
import { dateFromIsoString } from 'utils/format-date';

export const tableDataNormalizer = (rawDeviceList: Array<Device>) => {
  if (!rawDeviceList || !Array.isArray(rawDeviceList)) return [];
  return rawDeviceList.map((device) => ({
    id: device?.id, name: device?.name, uniqueId: device?.uniqueId, status: device?.status, lastUpdate: dateFromIsoString(device?.lastUpdate)
  }));
};
