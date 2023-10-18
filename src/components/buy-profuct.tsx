"use client";

import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import React, { useState } from "react";
import { Product } from "@/app/intercepting-routes/products";

export function BuyProduct({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <form className="mt-6">
      {/* Colors */}
      <div>
        <h3 className="text-sm text-white">Color</h3>

        <RadioGroup
          className="mt-2"
          onChange={setSelectedColor}
          value={selectedColor}
        >
          <RadioGroup.Label className="sr-only">
            Choose a color
          </RadioGroup.Label>
          <span className="flex items-center space-x-3">
            {product.colors.map((color) => {
              return (
                <RadioGroup.Option
                  key={color.name}
                  className={({ active, checked }) => {
                    return clsx(
                      color.selectedColor,
                      active && checked ? "ring ring-offset-1" : "",
                      !active && checked ? "ring-2" : "",
                      "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                    );
                  }}
                  value={color}
                >
                  <RadioGroup.Label as="span" className="sr-only">
                    {color.name}
                  </RadioGroup.Label>
                  <span
                    aria-hidden="true"
                    className={clsx(
                      color.bgColor,
                      "h-8 w-8 rounded-full border border-black/10"
                    )}
                  />
                </RadioGroup.Option>
              );
            })}
          </span>
        </RadioGroup>
      </div>

      <div className="mt-10 flex">
        <button
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
          type="button"
        >
          Add to bag
        </button>
      </div>
    </form>
  );
}
