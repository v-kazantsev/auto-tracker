import { GridActionsCellItem, GridRowId } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  id: GridRowId;
  row: number;
}

export const tableDeleteAction = ({id, row}: Props) => {
  return (
  [<GridActionsCellItem
    icon={<DeleteIcon />}
    label="Delete"
    onClick={() => console.log(id)}
  />]
)} ;
