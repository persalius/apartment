import { cookies } from "next/headers";
import { ThemeProvider } from "next-themes";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

const OG_VERSION = "2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const store = await cookies();
  const locale = store.get("locale")?.value || "ua";

  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: `/images/logo.png?v=${OG_VERSION}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: `/images/logo.png?v=${OG_VERSION}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    keywords: [
      "квартира",
      "оренда",
      "житло",
      "livehere",
      "оренда квартир",
      "Верхньодніпровськ",
      "квартира подобово",
      "квартира довгостроково",
      "оренда квартири Верхньодніпровськ",
      "оренда житла Верхньодніпровськ",
      "оренда квартири погодинно",
      "оренда квартири на місяць",
      "зняти квартиру",
      "зняти житло",
      "аренда",
      "жильё",
      "аренда квартир",
      "Верхнеднепровск",
      "квартира посуточно",
      "квартира долгосрочно",
      "аренда квартиры в Верхнеднепровске",
      "аренда жилья в Верхнеднепровске",
      "аренда квартиры почасово",
      "аренда квартиры на месяц",
      "снять квартиру",
      "снять жильё",
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <NextIntlClientProvider>
            <Header />
            <main className="max-w-7xl mx-auto px-4 overflow-x-hidden w-screen">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
