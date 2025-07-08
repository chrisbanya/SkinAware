import { HeroSection } from "../UI/HeroSection";
import NavBar from "../UI/NavBar";
import { TbHeartHandshake } from "react-icons/tb";
import { HiOutlineUpload } from "react-icons/hi";
import { LiaBrainSolid } from "react-icons/lia";
import EdResourcePreView from "../components/EdResourcePreView";
import TestimonialSection from "../UI/TestimonialSection";
import Footer from "../UI/Footer";

export const LandingPage = () => {
  return (
    <div >
      <NavBar />
      <HeroSection />
      <div className="mt-7 md:mt-14 mb-10 w-full">
        <div className="flex justify-center items-center h-18 w-80 mx-auto rounded-lg bg-[#FAFCFF]">
          <h2 className="text-[#1D1A1A]-700 font-bold text-2xl">
            How SkinAware Works
          </h2>
        </div>
        <div className="w-11/12 lg:w-10/12 max-w-screen-lg flex flex-wrap justify-center md:justify-between items-center mx-auto mt-10">
          {/* redundant styles, group under a directive later */}
          <div className="h-48 w-xs sm:w-[48%] md:w-[33%]  flex flex-col justify-center items-center gap-4 rounded-md shadow-md shadow-neutral-300">
            <div className="flex flex-col justify-center items-center gap-2">
              <HiOutlineUpload className="text-4xl text-indigo-600" />
              <p>Upload Image</p>
            </div>
            <p className="text-left px-4">
              Securely upload a clear photo of your skin concern using your
              smartphone or camera
            </p>
          </div>

          <div className="h-48 w-xs sm:w-[48%] md:w-[33%] flex flex-col justify-center items-center gap-4 rounded-md shadow-md shadow-neutral-300">
            <div className="flex flex-col justify-center items-center gap-2">
              <LiaBrainSolid className="text-4xl text-indigo-600" />
              <p>AI Analysis</p>
            </div>
            <p className="text-left px-4">
              Our Advanced AI, trained on diverse skin tones analyzes your image
              for common conditions.
            </p>
          </div>

          <div className="h-48 w-xs sm:w-[48%] md:w-[33%] flex flex-col justify-center items-center gap-4 rounded-md shadow-md shadow-neutral-300">
            <div className="flex flex-col justify-center items-center gap-2">
              <TbHeartHandshake className="text-4xl text-indigo-600" />
              <p>AI Insights</p>
            </div>
            <p className="text-left px-4">
              Get instant insights on possible conditions and personalized
              recommendations
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-10 w-full">
        <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto border-red-500">
          <div className="flex justify-start items-start">
            <h2 className="font-bold text-2xl">Educational Resources</h2>
          </div>

          <EdResourcePreView />
        </div>
      </div>
      <div className="flex justify-center items-center h-18 w-80 mx-auto rounded-lg bg-[#FAFCFF] mb-10">
        <h2 className="text-[#1D1A1A]-700 font-bold text-2xl">
          What Our Users Say
        </h2>
      </div>
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto">
        <TestimonialSection />
      </div>
      <section className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto py-5">
        <Footer />
      </section>
    </div>
  );
};
