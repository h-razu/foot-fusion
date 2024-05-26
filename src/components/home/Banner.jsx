const Banner = () => {
  return (
    <div className="hero h-[600px] bannerBg">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1
            className="mb-5 text-5xl font-bold lg:text-6xl"
            style={{ fontFamily: "redressed" }}
          >
            Step into Style
          </h1>
          <p className="mb-5 text-center text-lg font-semibold">
            Find the perfect combination of comfort and style with our carefully
            curated collection of footwear. Our shoes are designed for
            long-lasting support, so you can tackle your day with confidence.
            With so many options to choose from, you are sure to find your new
            go-to pair.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
