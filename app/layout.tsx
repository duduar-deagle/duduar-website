import "@styles/globals.css";
import { Imprima, Lexend } from "next/font/google";
import clsx from "clsx";

const defaultFont = Imprima({
  variable: "--font-default",
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});

const headerFont = Lexend({
  variable: "--font-header",
  weight: "800",
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-419"
      className={clsx(
        defaultFont.variable,
        headerFont.variable,
        "snap-mandatory snap-y scroll-smooth select-none"
      )}
    >
      <body className="px-8 text-xs text-neutralWhite bg-carbon">
        {children}
      </body>
    </html>
  );
}
