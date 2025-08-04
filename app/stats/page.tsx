export default async function StatsPage() {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://api.coindesk.com/v1/bpi/currentprice.json";

  const data = await fetch(apiUrl, { cache: "no-store" }).then((res) =>
    res.json()
  );

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
