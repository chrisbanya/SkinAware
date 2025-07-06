const Logo = () => {
  return (
    <div className="relative" style={{ width: "48px", height: "68px" }}>
      <img
        src="/public/WaterBlue.png"
        alt="Water droplet blue"
        class="absolute transform rotate-[11deg]"
        style={{
          width: "43px",
          height: "47px",
          top: "12px",
          left: "0px",
        }}
      />
      <img
        src="/public/WaterRed.png"
        alt="water droplet red"
        class="absolute transform -rotate-[10deg]"
        style={{
          width: '43px', 
          height: '47px', 
          top: '12px', 
          left: '12px'
        }}
      />
    </div>
  );
};

export default Logo;
