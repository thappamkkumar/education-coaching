import type { Metadata } from "next"; 
import "./globals.css";
 

export const metadata: Metadata = {
  title: "SuccessTrack Coaching - Online & Local Coaching Center",
  description: "SuccessTrack Coaching helps students achieve their goals with expert guidance, personalized coaching, and proven strategies for academic and professional success.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  antialiased bg-[var(--color-background)] `}
      >
        {children}
      </body>
    </html>
  );
}
