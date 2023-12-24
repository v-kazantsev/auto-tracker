import { GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { store } from 'storage/store';
import { deleteDeviceRoutine } from 'storage/slices/devices/actions';
import { Action } from '@reduxjs/toolkit';

type Props = {
  id: GridRowId;
  row?: number;
}

export const tableRowDeleteAction = ({ id }: Props) => {
  return (
  [<GridActionsCellItem
    icon={<DeleteIcon color='error' />}
    label="Delete"
    onClick={() => store.dispatch<Action<any>>(deleteDeviceRoutine(id))}
  />]
)} ;
