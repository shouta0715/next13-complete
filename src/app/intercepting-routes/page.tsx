import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/intercepting-routes/products";

export default function Page() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {products.map((product) => {
            return (
              <div key={product.id} className="group relative">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 relative w-full rounded-md bg-gray-400 lg:aspect-none lg:h-80">
                    <Image
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      height={250}
                      src={product.imageSrc}
                      width={250}
                    />
                  </div>
                  <Link
                    className="pointer-events-none absolute bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-md bg-gray-200/80 px-6 py-1 font-semibold text-gray-700 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100"
                    href={`/intercepting-routes/product/${product.id}`}
                  >
                    Quick View
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white">{product.name}</h3>
                  </div>
                  <p className="text-sm font-medium text-white">
                    {product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
