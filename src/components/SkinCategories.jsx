import { Image } from "@imagekit/react";
const skinCat = [
  {
    id: 1,
    category: "Acne & Breakouts",
    src: "skinAware/acneBreakOuts.jpg",
    url: "https://ik.imagekit.io/chrisbanya",
  },
  {
    id: 2,
    category: "Pigmentation Disorders",
    src: "skinAware/pigmentationDisorders.jpg",
    url: "https://ik.imagekit.io/chrisbanya",
  },
  {
    id: 3,
    category: "Inflammatory Conditions",
    src: "skinAware/inflammatoryConditions.jpg",
    url: "https://ik.imagekit.io/chrisbanya",
  },
  {
    id: 4,
    category: "Infections",
    src: "skinAware/infections.jpg",
    url: "https://ik.imagekit.io/chrisbanya",
  },
  {
    id: 5,
    category: "Hair & Scalp Conditions",
    src: "skinAware/hairAndScalpConditions.jpg",
    url: "https://ik.imagekit.io/chrisbanya",
  },
  {
    id: 6,
    category: "Sun Damage and Aging",
    src: "skinAware/sunDamage.jpg",
    url: "https://ik.imagekit.io/chrisbanya",
  },
];

const SkinCategories = () => {
  return (
    <div className="text-center p-6 rounded shadow mb-10  ">
      <h2
        className="mb-5 text-[#1D1A1A] font-bold md:text-xl"
      >
        Browse Skin Condition Categories
      </h2>
      <div
        //   className="border-2 border-amber-300 flex justify-start flex-wrap gap-4"
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {skinCat.map((category) => (
          <div
            key={category.id}
            // className="border-2 h-44 flex flex-col justify-center items-center rounded shadow w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
            className="h-44 rounded shadow p-4 flex flex-col gap-2 items-center transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:bg-gray-50"
          >
            <Image
              urlEndpoint={category.url}
              src={category.src}
              alt={category.category}
              className="w-20 h-20 md:w-30 md:h-30 object-cover rounded-full"
            />
            <p className="text-sm font-bold">{category.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinCategories;
