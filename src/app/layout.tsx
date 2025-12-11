import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Oğuzhan Korkmaz - CV & Portfolio",
  description: "Oğuzhan Korkmaz - UI/UX Designer CV & Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Navbar />
          {/* <Sidebar /> */}
          {/* <SocialMedias /> */}
          <main className="w-full md:mx-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
