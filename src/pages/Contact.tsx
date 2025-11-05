import React, { useState, useRef } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState<null | string>(null);
  const [touched, setTouched] = useState({ firstName: false, lastName: false, email: false, message: false });
  const [loading, setLoading] = useState(false); // Add loading state
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFirstNameValid = form.firstName.trim().length > 0;
  const isLastNameValid = form.lastName.trim().length > 0;
  const isEmailValid = validateEmail(form.email);
  const isMessageValid = form.message.trim().length >= 30;
  const allValid = isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid;
  const minMessageLength = 30;
  const messageCharsLeft = minMessageLength - form.message.trim().length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "message" && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, message: true });
    
    if (!allValid) {
      setStatus("Please fill in all fields correctly.");
      return;
    }
    
    setStatus(null);
    setLoading(true);
    
    try {
      // Simplified API URL for Vercel deployment
      const res = await fetch('/api/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus("Message sent successfully! ✅");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
        setTouched({ firstName: false, lastName: false, email: false, message: false });
      } else {
        setStatus(`Failed to send message: ${data.error || 'Unknown error'}`);
      }
    } catch (err: any) {
      console.error('Contact form error:', err);
      setStatus(`Failed to send message: ${err?.message || 'Network error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          input[type="email"] {
            background-color: transparent !important;
          }
          input[type="email"]:-webkit-autofill,
          input[type="email"]:-webkit-autofill:focus,
          input[type="email"]:-webkit-autofill:hover,
          input[type="email"]:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
            box-shadow: 0 0 0px 1000px transparent inset !important;
            background-color: transparent !important;
            color: #fff !important;
            -webkit-text-fill-color: #fff !important;
            caret-color: #fff !important;
            transition: background-color 9999s ease-in-out 0s, color 0s !important;
          }
        `}
      </style>
      <section className="flex flex-col items-center justify-center min-h-screen px-4" style={{ backgroundColor: 'transparent' }}>
        <h1
          className="text-4xl font-bold mb-4 text-white"
          style={{
            animation: "colorPulse 3s infinite",
            color: "#32004f",
            display: "inline-block"
          }}
        >
          Contact Me
        </h1>
        <p className="text-lg text-white max-w-xl text-center">
          Send me a quick message below and I will get back to you ASAP!
        </p>
        <form className="w-full max-w-md mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="flex gap-4">
            <input
              className={`w-full px-4 py-2 rounded border-2 bg-transparent text-white placeholder-[#dfa2e3] focus:outline-none transition-all ${
                touched.firstName && form.firstName !== "" && !isFirstNameValid
                  ? "border-red-500"
                  : "border-[#5b048a] focus:border-[#dfa2e3]"
              }`}
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <input
              className={`w-full px-4 py-2 rounded border-2 bg-transparent text-white placeholder-[#dfa2e3] focus:outline-none transition-all ${
                touched.lastName && form.lastName !== "" && !isLastNameValid
                  ? "border-red-500"
                  : "border-[#5b048a] focus:border-[#dfa2e3]"
              }`}
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <input
            className={`w-full px-4 py-2 rounded border-2 bg-transparent text-white placeholder-[#dfa2e3] focus:outline-none transition-all ${
              touched.email && form.email !== "" && !isEmailValid
                ? "border-red-500"
                : "border-[#5b048a] focus:border-[#dfa2e3]"
            }`}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <div className="relative">
            <textarea
              ref={textareaRef}
              className={`w-full px-4 py-2 rounded border-2 bg-transparent text-white placeholder-[#dfa2e3] focus:outline-none transition-all ${
                touched.message && form.message !== "" && !isMessageValid
                  ? "border-red-500"
                  : "border-[#5b048a] focus:border-[#dfa2e3]"
              }`}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              rows={3}
              style={{ resize: "none", overflow: "hidden" }}
            />
            <span
              className="absolute right-2 bottom-2 text-xs px-2 py-1 rounded bg-[#32004f] text-[#dfa2e3] pointer-events-none"
              style={{ opacity: 0.85 }}
            >
              {form.message.trim().length < minMessageLength
                ? `${messageCharsLeft} more character${messageCharsLeft === 1 ? "" : "s"} required`
                : "Ready to send!"}
            </span>
          </div>
          <button
            className={`max-w-xs mx-auto block py-2 px-6 rounded bg-[#5b048a] text-white font-bold transition-all ${
              allValid && !loading ? "opacity-100 cursor-pointer hover:bg-[#32004f]" : "opacity-40 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!allValid || loading}
          >
            <span className="px-2 py-1">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </button>
          {status && <p className="text-center text-white mt-2">{status}</p>}
        </form>
      </section>
    </>
  );
};

export default Contact;
