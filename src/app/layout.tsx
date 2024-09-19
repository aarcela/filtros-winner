import type { Metadata } from "next";
import { Asap_Condensed } from "next/font/google";
const asap = Asap_Condensed({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
});
import "./globals.css";

export const metadata: Metadata = {
    title: "Filtros Winner",
    description: "Página de búsqueda de productos Winner",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={asap.className}>
            <body className="bg-white">{children}</body>
        </html>
    );
}
