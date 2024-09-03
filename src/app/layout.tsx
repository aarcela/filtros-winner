import type { Metadata } from "next";
import { Arimo } from "@next/font/google";
const arimo = Arimo({ subsets: ["latin"], weight: ["400", "700"] });
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
        <html lang="en">
            <body className={arimo.className}>{children}</body>
        </html>
    );
}
