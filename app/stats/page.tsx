export const revalidate = 3600; // Revalidate every hour

export default async function StatsPage() {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://jsonplaceholder.typicode.com/posts/1";

  let data = null;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
    data = await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#E6F7FF] px-6">
        <div className="max-w-3xl text-center bg-white p-12 rounded-3xl shadow-2xl border border-red-200 animate-fade-in">
          <h1 className="text-5xl font-bold text-red-600 mb-6">
            Failed to Load Stats
          </h1>
          <p className="text-xl text-[#333333]">
            Something went wrong while fetching the stats. Please try again
            later or contact support.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#E6F7FF] py-24 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-12 border border-blue-200 animate-fade-in">
        <h1 className="text-6xl font-bold mb-12 text-[#333333] text-center">
          Stats from API
        </h1>
        <h2 className="text-4xl font-semibold text-[#333333] mb-8 text-center">
          {data.title}
        </h2>
        <div className="text-xl text-[#333333] leading-relaxed space-y-8 max-w-5xl mx-auto">
          {data.body.split(". ").map((sentence: string, index: number) => (
            <p key={index}>{sentence.trim().replace(/\.$/, "")}.</p>
          ))}
        </div>
      </div>
    </section>
  );
}
