"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import Image from "@/components/AppImage";
import { WhatsAppIcon } from "./SocialIcons";
import { site } from "@/lib/site";

const GREETING = "Hi there! 👋 How can we help you today?";
const DEFAULT_MESSAGE = "Hello, I would like to make an inquiry.";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function send() {
    const text = message.trim() || DEFAULT_MESSAGE;
    const url = `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    setMessage("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-[min(360px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3.5">
              <Image
                src="/images/logo.jpg"
                alt="Skookum Investments Ltd"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">{site.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  Typically replies within minutes
                </p>
              </div>
              <button
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat body */}
            <div
              className="flex flex-col gap-3 px-4 py-5"
              style={{
                backgroundColor: "#0b141a",
                backgroundImage:
                  "radial-gradient(circle at 20% 10%, rgba(37,211,102,0.06), transparent 40%), radial-gradient(circle at 80% 90%, rgba(37,211,102,0.05), transparent 40%)",
              }}
            >
              <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-[#202c33] px-3.5 py-2.5 text-sm leading-relaxed text-white/90 shadow-sm">
                {GREETING}
              </div>
              <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-[#202c33] px-3.5 py-2.5 text-sm leading-relaxed text-white/90 shadow-sm">
                Send us a message below and we&rsquo;ll continue the conversation
                with you on WhatsApp.
              </div>
            </div>

            {/* Composer */}
            <div className="flex items-center gap-2 border-t border-white/10 bg-[#0c0c0c] px-3 py-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#25D366]"
              />
              <button
                onClick={send}
                aria-label="Send on WhatsApp"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105"
              >
                <Send size={17} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us on WhatsApp"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <WhatsAppIcon size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="hidden text-sm font-medium sm:inline">
          {open ? "Close" : "Talk to us"}
        </span>
      </motion.button>
    </div>
  );
}
