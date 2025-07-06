export const HeroSection = () => {
  return (
    <div className="w-5/6 mx-auto relative">
      <img
        src="/public/heroSkinAware.png"
        alt="Hero Image"
        className="w-full h-auto mt-3.5"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4  ">
        <h1 className="text-4xl font-bold drop-shadow-lg mb-30 mt-46">
          AI-Powered Skin Insights at <br /> Your Fingertips
        </h1>
        <p className="text-md font-bold  drop-shadow-md  ">
          Get instant, reliable, free skin insights on this app, designed with
          all skin tones in mind. Early detection starts here
        </p>
      </div>
    </div>
  );
};
