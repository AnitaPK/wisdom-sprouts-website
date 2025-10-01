
import { Montserrat } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-phone-input-2/lib/style.css";
import '../styles/globals.css';
import BootstrapClient from './BootstrapClient';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: "Wisdom Sprouts It Training Hub",
  description: "Wisdom Sprouts It Training Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body  className={montserrat.variable}>
        <BootstrapClient />
         <Navbar />
         <main className="container-fluid p-0">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
