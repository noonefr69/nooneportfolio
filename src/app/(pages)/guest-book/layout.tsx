import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "guestbook",
  description: "noone portfolio | guestbook | create digital foot print hahaha",
};

export default function GuestbookLayout({ children }: LayoutProps<"/">) {
  return <>{children}</>;
}
