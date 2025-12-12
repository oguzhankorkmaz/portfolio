import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics/FirebaseAnalytics";

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
        
        <FirebaseAnalytics />
        <div className="flex">
          <Navbar />
          <main className="w-full md:mx-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
