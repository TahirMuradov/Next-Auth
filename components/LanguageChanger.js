'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

export default function LanguageChanger() {
  debugger;
  const {i18n} = useTranslation()
  const currentLocale = i18n.language;

  const router = useRouter();
  const currentPathname = usePathname();
console.log(document.cookie)
  const handleChange = e => {
    debugger;
    const newLocale = e.target.value;
console.log(newLocale)
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
console.log(`cookie->${document.cookie.valueOf()}` )
    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
console.log(currentPathname)
    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="az">az</option>
      <option value="en">en</option>
      <option value="ru">ru</option>
    </select>
  );
}