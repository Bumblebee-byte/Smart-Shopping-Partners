import type { Metadata } from "next";
import "./globals.css";
// Adjust this import path if your Header is located somewhere else
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
    title: "Smart Shopping - India's Premier Retail Growth Partner",
    description: "Premium retail careers, brand portfolio, and store locations.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
            {children}
        </main>
        </body>
        </html>
    );
}