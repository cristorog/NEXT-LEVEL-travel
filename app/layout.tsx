import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXT LEVEL Travel | Passeios privativos no Chile",
  description:
    "Passeios privativos e experiências personalizadas em Santiago e no Chile, com atendimento em português e espanhol.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
