'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMitarbeiterByIdRequestAction } from './store/MitarbeiterType';
import { RootState } from '@/store/store';

export default function MitarbeiterUebersichtPage() {
  const { mitarbeiter, error, isLoading } = useSelector(
    (state: RootState) => state.MITARBEITER_SLICE_NAME,
  );

  const id = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMitarbeiterByIdRequestAction(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading || error === '' ? (
        <span>Loading...</span>
      ) : mitarbeiter ? (
        <div>Hi, I am {mitarbeiter.name}</div>
      ) : (
        <span>No user found!</span>
      )}
    </div>
  );
}
