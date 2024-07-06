
import LanguageChanger from "@/components/LanguageChanger";
import initTranslations from "../i18n";
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['home'];
export default async function Home({ params: { locale } }) {
  const { t, resources} = await initTranslations(locale, ['Home']);

  return (

    <TranslationsProvider
    namespaces={i18nNamespaces}
    locale={locale}
    resources={resources}>

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

     <h1>{t('hello')}</h1>
   
    </main>
    </TranslationsProvider>
 
  );
}
