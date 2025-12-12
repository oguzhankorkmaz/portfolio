// src/components/FirebaseAnalytics/FirebaseAnalytics.tsx

"use client"; // <-- Bu satır çok önemli! Bileşenin client tarafında render edilmesini sağlar

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { useEffect } from "react";

// Firebase yapılandırma objeniz (bu bilgileri Firebase konsolundan almalısınız)
// Önemli: Bu bilgileri doğrudan buraya yazmak yerine, ortam değişkenlerinden almak daha güvenlidir.
// Örneğin: process.env.NEXT_PUBLIC_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: "AIzaSyD4TL9y3czwzvw-hbvhNGD1auUvdRt9jWQ",
  authDomain: "portfolio-28be8.firebaseapp.com",
  projectId: "portfolio-28be8",
  storageBucket: "portfolio-28be8.firebasestorage.app",
  messagingSenderId: "1076242630116",
  appId: "1:1076242630116:web:2d8980e991bf5270c773f1",
  measurementId: "G-KZWV062V5N",
};

let appInitialized = false; // Firebase uygulamasının yalnızca bir kez başlatıldığından emin olmak için

export default function FirebaseAnalytics() {
  useEffect(() => {
    // Sadece tarayıcı tarafında çalışacağından eminiz, ancak Firebase uygulamasını tekrar başlatmamak için kontrol edelim
    if (!appInitialized) {
      const app = initializeApp(firebaseConfig);
      appInitialized = true;

      isSupported()
        .then((supported) => {
          if (supported) {
            getAnalytics(app); // Analytics servisini başlat
            console.log(
              "Firebase Analytics başarıyla başlatıldı (Client-side)."
            );
          } else {
            console.warn("Firebase Analytics bu ortamda desteklenmiyor.");
          }
        })
        .catch((error) => {
          console.error("Firebase Analytics başlatılırken hata oluştu:", error);
        });
    }
  }, []); // Boş bağımlılık dizisi, bu kodun sadece bir kez, bileşen monte edildiğinde çalışmasını sağlar

  return null; // Bu bileşenin görsel bir çıktısı yok
}
