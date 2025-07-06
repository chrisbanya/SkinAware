const data = [
  {
    id: 1,
    name: "Arielle B ",
    state: "Lagos",
    remark:
      "SkinAware gave me the clarity I needed. I always struggled to identify issues on my darker skin. But this tool provided reliable insights that empowered me to seek medical help early. Highly recommend!",
    image: "/public/arrielleTestimonial.png",
  },
  {
    id: 2,
    name: "Charles A",
    state: "Enugu",
    remark:
      "Access to dermatologists is a huge challenge. SkinAware bridged that gap perfectly. The results were clear and the recommendation were genuinely helpful.",
    image: "/public/charlesTestimonial.png",
  },
  {
    id: 3,
    name: "Shallom O",
    state: "Osun",
    remark:
      "SkinAware helped me understand my skin better . Using the skincare recommendations provided. I am so happy to have found SkinAware. Highly recommend!",
    image: "/public/shallomTestimonial.png",
  },
];

export const TestimonialSection = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {data.map(({ id, name, state, remark, image }) => (
        <div
          key={id}
          className="flex flex-col justify-between   w-xs py-5 px-3 mt-4 mb-4  rounded-md shadow-md overflow-hidden "
        >
          <div className="flex items-center justify-center  gap-4 p-4">
            <img
              src={image}
              alt={name}
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <p className="mt-3 text-center italic">“{remark}”</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <h3 className="text-lg  text-gray-800">{name}.,</h3>
            <p className="text-lg text-gray-800">{state}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TestimonialSection;
