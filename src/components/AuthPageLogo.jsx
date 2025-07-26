const AuthPageLogo = () => {
  return (
    <div className="relative" style={{ width: "70px", height: "68px" }}>
      <img
        src="/waterBlueBig.png"
        alt="Water droplet blue"
        loading="lazy"
        className="absolute transform -rotate-[4deg]"
        style={{
          width: "58px",
          height: "60px",
          top: "12px",
          left: "-12px",
        }}
      />
      <img
        src="/waterRedBig.png"
        alt="water droplet red"
        loading="lazy"
        className="absolute transform rotate-[10deg]"
        style={{
          width: "58px",
          height: "60px",
          top: "13px",
          left: "3px",
        }}
      />
    </div>
  );
}

export default AuthPageLogo