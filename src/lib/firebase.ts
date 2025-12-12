import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4TL9y3czwzvw-hbvhNGD1auUvdRt9jWQ",
  authDomain: "designedbyoguzhan.com",
  projectId: "portfolio-28be8",
  storageBucket: "portfolio-28be8.firebasestorage.app",
  messagingSenderId: "1076242630116",
  appId: "1:1076242630116:web:2d8980e991bf5270c773f1",
  measurementId: "G-KZWV062V5N"
};

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      getAnalytics(app);
    }
  }
};
