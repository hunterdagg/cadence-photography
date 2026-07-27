"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "");
    formData.append("subject", "New inquiry from Cadence Photography site");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-charcoal/20 px-6 py-10 text-center">
        <p className="font-display text-xl italic text-charcoal">Message sent.</p>
        <p className="mt-2 font-body text-sm text-charcoal/70">
          Thanks for reaching out. I typically reply within 1 to 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
        />
      </div>

      <div>
        <label htmlFor="sessionType" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
          Session type
        </label>
        <select
          id="sessionType"
          name="sessionType"
          className="mt-2 w-full rounded-sm border border-charcoal/20 bg-paper px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
        >
          <option>Couples session</option>
          <option>Family session</option>
          <option>Event coverage</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="sessionLength" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
          Session length
        </label>
        <select
          id="sessionLength"
          name="sessionLength"
          className="mt-2 w-full rounded-sm border border-charcoal/20 bg-paper px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
        >
          <option>30 to 45 minutes (Mini Session)</option>
          <option>Up to 90 minutes (Full Session)</option>
          <option>Full day (Event Coverage)</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-charcoal/75">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 font-body text-charcoal outline-none focus-visible:border-brass"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-charcoal px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-brass disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="font-mono text-[11px] text-red-700">
          Something went wrong sending that. Try again, or email directly.
        </p>
      )}
    </form>
  );
}
