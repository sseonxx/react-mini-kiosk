import { db } from "@/lib/firebase-config";
import { collection, getDocs } from "firebase/firestore";

async function getOrders() {
  const querySnapshot = await getDocs(collection(db, "orders"));
  const orders = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return orders;
}

export default async function Home() {
  const orders = await getOrders();
  return (
    <div>
    <h2>주문 내역</h2>
    <ul>
      {orders.map((order) => (
        <li key={order.id}>{order.item} - {order.status}</li>
      ))}
    </ul>
  </div>
  );
}
