'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { usePathname } from 'next/navigation';
import { getMitarbeiterByIdRequestAction } from './store/MitarbeiterTypes';

export default function MitarbeiterPage() {
  const dispatch = useDispatch();
  const pathName = usePathname();

  const { mitarbeiter, error, isLoading } = useSelector(
    (state: RootState) => state.MITARBEITER_SLICE_NAME,
  );

  const id = Number(pathName?.toString().split('/').pop());

  useEffect(() => {
    if (!isNaN(id)) {
      dispatch(getMitarbeiterByIdRequestAction(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error}</span>;
  }

  return (
    <div className="placeholder">
      {mitarbeiter ? <div>Hi, I am {mitarbeiter.name}</div> : <span>No data</span>}
    </div>
  );
}
