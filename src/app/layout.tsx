import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import React from "react";
import LayoutPresenter from "@/interface-adapters/presenters/LayoutPresenter";
import {Providers} from "@/app/Providers";

const dancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "GetCake",
    description: "Like what you see ? Get it, Now!",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={dancingScript.variable}>
            <body className={`${dancingScript.variable} ${dancingScript.variable}`}>
                <Providers>
                    <LayoutPresenter>
                        {children}
                    </LayoutPresenter>
                </Providers>
            </body>
        </html>
    );
}
