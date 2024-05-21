"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { APP_LOCALE } from "@/i18n";

export default function Index() {
  const t = useTranslations("Index");

  const changeLanguage = (locale: APP_LOCALE) => {
    // setLocale(locale);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{t("title")}</h1>
        <Link href="/dashboard">Dashboard</Link>
        <br></br>
        <Link href="/test">test</Link>
        <br></br>
        <button onClick={() => changeLanguage(APP_LOCALE.DE)}>
          {t("german")}
        </button>
        <button onClick={() => changeLanguage(APP_LOCALE.EN)}>
          {t("english")}
        </button>
      </div>
    </main>
  );
}
