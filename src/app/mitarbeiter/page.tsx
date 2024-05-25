'use client';

import { RootState } from '@/store/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <ul>
      {mitarbeiterUebersicht.map(mitarbeiter => (
        <li key={mitarbeiter.id}>
          <Link href={`/mitarbeiter/${mitarbeiter.id}`}>{mitarbeiter.name}</Link>
        </li>
      ))}
    </ul>
  );
}
