import { db } from "@/lib/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default async function addOrder() {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      user: "사용자1",
      item: "아메리카노",
      price: 5000,
      status: "pending", // 주문 상태 (예: 대기 중)
      createdAt: new Date(),
    });
    console.log("주문 ID:", docRef.id);
  } catch (error) {
    console.error("주문 저장 실패:", error);
  }
}