const product = {
  name: "Zip Tote Basket",
  price: "$220",
  rating: 3.9,
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
  imageAlt: "Back angled view with bag open and handles to the side.",
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
};

export type Product = typeof product;

export const products = Array.from({ length: 4 }).map((_, i) => {
  return {
    ...product,
    id: i,
  };
});
