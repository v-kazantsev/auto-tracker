import { GridColDef } from '@mui/x-data-grid';
import { DataTable } from 'components/data-table';

type Props = {
  config: Array<GridColDef>;
  tableData: Array<Record<any, any>>;
}


export const DeviceList = (props: Props) => (
  <DataTable {...props} />
);
