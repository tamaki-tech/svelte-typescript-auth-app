import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // TODO READMEの手順で作成した情報をコピペしてください。
  apiKey: "AIzaSyCMMc2p8hIEfOp-PfXpDzPj3UO5yMD9QwM",
  authDomain: "sample-project-9692c.firebaseapp.com",
  projectId: "sample-project-9692c",
  storageBucket: "sample-project-9692c.appspot.com",
  messagingSenderId: "327979171710",
  appId: "1:327979171710:web:7e6e9adf67b4c28dcd7d2f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
