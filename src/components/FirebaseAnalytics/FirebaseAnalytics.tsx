// src/components/FirebaseAnalytics/FirebaseAnalytics.tsx

"use client"; // <-- Bu satır çok önemli! Bileşenin client tarafında render edilmesini sağlar

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { useEffect } from "react";

// Firebase yapılandırma objeniz (bu bilgileri Firebase konsolundan almalısınız)
// Önemli: Bu bilgileri doğrudan buraya yazmak yerine, ortam değişkenlerinden almak daha güvenlidir.
// Örneğin: process.env.NEXT_PUBLIC_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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
