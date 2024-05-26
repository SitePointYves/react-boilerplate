import { GridColDef, GridTreeNodeWithRender, GridValueGetterParams } from '@mui/x-data-grid';
import { MitarbeiterStateType } from './[id]/store/MitarbeiterTypes';

export const mitarbeiterUebersichtColumns: GridColDef<MitarbeiterStateType>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (
      params: GridValueGetterParams<MitarbeiterStateType, any, GridTreeNodeWithRender>,
    ) => `${params?.row?.name || ''} ${params?.row?.id || ''}`,
  },
];
