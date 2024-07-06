import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}
export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
    
<Provider>

        {children}
</Provider>
     
        
        </body>
    </html>
  );
}
