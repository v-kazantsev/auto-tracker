import { GridColDef } from '@mui/x-data-grid';

export const devicesTableConfig: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Название', width: 180 },
  { field: 'uniqueId', headerName: 'Идентификатор', width: 150 },
  { field: 'status', headerName: 'Статус', width: 130 },
  { field: 'lastUpdate', headerName: 'Обновлено', width: 160 },
];
