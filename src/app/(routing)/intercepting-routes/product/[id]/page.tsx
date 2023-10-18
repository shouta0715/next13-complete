import { StarIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { products } from "@/app/(routing)/intercepting-routes/products";
import { BuyProduct } from "@/components/buy-profuct";

export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const product = products.find((p) => {
    return p.id === Number(params.id);
  });

  if (!product) notFound();

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Image
            alt={product.name}
            className="h-full w-full object-cover object-center sm:rounded-lg"
            height={250}
            src={product.imageSrc}
            width={250}
          />
          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-white">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => {
                    return (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={clsx(
                          product.rating > rating
                            ? "text-indigo-500"
                            : "text-white",
                          "h-5 w-5 shrink-0"
                        )}
                      />
                    );
                  })}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <p className="space-y-6 text-base text-white">
                {product.description}
              </p>
            </div>

            <BuyProduct product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
