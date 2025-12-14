import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics/FirebaseAnalytics";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Oğuzhan Korkmaz – UI/UX Designer | CV & Portfolio",
    template: "%s | Oğuzhan Korkmaz",
  },

  description:
    "Oğuzhan Korkmaz, UI/UX Designer. Web & mobile arayüz tasarımı, kullanıcı deneyimi, modern dijital ürünler. CV ve portfolio çalışmalarını inceleyin.",

  keywords: [
    "Oğuzhan Korkmaz",
    "UI UX Designer",
    "Product Designer",
    "Web Design",
    "Mobile App Design",
    "Portfolio",
    "Designer CV",
    "User Experience",
    "User Interface",
    "Figma Designer",
    "Mobil Uygulama Tasarımı",
    "Uygulama Tasarımı",
    "web tasarım",
    "mobil tasarım",
    "tasarımcı",
    "designer",
    "oğuzhan",
    "korkmaz",
    "figma",
    "ui kit",
    "cv",
    "portfolio",
    "user experience",
    "frontend developer",
    "Design Thinking",
    "prototyping",
    "adobe xd",
    "sketch",
    "ui developer",
    "ui designer",
    "user interface",
    "ui",
    "tasarım",
    "tasarım uzmanı",
    "grafik tasarım",
    "ux",
    "A/B",
    "tasarım araçları",
    "design tools",
    "lottie",
    "dribbble",
    "behance",
    "korkmaz oğuzhan",
    "designedby",
    "designed by",
    "designed by oğuzhan",
    "tarafından"
  ],

  authors: [{ name: "Oğuzhan Korkmaz", url: "https://designedbyoguzhan.com" }],
  creator: "Oğuzhan Korkmaz",
  publisher: "Oğuzhan Korkmaz",

  metadataBase: new URL("https://designedbyoguzhan.com"),
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Oğuzhan Korkmaz – UI/UX Designer | CV & Portfolio",
    description:
      "UI/UX Designer Oğuzhan Korkmaz’ın CV ve portfolio çalışmaları. Web ve mobil ürün tasarımları, kullanıcı deneyimi odaklı projeler.",
    url: "https://designedbyoguzhan.com",
    siteName: "Designed by Oğuzhan",
    images: [
      {
        url: "https://designedbyoguzhan.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oğuzhan Korkmaz – UI/UX Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Oğuzhan Korkmaz – UI/UX Designer | CV & Portfolio",
    description:
      "UI/UX Designer Oğuzhan Korkmaz’ın portfolio ve CV sayfası. Web & mobil ürün tasarımları.",
    images: ["https://designedbyoguzhan.com/og-image.png"],
    creator: "@oguzhankorkmaz", // varsa, yoksa silebilirsin
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FirebaseAnalytics />
        <div className="flex">
          <Navbar />
          <main className="w-full md:mx-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
