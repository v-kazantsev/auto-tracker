import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid';

type Props = {
  config: Array<GridColDef>;
  tableData: Array<Record<any, any>>;
} & Omit<DataGridProps, 'rows' | 'columns'>;

export const DataTable = ({ config, tableData, ...props }: Props) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={config}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        {...props}
      />
    </div>
  );
};
