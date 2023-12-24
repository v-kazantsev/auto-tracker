import { GridColDef } from '@mui/x-data-grid';
import { tableDeleteAction } from 'utils/table-delete-action';

export const devicesTableConfig: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Название', width: 180 },
  { field: 'uniqueId', headerName: 'Идентификатор', width: 150 },
  { field: 'status', headerName: 'Статус', width: 130 },
  { field: 'lastUpdate', headerName: 'Обновлено', width: 160 },
  { field: 'actions', type: 'actions', getActions: ({ row, id }) => tableDeleteAction({row, id}), width: 60}
];
