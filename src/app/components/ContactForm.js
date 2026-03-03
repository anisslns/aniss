"use client";
import DescriptionText from "./DescriptionText";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_y9qkeia",
        "template_7ubbt1u",
        form,
        "VLumb36AFm5nGTtJv"
      );

      form.reset();
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="p-4 flex items-center gap-2 bg-[#f5fbf7] text-[#008a1e] rounded-lg">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8.5 12.5L10.5 14.5L15.5 9.5"
              stroke="#008a1e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#008a1e"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        <span>Message sent! I’ll be in touch shortly.</span>{" "}
      </div>
    );
  }
  if (error) {
    return (
      <div className="p-4 flex items-center gap-2 bg-[#fff5f5] text-[#c53030] rounded-lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 8v4m0 4h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <span>Something went wrong. Please try again.</span>
      </div>
    );
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <DescriptionText className="mb-9" text="Ready to automate your business processes? Fill out the form below with your use case, and I'll build a custom n8n workflow that eliminates your manual work." />

      <div className="max-md:flex-col flex w-full gap-4 mb-4">
        <input
          required
          className="flex-1 border-gray-100 rounded-lg border-solid border p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          required
          className="flex-1 border-gray-100 rounded-lg border-solid border p-2"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          name="email"
          placeholder="Work email"
        />
      </div>

      <input
        className="w-full mb-4 border-gray-100 rounded-lg border-solid border p-2"
        type="text"
        name="company"
        placeholder="Company"
      />
      <textarea
        required
        className="w-full mb-4 border-gray-100 rounded-lg border-solid border p-2"
        name="message"
        placeholder="Tell me what you want to automate"
        rows={5}
      />
      <Button
        text={
          loading ? <CircularProgress color="inherit" size="16px" /> : "Send"
        }
        type="submit"
        disabled={loading}
        className="w-full bg-[#1e1e28]"
        textColor="text-white"
      />
    </form>
  );
}
