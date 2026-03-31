import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fit With Nikhil | Certified Personal Trainer & Transformation Specialist - Hyderabad",
  description: "Transform your body with Nikhil - Certified Fitness Personal Trainer & Motivator in Hyderabad. 1-on-1 coaching, group classes, weight loss, muscle gain. Book your free trial today!",
  keywords: "personal trainer hyderabad, gym trainer hcl, fitness transformation, weight loss, muscle gain, fit with nikhil",
  openGraph: {
    title: "Fit With Nikhil | Transform Your Body",
    description: "Certified Personal Trainer in Hyderabad. Proven transformations, 1-on-1 coaching & group classes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
