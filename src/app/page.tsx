'use client';

import ToggleLanguage from '@/components/ToggleLanguage';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './page.module.css';
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function Index() {
  const { t } = useTranslation();
  // Get environment variables
  // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  // const apiUrl = process.env.NEXT_PUBLIC_BACKEND_REST_MITARBEITER;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{t('Index.title')}</h1>

        <Link href="/dashboard">Dashboard</Link>
        <br></br>
        <Link href="/mitarbeiter">Mitarbeiter</Link>
        {/* <AlternateEmailIcon /> */}
        <br></br>
        <ToggleLanguage />
      </div>
    </main>
  );
}
