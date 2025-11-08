import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nurdaulet Orynbasarov",
  description: "My Web Developer Portfolio",
  metadataBase: new URL("https://nurda.vercel.app"),
  openGraph: {
    title: "Nurdaulet Orynbasarov",
    description: "My Web Developer Portfolio",
    url: "https://nurda.vercel.app/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script>
        {`try {
          const stored = localStorage.getItem('theme');
          const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (stored === 'dark' || (!stored && systemDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
        }
        } catch (_) {}`}
      </Script>

      <body
        className={`font-regular flex flex-col items-center justify-center scroll-smooth! ${merriweather.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
