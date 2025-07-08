const Logo = () => {
  return (
    <div className="relative " style={{ width: "48px", height: "68px" }}>
      <img
        src="/WaterBlue.png"
        alt="Water droplet blue"
        loading="lazy"
        class="absolute transform rotate-[11deg]"
        style={{
          width: "43px",
          height: "47px",
          top: "12px",
          left: "-12px",
        }}
      />
      <img
        src="/WaterRed.png"
        alt="water droplet red"
        loading="lazy"
        class="absolute transform -rotate-[10deg]"
        style={{
          width: '43px', 
          height: '47px', 
          top: '12px', 
          left: '0px'
        }}
      />
    </div>
  );
};

export default Logo;
