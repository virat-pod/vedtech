import NewsCards from "./newsCards";

const News = async () => {
  const res = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_b212f2d85111419a923d9fb6d9caf60e&q=tech",
  );
  const data = await res.json();

  return (
    <section className="min-h-80 flex flex-col gap-18 sm:gap-22 py-8 sm:mt-13">
      <h1 className="articles sm:text-lg font-semibold tracking-widest uppercase text-zinc-500 text-center">
        Articles Today
      </h1>
      <NewsCards data={data} />
    </section>
  );
};

export default News;
