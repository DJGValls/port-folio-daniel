import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import CustomNavbar from "@/components/navbar/CustomNavbar";
import CustomFooter from "@/components/footer/CustomFooter";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const title = "Daniel Jiménez Gallego - Desarrollador y Programador Web";
const description =
    "Daniel Jiménez Gallego es un programador y desarrollador web que crea aplicaciones y experiencias digitales para la web.";

export const viewport: Viewport = {
    themeColor: "#0e1015",
    colorScheme: "dark",
};

export const metadata: Metadata = {
    title,
    description,
    keywords: ["Programador", "Desarrollador", "Daniel Jiménez Gallego", "Web", "Full-Stack", "FullStack"],
    metadataBase: new URL("https://www.DanielJiGa.dev"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        locale: "es",
        images: "/og.png",
        siteName: title,
        type: "website",
        title,
        description,
        url: "/",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: "/og.png",
    },
};

export const locales = ['cat', 'es', 'en'];

export function generateStaticParams() {
    return locales.map((locale) => ({ lang: locale }));
}

async function getMessages(locale: string) {
    try {
        return (await import(`@/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export default async function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    if (!locales.includes(lang)) notFound();

    const messages = await getMessages(lang);
    return (
        <html lang={lang} className="scroll-smooth">
            <body className={inter.className}>
                <NextIntlClientProvider locale={lang} messages={messages}>
                    <CustomNavbar lang={lang}/>
                    <div className="pt-[100px] pb-[100px]">{children}</div>
                    <CustomFooter />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
