import Image from "next/image";
import Link from "next/link";
import { TrendingUp, TrendingDown, Zap, Lightbulb } from "lucide-react";

const HeroVisual = () => {
  return (
    <div className="relative flex-shrink-0 w-[340px] h-[320px] sm:w-[280px] sm:h-[360px] lg:w-[330px] lg:h-[400px] xl:w-[420px] xl:h-[420px] ">
      <Image
        src="/assetsPic/landing-image.png"
        alt="Hero visual"
        fill
        className="object-contain w-full"
        priority
      />
      <div className="absolute -top-14 sm:-top-8 lg:-top-12 left-0 sm:-left-14 -rotate-8 bg-white/90 backdrop-blur-sm border border-zinc-100 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 w-48">
        <div className="bg-indigo-600 text-white text-sm rounded-xl p-2.5 shrink-0">
          <TrendingUp size={16} />
        </div>
        <div>
          <p className="text-sm text-zinc-400 font-medium">Revenue</p>
          <p className="text-sm font-bold text-zinc-800">+120% Growth</p>
        </div>
      </div>

      <div className="hidden xl:flex absolute -top-6 -right-10 rotate-6 bg-white/90 backdrop-blur-sm border border-zinc-100 shadow-xl rounded-2xl px-4 py-3 items-center gap-3 w-48">
        <div className="bg-amber-500 text-white text-sm rounded-xl p-2.5 shrink-0">
          <Zap size={16} />
        </div>
        <div>
          <p className="text-sm text-zinc-400 font-medium">Delivery</p>
          <p className="text-sm font-bold text-zinc-800">2x Faster</p>
        </div>
      </div>

      <div className="hidden xl:flex absolute bottom-[10%] -right-18 rotate-4 bg-white/90 backdrop-blur-sm border border-zinc-100 shadow-xl rounded-2xl px-4 py-3 items-center gap-3 w-46">
        <div className="bg-violet-600 text-white text-sm rounded-xl p-2.5 shrink-0">
          <Lightbulb size={12} />
        </div>
        <div>
          <p className="text-sm text-zinc-400 font-medium">Strategy</p>
          <p className="text-sm font-bold text-zinc-800">Smart Solutions</p>
        </div>
      </div>
      <div className="absolute -bottom-22 md:-bottom-33 lg:-bottom-22 xl:-bottom-18 right-0 sm:-right-24 md:-right-6 xl:-left-24 bg-white/95 backdrop-blur-sm border border-zinc-100 shadow-2xl rounded-2xl p-4 w-54 xl:w-64">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-zinc-800 tracking-wide">
            VedTech
          </span>
          <span className="text-sm bg-emerald-50 text-emerald-600 font-semibold px-2 py-0.5 rounded-full">
            ● Live
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between bg-emerald-50 rounded-xl px-3 py-2">
            <div className="flex items-center gap-2">
              <TrendingUp size={13} className="text-emerald-600" />
              <span className="text-xs text-zinc-600 font-medium">Revenue</span>
            </div>
            <span className="text-xs font-bold text-emerald-600">+$24,500</span>
          </div>

          <div className="flex items-center justify-between bg-emerald-50 rounded-xl px-3 py-2">
            <div className="flex items-center gap-2">
              <TrendingUp size={13} className="text-emerald-600" />
              <span className="text-xs text-zinc-600 font-medium">
                New Clients
              </span>
            </div>
            <span className="text-xs font-bold text-emerald-600">+38</span>
          </div>

          <div className="flex items-center justify-between bg-red-50 rounded-xl px-3 py-2">
            <div className="flex items-center gap-2">
              <TrendingDown size={13} className="text-red-500" />
              <span className="text-xs text-zinc-600 font-medium">
                Ad Spend
              </span>
            </div>
            <span className="text-xs font-bold text-red-500">-$3,200</span>
          </div>

          <div className="flex items-center justify-between bg-red-50 rounded-xl px-3 py-2">
            <div className="flex items-center gap-2">
              <TrendingDown size={13} className="text-red-500" />
              <span className="text-xs text-zinc-600 font-medium">
                Overhead
              </span>
            </div>
            <span className="text-xs font-bold text-red-500">-$1,800</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-medium">Net Profit</span>
          <span className="text-sm font-black text-emerald-600">+$19,500</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
