import type { Metadata } from "next";
import { Roboto } from "next/font/google";
const arimo = Roboto({
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
        <html lang="en" className={arimo.className}>
            <body>{children}</body>
        </html>
    );
}
