import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
});

export const metadata = {
  title: "Aurora Home Interiors",
  description: "Aurora Home Interiors is a boutique interior design studio specializing in modern, minimalistic, and luxury home transformations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1" >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
