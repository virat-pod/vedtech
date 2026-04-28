"use client";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.lastname.trim()) e.lastname = "Required";
    if (!form.email.includes("@")) e.email = "Invalid email";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSending(true);

    const res = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res?.ok) {
      setErrors((prev) => ({ ...prev, internal: "Something went wrong" }));
      setSending(false);
      setTimeout(() => {
        setErrors((prev) => ({ ...prev, internal: "" }));
      }, 800);
      return;
    }
    setSending(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        lastname: "",
        email: "",
        message: "",
      });
    }, 800);
  };

  if (sent)
    return (
      <section className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="bg-zinc-900 text-white px-8 py-10 rounded-2xl text-center max-w-sm w-full">
          <p className="text-2xl font-black mb-2">Message sent ✓</p>
          <p className="text-zinc-400 text-sm">
            We'll get back to you within 24 hours.
          </p>
        </div>
      </section>
    );

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full sm:max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-tight">
            Get in touch.
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            We'll get back to you within 24 hours.
          </p>
          {errors.internal && (
            <p className="text-xs text-red-500">{errors.internal}</p>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="flex flex-col gap-6"
        >
          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-widest text-zinc-400"
              >
                First Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="John"
                className="w-full bg-transparent border-b-2 border-zinc-200 focus:border-zinc-900 outline-none py-3 px-2 text-zinc-900 text-sm placeholder:text-zinc-300 transition-colors"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastname"
                className="text-xs font-bold uppercase tracking-widest text-zinc-400"
              >
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full bg-transparent border-b-2 border-zinc-200 focus:border-zinc-900 outline-none py-3 px-2 text-zinc-900 text-sm placeholder:text-zinc-300 transition-colors"
              />
              {errors.lastname && (
                <p className="text-xs text-red-500">{errors.lastname}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-bold uppercase tracking-widest text-zinc-400"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-transparent border-b-2 border-zinc-200 focus:border-zinc-900 outline-none py-3 px-2 text-zinc-900 text-sm placeholder:text-zinc-300 transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-xs font-bold uppercase tracking-widest text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what's on your mind..."
              rows={4}
              className="w-full bg-transparent border-b-2 border-zinc-200 focus:border-zinc-900 outline-none py-3 px-1 text-zinc-900 text-sm placeholder:text-zinc-300 transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
            <p className="text-xs text-zinc-400">All fields are required.</p>
            <button
              type="submit"
              disabled={sending}
              className="bg-zinc-900 hover:bg-zinc-700 disabled:opacity-40 text-white text-sm font-semibold px-5 sm:px-8 py-3 rounded-xl transition-colors"
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
