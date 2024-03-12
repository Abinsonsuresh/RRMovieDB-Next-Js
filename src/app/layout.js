import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RRMovieDB",
  description: "RRMovieDB movie database",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

    </ReduxProvider>
  );
}
