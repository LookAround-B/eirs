import "@/app/globals.css";
import { Providers } from "@/components/providers";

export const metadata = {
  title: "EIRS",
  description: "Embassy International Riding School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
