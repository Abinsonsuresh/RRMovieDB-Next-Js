import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RRMovieDB",
  description: "RRMovieDB movie database",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <ThemeProvider>


    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning={true}>
      <Navbar/>
        {children}
      <Footer/>

        </body>
    </html>

      </ThemeProvider>
    </ReduxProvider>
  );
}
