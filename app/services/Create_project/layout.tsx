import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CREATE",
  description: "DEV-CONNECT",
};

export default function ProjectsLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <section>{children}</section>
  );
}