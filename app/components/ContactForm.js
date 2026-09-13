"use client";

import { useState } from "react";

const initial = {
  name: "",
  phone: "",
  email: "",
  location: "Delhi NCR",
  category: "Residential",
  budget: "₹2 Cr - ₹5 Cr",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");

  function update(e) {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  }

  async function submit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to submit");
      setStatus("success");
      setForm(initial);
    } catch (error) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-panel success-panel">
        <span className="success-icon">✓</span>
        <div>
          <span className="eyebrow light">Request Received</span>
          <h3>Thank you.</h3>
          <p>Your advisory request has been received. Digithum Consultancy Services will be in touch using the details provided.</p>
          <button className="button button-outline-light" onClick={() => setStatus("idle")}>Submit another request</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-panel">
      <div className="form-head"><h3>Client Advisory Request</h3><span>Confidential</span></div>
      <form onSubmit={submit}>
        <div className="form-row">
          <Field label="Full Name *" name="name" value={form.name} onChange={update} placeholder="Your name" required />
          <Field label="Phone Number *" name="phone" value={form.phone} onChange={update} placeholder="+91 98765 43210" required />
        </div>
        <Field label="Email *" name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required />
        <div className="form-row">
          <Select label="Preferred Location" name="location" value={form.location} onChange={update} options={["Delhi NCR", "Dehradun", "Dubai", "Other / Multi-Market"]} />
          <Select label="Property Category" name="category" value={form.category} onChange={update} options={["Residential", "Commercial", "Industrial", "Multi-Asset"]} />
        </div>
        <Select label="Capital Allocation Band" name="budget" value={form.budget} onChange={update} options={["Below ₹2 Cr", "₹2 Cr - ₹5 Cr", "₹5 Cr - ₹15 Cr", "₹15 Cr+", "Private / Institutional"]} />
        <label className="field-label">Mandate Requirements
          <textarea name="message" value={form.message} onChange={update} placeholder="Tell us about your preferred location, asset type, budget or timeline." rows="4" />
        </label>
        <button className="button button-orange form-submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Submit Advisory Request"} <span>→</span>
        </button>
        {status === "error" && <p className="form-error">The form is not connected or could not be submitted. Please call or email Digithum Consultancy Services directly.</p>}
      </form>
    </div>
  );
}

function Field({ label, ...props }) {
  return <label className="field-label">{label}<input {...props} /></label>;
}

function Select({ label, options, ...props }) {
  return <label className="field-label">{label}<select {...props}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}
