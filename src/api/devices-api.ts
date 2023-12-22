import { apiInstance } from 'api/api-instance';
import { IDevicesAPI } from 'types/api';

export const DevicesAPI: IDevicesAPI = {
  getAllDevices: () => apiInstance().get('devices'),
  getDevice: (id) => apiInstance().get(`devices/${id}`),
  deleteDevice: (id) => apiInstance().delete(`devices/${id}`),
  addDevice: (device) => apiInstance().post('devices', {data: device})
};
