import { GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { store } from 'storage/store';
import {openModal } from 'storage/slices/modal/actions';

type Props = {
  id: GridRowId;
  row: number;
}

export const tableDeleteAction = ({id, row}: Props) => {
  return (
  [<GridActionsCellItem
    icon={<DeleteIcon />}
    label="Delete"
    onClick={() => store.dispatch(openModal())}
  />]
)} ;
