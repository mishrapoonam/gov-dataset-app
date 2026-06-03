import "./globals.css";
import type { Metadata } from "next";
import GovUkLayout from "@/components/DefaultLayout";

export const metadata: Metadata = {
  title: "ONS Datasets Explorer",
  description: "Senior Front End Developer Exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="govuk-template">
      <body className="govuk-template__body">
        <GovUkLayout>{children}</GovUkLayout>
      </body>
    </html>
  );
}