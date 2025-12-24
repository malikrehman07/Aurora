import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: {
    template: "%s | Aurora Home Interiors",
    default: "Aurora Home Interiors",
  },
  description: "Aurora Home Interiors is a boutique interior design studio specializing in modern, minimalistic, and luxury home transformations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1" >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
