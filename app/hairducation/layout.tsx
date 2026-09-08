import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hairducation | Rooted By Confia",
  description: "An immersive learning space for understanding your hair and nurturing your crown.",
};

export default function HairducationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
