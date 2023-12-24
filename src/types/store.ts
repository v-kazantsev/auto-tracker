import { Device } from 'types/models';

export type Store = {
  devices: {
    data: Array<Device>,
    isLoading?: boolean,
    error?: string
  },
  modal: {
    open: boolean;
  }
}