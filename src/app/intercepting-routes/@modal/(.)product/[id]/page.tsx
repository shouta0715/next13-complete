"use client";

import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { products } from "@/app/intercepting-routes/products";

export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const router = useRouter();
  const product = products.find((p) => {
    return p.id === Number(params.id);
  });

  if (!product) notFound();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <Transition.Root as={Fragment} show>
      <Dialog as="div" className="relative z-10" onClose={router.back}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500/75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={router.back}
                    type="button"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          alt={product.imageAlt}
                          className="object-cover object-center"
                          height={480}
                          src={product.imageSrc}
                          width={480}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {product.name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-3"
                      >
                        <h3 className="sr-only" id="information-heading">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">
                          {product.price}
                        </p>

                        {/* Reviews */}
                        <div className="mt-3">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => {
                                return (
                                  <StarIcon
                                    key={rating}
                                    aria-hidden="true"
                                    className={clsx(
                                      product.rating > rating
                                        ? "text-gray-400"
                                        : "text-gray-200",
                                      "h-5 w-5 shrink-0"
                                    )}
                                  />
                                );
                              })}
                            </div>
                            <p className="sr-only">
                              {product.rating} out of 5 stars
                            </p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="sr-only">Description</h4>

                          <p className="text-sm text-gray-700">
                            {product.description}
                          </p>
                        </div>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-6"
                      >
                        <h3 className="sr-only" id="options-heading">
                          Product options
                        </h3>

                        <form>
                          {/* Colors */}
                          <div>
                            <h4 className="text-sm text-gray-600">Color</h4>

                            <RadioGroup
                              className="mt-2"
                              onChange={setSelectedColor}
                              value={selectedColor}
                            >
                              <RadioGroup.Label className="sr-only">
                                Choose a color
                              </RadioGroup.Label>
                              <div className="flex items-center space-x-3">
                                {product.colors.map((color) => {
                                  return (
                                    <RadioGroup.Option
                                      key={color.name}
                                      className={({ active, checked }) => {
                                        return clsx(
                                          color.selectedColor,
                                          active && checked
                                            ? "ring ring-offset-1"
                                            : "",
                                          !active && checked ? "ring-2" : "",
                                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                        );
                                      }}
                                      value={color}
                                    >
                                      <RadioGroup.Label
                                        as="span"
                                        className="sr-only"
                                      >
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
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="mt-6">
                            <button
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                              type="button"
                            >
                              Add to bag
                            </button>
                          </div>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
