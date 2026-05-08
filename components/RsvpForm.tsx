"use client";

import { useState, KeyboardEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function RsvpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit() {
    if (status === "loading") return;
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data: { ok: boolean; error?: string } = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  function onEnterKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    }
  }

  return (
    <div className="bg-white p-4 position-relative rsvp-form">
      <div className="row">
        <div className="col-12 mb-3 position-relative">
          <input
            type="text"
            id="guest-name"
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={onEnterKey}
            disabled={status === "loading"}
            className="border-0 border-bottom p-3 w-100"
            placeholder="Your Full Name"
          />
        </div>
        <div className="col-12 mb-3 position-relative">
          <input
            type="email"
            id="guest-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={onEnterKey}
            disabled={status === "loading"}
            className="border-0 border-bottom p-3 w-100"
            placeholder="Your Email Address"
          />
        </div>
        <div className="col-12">
          <button
            type="button"
            onClick={submit}
            className="btn mx-auto"
            disabled={status === "loading"}
          >
            <span>{status === "loading" ? "Sending…" : "Submit"}</span>
          </button>
        </div>
        <div className="col-12 mt-3 text-center" aria-live="polite">
          {status === "success" && (
            <p className="m-0" style={{ color: "#2e7d32" }}>
              Thanks! Your RSVP was received.
            </p>
          )}
          {status === "error" && (
            <p className="m-0" style={{ color: "#c62828" }}>
              {errorMessage}
            </p>
          )}
        </div>
      </div>
      <img
        src="/img/shape-heart-balloon-mrs.svg"
        alt=""
        className="shape-heart-balloon bottom-0 d-none d-sm-block position-absolute start-0 z-2"
      />
      <img
        src="/img/shape-heart-balloon-mr.svg"
        alt=""
        className="shape-heart-balloon bottom-0 d-none d-sm-block end-0 position-absolute translate-middle-y z-2"
      />
    </div>
  );
}
