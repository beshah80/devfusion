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
      // Simulate submission
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto my-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Get in Touch
      </h1>
      <p className="text-gray-600 text-center mb-8">
        We'd love to hear from you. Please fill out the form below.
      </p>
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg transition-opacity duration-300 ease-in-out opacity-100">
          Thank you for your message! We will get back to you soon.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.name
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-blue-400 focus:ring-blue-100"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-blue-400 focus:ring-blue-100"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.message
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-blue-400 focus:ring-blue-100"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
