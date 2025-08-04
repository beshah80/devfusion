// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-slate-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-sky-600">
        About DevFusion
      </h1>
      <p className="mb-4 leading-relaxed text-lg">
        Hi! I’m Beshah, a passionate frontend developer. This project is a
        demonstration of modern Next.js and Tailwind CSS skills — including
        dynamic routing, SSR, SEO, forms, and GitHub collaboration.
      </p>
      <p className="mb-4 leading-relaxed text-lg">
        DevFusion combines blog and portfolio features in a sleek and responsive
        web app. The goal is to showcase best practices and build a solid
        foundation for real-world projects.
      </p>
      <p className="text-center mt-8">
        <a
          href="https://github.com/beshah80/devfusion"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-sky-600 rounded text-sky-600 hover:bg-sky-600 hover:text-white transition"
        >
          View on GitHub
        </a>
      </p>
    </section>
  );
}
