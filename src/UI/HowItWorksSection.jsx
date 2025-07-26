import { HiOutlineUpload } from "react-icons/hi";
import { TbHeartHandshake } from "react-icons/tb";
import { LiaBrainSolid } from "react-icons/lia";

const data = [
  {
    icon: HiOutlineUpload,
    title: "Upload Image",
    description:
      "Securely upload a clear photo of your skin concern using your smartphone or camera",
  },
  {
    icon: LiaBrainSolid,
    title: "AI Analysis",
    description:
      "Our Advanced AI, trained on diverse skin tones analyzes your image for common conditions.",
  },
  {
    icon: TbHeartHandshake,
    title: "AI Insights",
    description:
      "Get instant insights on possible conditions and personalized recommendations",
  },
];
const HowItWorksSection = ({overRideClass}) => {
  const baseClass = "w-11/12 lg:w-10/12 max-w-screen-lg"
  // const propClass = overRideClass;
  const className = overRideClass ?? baseClass;
  return (
    <div className="mt-7 md:mt-14 mb-10 w-full">
      <div className="flex justify-center items-center h-18 w-80 mx-auto rounded-lg bg-[#FAFCFF]">
        <h2 className="text-[#1D1A1A]-700 font-bold text-2xl">
          How SkinAware Works
        </h2>
      </div>
      <div className={`${className} flex flex-wrap justify-center md:justify-between items-center mx-auto mt-10`}>
        {data.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="h-48 w-xs sm:w-[48%] md:w-[33%]  flex flex-col justify-center items-center gap-4 rounded-md shadow-md shadow-neutral-300"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <Icon className="text-4xl text-indigo-600" />
              <p>{title}</p>
            </div>
            <p className="text-left px-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
