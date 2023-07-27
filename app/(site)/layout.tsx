import "./globals.css";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import MainContainerWithBg from "../components/MainContainerWithBg";
import Header from "../components/Header";
import AuthContext from "../context/AuthContext";
import ToasterContext from "../context/ToasterContext";

const inter = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <main>
            <MainContainerWithBg>
              <Header />
              {children}
            </MainContainerWithBg>
          </main>
        </AuthContext>
      </body>
    </html>
  );
}
