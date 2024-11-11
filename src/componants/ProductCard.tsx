import React from "react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
}) => {
  return (
    <div className="border rounded-md shadow-md p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-700">${price}</p>
      <Link href={`/products/${id}`}>
        <span className="mt-4 inline-block text-blue-500 hover:underline">
          View Details
        </span>
      </Link>
    </div>
  );
};

export default ProductCard;
