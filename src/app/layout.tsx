import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
