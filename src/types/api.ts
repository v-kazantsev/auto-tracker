import { AxiosResponse } from 'axios';
import { Device } from './models';

export interface IDevicesAPI {

  getAllDevices(ids?: Array<number>): Promise<AxiosResponse<Array<Device>>>;
  getDevice(id: number): Promise<AxiosResponse<Device>>;
  deleteDevice(id: number): Promise<AxiosResponse<string>>;
  addDevice(device: Device): Promise<AxiosResponse<Device>>;
};