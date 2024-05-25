'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMitarbeiterByIdRequestAction } from './store/MitarbeiterType';
import { RootState } from '@/store/store';
import { useRouter } from 'next/router';

export default function MitarbeiterPage() {
  const router = useRouter();
  const id = Number(router.query.id);
  const { mitarbeiter, error, isLoading } = useSelector(
    (state: RootState) => state.MITARBEITER_SLICE_NAME,
  );

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
