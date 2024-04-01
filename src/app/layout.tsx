import type { Metadata } from "next";
import { Inter, Cardo, Cabin, Cinzel_Decorative } from "next/font/google";
import "../styles/globals.scss";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});
const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Carlos Vasquez-Zawadski",
  description: "Web app about books of author Carlos Vasquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="icon" href="/assets/images/mainLogo.svg" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body
        className={`${inter.className} ${cardo.className} ${cabin.className}`}
      >
        {children}
      </body>
    </html>
  );
}
