'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { usePathname } from 'next/navigation';
import { getMitarbeiterByIdRequestAction } from '../store/MitarbeiterType';

export default function MitarbeiterPage() {
  const pathName = usePathname();
  const id = Number(pathName?.toString().split('/').pop());

  const { mitarbeiter, error, isLoading } = useSelector(
    (state: RootState) => state.MITARBEITER_SLICE_NAME,
  );

  const dispatch = useDispatch();

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
