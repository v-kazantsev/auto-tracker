import { Device } from 'types/models';

export type DevicesState = {
  devices: {
    data: Array<Device>,
    isLoading?: boolean,
    error?: string
  }
}