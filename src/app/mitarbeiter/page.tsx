'use client';

import { RootState } from '@/store/store';
import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mitarbeiterUebersichtColumns } from './GridColDef';
import { getMitarbeiterUebersichtRequestAction } from './store/MitarbeiterUebersichtTypes';

export default function MitarbeiterUebersichtPage() {
  const dispatch = useDispatch();

  const { mitarbeiterUebersicht, error, isLoading } = useSelector(
    (state: RootState) => state.MITARBEITER_UEBERSICHT_SLICE_NAME,
  );

  useEffect(() => {
    dispatch(getMitarbeiterUebersichtRequestAction());
  }, [dispatch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error}</span>;
  }

  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12}>
        <ul>
          {mitarbeiterUebersicht.map(mitarbeiter => (
            <li key={mitarbeiter.id}>
              <Link href={`/mitarbeiter/${mitarbeiter.id}`}>{mitarbeiter.name}</Link>
            </li>
          ))}   
        </ul>
      </Grid> */}
      <Grid item xs={12}>
        {/* <AbcIcon /> */}
        <DataGrid
          rows={mitarbeiterUebersicht}
          columns={mitarbeiterUebersichtColumns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Grid>
    </Grid>
  );
}
