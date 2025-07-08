import { GiOpenBook } from "react-icons/gi";

const data = [
  {
    id: 1,
    title: "Understanding Eczema on Darker Skin",
    description:
      "Eczema can look different on darker skin, often appearing as patches of brown, purple or grey instead of red. Learn about its unique manifestations",
    image: "/eczema.png",
    iconName: "Read article",
    icon: <GiOpenBook />,
  },
  {
    id: 2,
    title: "identifying psoriasis symptoms early",
    description:
      "Psorlasis can be tricky to spot early. This articles covers key indicators. Common areas of occurrence and why early detection is crucial for effectiveness",
    image: "/psoriasis.png",
    iconName: "Read article",
    icon: <GiOpenBook />,
  },
  {
    id: 3,
    title: "Acne Management For All Skin Types",
    description:
      "Acne is a common skin condition but its treatment approaches can vary depending on skin type and tone. Discover effective solution and tips ",
    image: "/acneMgt.png",
    iconName: "Read article",
    icon: <GiOpenBook />,
  },
  {
    id: 4,
    title: "Sun Protection For Darker Skin Tones",
    description:
      "While often thought to be less susceptible, darker skin tones still require proper sun protection. Learn about the risks of UV exposure",
    image: "/sunscreenProctection.png",
    iconName: "Read article",
    icon: <GiOpenBook />,
  },
];
export const EdResourcePreView = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-sm sm:w-xs md:w-[48%] mt-4 mb-4 rounded-md shadow-md overflow-hidden hover:scale-110 transition-transform duration-300 hover:shadow-lg"
        >
          <div className="">
            <div>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg "
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500">{item.iconName}</span>
                <span className="text-red-500"> {item.icon} </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EdResourcePreView;
