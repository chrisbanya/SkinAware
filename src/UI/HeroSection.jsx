export const HeroSection = () => {
  return (
    <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto relative mt-3.5">
      <img
        src="/heroSkinAware.png"
        alt="Hero Image"
        loading="lazy"
        className="w-full h-auto"
      />
      <div className="absolute top-1/2 inset-x-0 text-center px-4 transform -translate-y-1/2 ">
        <h1 className="text-center text-sm md:text-4xl font-bold drop-shadow-lg">
          AI-Powered Skin Insights at <br /> Your Fingertips
        </h1>
        {/* <p
          className="text-center text-base drop-shadow-md"
          // className="text-xs md:text-lg  drop-shadow-md  "
        >
          Get instant, reliable, free skin insights on this app, designed with
          all skin tones in mind. Early detection starts here
        </p> */}
      </div>
    </div>
  );
};
