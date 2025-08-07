import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-great-vibes', // CSS Variable
});

export const metadata = {
  title: "A Special Surprise ❤️",
  description: "Just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Add the font variable to the body */}
      <body className={`${inter.className} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}