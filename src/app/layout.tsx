import type { Metadata } from "next";
import "../styles/globals.scss";
import "@splidejs/react-splide/css";

export const metadata: Metadata = {
  title: "Honey Glass Boutique",
  description: "Honey Glass Boutique, trouvez vos nouvelles lunettes de soleil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
