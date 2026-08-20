import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about me",
  description: "noone portfolio | about me | front-end developer for real",
};

export default function AboutMeLayout({ children }: LayoutProps<"/">) {
  return <>{children}</>;
}
