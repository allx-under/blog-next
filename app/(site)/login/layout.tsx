import SectionContainer from "@/app/components/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SectionContainer>{children}</SectionContainer>;
}
