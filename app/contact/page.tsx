"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-[#E6F7FF] px-6 py-24 text-[#333333]">
      <section className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-blue-200 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6 text-[#333333] text-center">
          Contact Us
        </h1>
        <p className="text-xl text-[#333333] mb-10 text-center leading-relaxed">
          Got a question, feedback, or collaboration idea? Fill out the form
          below, and our team will respond promptly to keep the conversation
          going.
        </p>

        {submitted && (
          <div className="mb-8 p-6 bg-green-100 text-green-800 rounded-xl text-center font-semibold text-lg animate-fade-in">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-400"
                  : "border-blue-300 focus:ring-blue-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-base mt-2">{errors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-blue-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-base mt-2">{errors.email}</p>
            )}
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`w-full border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 resize-none ${
                errors.message
                  ? "border-red-500 focus:ring-red-400"
                  : "border-blue-300 focus:ring-blue-500"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-base mt-2">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
