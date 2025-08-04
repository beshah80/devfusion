// app/stats/page.tsx
export default async function StatsPage() {
  // Simulate server-side fetch with cache: 'no-store' to fetch fresh data every request
  const data = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8 text-sky-600">
        Live Bitcoin Price
      </h1>
      <p className="text-2xl">
        USD: <strong>${data.bpi.USD.rate}</strong>
      </p>
      <p className="mt-2 text-gray-500">Last updated: {data.time.updated}</p>
    </section>
  );
}
