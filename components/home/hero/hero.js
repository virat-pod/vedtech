import HeroVisual from "./heroVisual";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center min-h-[90vh] gap-28 md:gap-10 xl:px-14">
      {/* Left Content */}
      <div className="flex flex-col gap-3 md:gap-5 md:max-w-2xl">
        <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase">
          Build with VedTech
        </p>
        <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          Smart Business Agency
        </h1>
        <p className="text-zinc-500 mt-2 md:mt-0 text-lg leading-relaxed w-full lg:w-[78%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex,
          nostrum neque delectus, nobis odit, laboriosam porro odio.
        </p>
        <div className="flex items-center gap-4 mt-6 md:mt-2">
          <button className="bg-black hover:bg-zinc-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
          <button className="flex items-center gap-2 text-zinc-700 font-semibold hover:text-indigo-600 transition-colors">
            ▶ Watch Video
          </button>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
};

export default Hero;
