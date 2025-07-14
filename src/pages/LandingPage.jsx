import { HeroSection } from "../UI/HeroSection";
import NavBar from "../UI/NavBar";
import EdResourcePreView from "../components/EdResourcePreView";
import TestimonialSection from "../UI/TestimonialSection";
import Footer from "../UI/Footer";
import HowItWorksSection from "../UI/HowItWorksSection";

export const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HowItWorksSection />
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
