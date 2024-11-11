import { useRouter } from "next/router";
import { products } from "../../data/products";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === id);
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-xl mb-2">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
}
