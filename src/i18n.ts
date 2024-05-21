import { IntlErrorCode } from "next-intl";
import { getRequestConfig } from "next-intl/server";

export enum APP_LOCALE {
  DE = "de",
  EN = "en",
}

let currentLocale: string = APP_LOCALE.DE.toString();

export const APP_LOCALE_LIST = [APP_LOCALE.DE, APP_LOCALE.EN];

export default getRequestConfig(async () => {
  const locale = currentLocale;
  console.log("getRequestConfig", locale);

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error
        console.error(error);
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join(".");

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + " is not yet translated";
      } else {
        return "Dear developer, please fix this message: " + path;
      }
    },
  };
});
