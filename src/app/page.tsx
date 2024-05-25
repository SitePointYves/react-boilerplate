'use client';

import { useTranslation } from 'react-i18next';
import styles from './page.module.css';
import Link from 'next/link';
import i18n from './18n';
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function Index() {
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{t('Index.title')}</h1>
        <Link href="/dashboard">Dashboard</Link>
        <br></br>
        <Link href="/test">Test</Link>
        <br></br>
        <Link href="/users">Users</Link>
        <br></br>
        <Link href="/mitarbeiter">Mitarbeiter</Link>
        {/* <AlternateEmailIcon /> */}
        <br></br>
        <button onClick={() => changeLanguage('de')}>{t('Index.german')}</button>
        <button onClick={() => changeLanguage('en')}>{t('Index.english')}</button>
      </div>
    </main>
  );
}
