
import FileUpload from "../components/FileUpload";
import SkinCategories from "../components/SkinCategories";
import HowItWorksSection from "../UI/HowItWorksSection";
import NavBar from "../UI/NavBar";
import Username from "../components/Username";

const HomePage = () => {
  return (
    <div className="w-full">
      <NavBar />
      {/* <hr className="w-full outline-gray-950 mb-5" /> */}
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto ">
        <h2 className="my-6 text-lg font-bold">
          <Username />
        </h2>
        <FileUpload />
        <hr className="w-1/2 mx-auto mt-10 mb-5 outline-gray-950" />
        <HowItWorksSection overRideClass={"w-full"} />
        <SkinCategories />
      </div>
    </div>
  );
};

export default HomePage;
