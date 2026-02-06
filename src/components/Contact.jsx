"use client";

import { useState } from "react";
import { getFirebase } from "@/lib/firebase";
import { myEmail } from "@/lib/constants";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function onEmail(e) {
    setEmail((prev) => {
      if (
        !e.target.value ||
        !e.target.value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
      ) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      return e.target.value;
    });
  }

  function onMessage(e) {
    setMessage((prev) => {
      if (!e.target.value) {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
      return e.target.value;
    });
  }

  function submit() {
    if (submitting) {
      return;
    }
    if (!email || emailError) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }
    if (!message || messageError) {
      setMessageError(true);
      return;
    } else {
      setMessageError(false);
    }

    setSubmitting(true);

    const fb = getFirebase();
    if (fb) {
      fb.updateDoc(fb.doc(fb.db, "Views", fb.docRef.id), {
        contact: fb.arrayUnion({
          email: email,
          message: message,
        }),
      })
        .then(() => {
          setSubmitSuccess(true);
          setTimeout(() => {
            clear();
          }, 3000);
        })
        .catch(() => {
          setSubmitError(true);
        });
    } else {
      setSubmitError(true);
      setSubmitting(false);
    }
  }

  function clear() {
    setEmail("");
    setMessage("");
    setSubmitError(false);
    setSubmitSuccess(false);
    setSubmitting(false);
  }

  return (
    <div id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:flex">
      <div className="flex-1">
        <div className="font-bold text-2xl sm:text-4xl mb-4">
          Anything else? <br /> Let's talk
        </div>
        <span className="text-white/50">
          Reach out via Email:{" "}
          <a
            href={"mailto:" + myEmail}
            className="transition-colors hover:text-white/80"
          >
            {myEmail}
          </a>
        </span>
      </div>
      <div className="felx flex-col flex-1 space-y-2 mt-10">
        <div className="">
          <input
            value={email}
            onChange={onEmail}
            className={`w-full bg-secondary p-3 rounded-md text-white placeholder:text-white/50 hover:outline-none active:outline-none border border-transparent focus:border-white/80 focus:outline-none disabled:opacity-50`}
            type="text"
            placeholder="Email"
            disabled={submitting}
          />
          <span
            className={`text-sm text-red-700 ${
              emailError ? "opacity-1" : "opacity-0"
            }`}
          >
            Enter a valid Email*
          </span>
        </div>
        <div>
          <textarea
            value={message}
            onChange={onMessage}
            className={`bg-secondary w-full p-3 rounded-md text-white placeholder:text-white/50 hover:outline-none active:outline-none border border-transparent focus:border-white/80 focus:outline-none resize-none disabled:opacity-50`}
            placeholder="Message"
            rows="8"
            disabled={submitting}
          ></textarea>
          <span
            className={`text-sm text-red-700 ${
              messageError ? "opacity-1" : "opacity-0"
            }`}
          >
            Enter the message
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {submitSuccess ? (
              <span className="text-theme">Thank you. Message received.</span>
            ) : null}
            {submitError ? (
              <span className={`text-red-700`}>Something went wrong.</span>
            ) : null}
          </div>
          <button
            onClick={submit}
            className="rounded-md py-3 px-10 text-white/50 transition-colors hover:text-white bg-secondary disabled:opacity-50"
            disabled={submitting}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
