"use client";
import { useRef } from "react";

const NewsCards = ({ data }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative">
      <div className="absolute -top-13 sm:-top-16 right-0 z-10 flex gap-2">
        <button
          onClick={() => scroll("left")}
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-[#1a4d2e] transition-all shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center hover:bg-black transition-all shadow-sm cursor-pointer"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide w-full">
        <div className="flex w-max gap-6">
          {data.results.map((d) => {
            return (
              <div
                key={d.article_id}
                className="group bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 max-w-xs sm:max-w-sm"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={d.image_url || "/services/default.jpg"}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      {d.datatype}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      {d.pubDate.slice(0, 10)}
                    </span>
                  </div>

                  <h3 className="font-bold text-zinc-900 text-base leading-snug">
                    {d.title}
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                    {d.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={d.source_url}
                        alt="Slashgear"
                        className="w-4 h-4 rounded-full object-contain"
                      />
                      <span className="text-xs text-zinc-400 font-medium">
                        {d.source_name}
                      </span>
                    </div>
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-indigo-600 hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
