import Image from "next/image";
import Hero from "@/components/home/hero/hero";
import News from "@/components/home/articles/news";
import Contact from "@/components/home/contact";

const icons = [
  { src: "/icons/nvidia.png", alt: "Nvidia" },
  { src: "/icons/godaddy.png", alt: "GoDaddy" },
  { src: "/icons/vercel.png", alt: "Vercel" },
];

export default function Home() {
  return (
    <main className="flex flex-col py-18 pt-28 md:pt-16 px-6 sm:px-12 gap-8">
      <Hero />
      <section className="flex flex-col items-center gap-2 sm:gap-12 mt-40 sm:mt-10 py-8">
        <p className="sm:text-lg font-semibold tracking-widest uppercase text-zinc-500">
          Trusted by industry leaders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-40 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {icons.map(({ src, alt }) => (
            <div key={alt} className="relative w-18 sm:w-28 h-24">
              <Image src={src} alt={alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>
      <News />
      <Contact />
    </main>
  );
}
