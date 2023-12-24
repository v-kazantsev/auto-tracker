import { Device } from 'types/models';

export type State = {
  data: Array<Device>,
  isLoading?: boolean,
  error?: string
}

export const initialState: State = {
  data: [] as Array<Device>,
  isLoading: false,
  error: undefined
};
