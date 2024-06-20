import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductCard product={{ image: "/vr-headset.jpeg", name: "Futuristic VR Headset", price: 0.001 }} />
    </main>
  );
}
