import { auth } from "@/lib/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("로그인 성공:", userCredential.user);
  } catch (error) {
    console.error("로그인 실패:", error);
  }
}