"use client";

import React, { useState } from "react";
import { COMPANY } from "@/data/config";
import { PRODUCTS } from "@/data/products";

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  product: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", company: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Product Enquiry${form.product ? `: ${form.product}` : ""} — ${form.name}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCompany: ${form.company}\nProduct of Interest: ${form.product}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#0f172a]/40 focus:ring-2 focus:ring-[#0f172a]/8 transition-all duration-200";

  return (
    <section id="contact" className="relative bg-white overflow-hidden py-20 lg:py-28">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(15,23,42,0.03) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,164,53,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-4">Contact Us</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Get in <span className="gold-shimmer">Touch</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-[15px]">
            Have a product enquiry or need technical guidance? Reach out — our team is available 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Left — contact details */}
          <div className="lg:col-span-2 space-y-4">

            {/* WhatsApp */}
            <a
              href={COMPANY.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full rounded-2xl p-4 sm:p-5 transition-all duration-200 shadow-md hover:shadow-lg group hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #25D366, #1ab356)" }}
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div>
                <div className="text-white font-bold text-sm">Chat on WhatsApp</div>
                <div className="text-white/80 text-xs mt-0.5">+91 98429 34524</div>
              </div>
              <svg className="w-4 h-4 text-white ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Contact info panel */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #0f172a, #1a2744)", color: "#d4a435" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0f172a] text-[10px] uppercase tracking-widest font-bold mb-0.5">Address</div>
                  <a href={COMPANY.googleMapsLink} target="_blank" rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-[#0f172a] transition-colors leading-snug">
                    {COMPANY.address.full}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #0f172a, #1a2744)", color: "#d4a435" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0f172a] text-[10px] uppercase tracking-widest font-bold mb-0.5">Phone</div>
                  <a href={COMPANY.contact.phoneTel} className="text-gray-600 text-sm hover:text-[#0f172a] transition-colors">
                    {COMPANY.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #0f172a, #1a2744)", color: "#d4a435" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0f172a] text-[10px] uppercase tracking-widest font-bold mb-0.5">Email</div>
                  <a href={`mailto:${COMPANY.contact.email}`} className="text-gray-600 text-sm hover:text-[#0f172a] transition-colors break-all">
                    {COMPANY.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-gray-500 text-sm">Available {COMPANY.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-black text-[#0f172a] mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Send an Enquiry
              </h3>
              <p className="text-gray-400 text-sm mb-6">Fill in the form and we'll get back to you promptly.</p>

              {submitted && (
                <div className="mb-5 p-4 rounded-xl text-[#0f172a] text-sm font-medium border border-[#0f172a]/10"
                  style={{ background: "linear-gradient(135deg, #f0f4ff, #e8edf8)" }}
                >
                  ✓ Opening your email client with the pre-filled enquiry. Thank you!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Name *</label>
                    <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Email</label>
                    <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Company</label>
                    <input id="contact-company" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-product" className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Product of Interest</label>
                  <select id="contact-product" name="product" value={form.product} onChange={handleChange} className={inputClass}>
                    <option value="">Select a product...</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Other / General Enquiry">Other / General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements, quantities, or application..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-sm tracking-wide text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 mt-2"
                  style={{ background: "linear-gradient(135deg, #0f172a, #1a2744)", border: "1px solid rgba(212,164,53,0.2)" }}
                >
                  Send Enquiry →
                </button>

                <p className="text-gray-400 text-xs text-center">
                  This will open your email client with a pre-filled message. Alternatively, WhatsApp or call us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
