import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">
          <Link href="/">MyStore</Link>
        </h1>
        <nav>
          <Link href="/checkout" className="ml-4">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
