import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
// app.js veya main.js dosyanızda

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

export const metadata = {
  title: "Oğuzhan Korkmaz - CV & Portfolio",
  description: "Oğuzhan Korkmaz - UI/UX Designer CV & Portfolio",
};

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const firebaseConfig = {
    apiKey: "AIzaSyD4TL9y3czwzvw-hbvhNGD1auUvdRt9jWQ",
    authDomain: "portfolio-28be8.firebaseapp.com",
    projectId: "portfolio-28be8",
    storageBucket: "portfolio-28be8.firebasestorage.app",
    messagingSenderId: "1076242630116",
    appId: "1:1076242630116:web:2d8980e991bf5270c773f1",
    measurementId: "G-KZWV062V5N",
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

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
