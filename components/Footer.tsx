export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} DevFusion. Crafted with passion for
          modern web development.
        </p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a
            href="https://github.com/beshah80/devfusion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-200 transition transform hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/beshah80"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-200 transition transform hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="mailto:beshah@example.com"
            className="text-lg hover:text-blue-200 transition transform hover:scale-105"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
