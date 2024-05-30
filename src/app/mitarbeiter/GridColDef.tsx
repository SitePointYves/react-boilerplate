import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import {
  GridCellParams,
  GridColDef,
  GridTreeNodeWithRender,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import Link from 'next/link';
import { MitarbeiterStateType } from './[id]/store/MitarbeiterTypes';

export const mitarbeiterUebersichtColumns: GridColDef<MitarbeiterStateType>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
    renderCell: (params: GridCellParams) => (
      <div data-testid={`name-cell-${params.row.id}`}>{params.row.name}</div>
    ),
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
  {
    field: 'link',
    headerName: 'Link',
    width: 150,
    renderCell: (params: GridCellParams) => (
      <Link
        href={`/mitarbeiter/${params.row.id}`}
        data-testid={`link-edit-button-${params.row.id}`}
      >
        <IconButton
          color="primary"
          aria-label="Edit Mitarbeiter"
          data-testid={`edit-button-${params.row.id}`}
        >
          <Edit />
        </IconButton>
      </Link>
    ),
  },
];
