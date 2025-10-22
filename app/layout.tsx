import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
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
  metadataBase: new URL("https://ornur.vercel.app"),
  openGraph: {
    title: "Nurdaulet Orynbasarov",
    description: "My Web Developer Portfolio",
    url: "https://ornur.vercel.app/opengraph-image.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col justify-center items-center font-regular scroll-smooth! ${merriweather.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
