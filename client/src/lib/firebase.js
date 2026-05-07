import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv3wDVQFoNggSCknDUVmQl7_yzutD8Y8k",
  authDomain: "studysniper-ai.firebaseapp.com",
  projectId: "studysniper-ai",
  storageBucket: "studysniper-ai.firebasestorage.app",
  messagingSenderId: "656478762857",
  appId: "1:656478762857:web:2850f39a2215c274b8eff8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);