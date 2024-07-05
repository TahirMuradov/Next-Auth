
import initTranslations from "../i18n";


export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['Home']);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>{t('hello')}</h1>
   
    </main>
  );
}
