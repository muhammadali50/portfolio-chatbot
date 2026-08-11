"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  BrainCircuit,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import SectionDecorations from "@/components/SectionDecorations";
import { suggestedQuestions, welcomeMessage } from "@/data/chatDemo";

const SESSION_STORAGE_KEY = "muhammad-ali-portfolio-chat-session";

function getOrCreateSessionId() {
  const existingSessionId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (existingSessionId) return existingSessionId;

  const sessionId =
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `chat-${Date.now()}-${Math.random().toString(36).slice(2)}`;

  window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  return sessionId;
}

const chatDecorations = [
  {
    name: "AI assistant",
    icon: BrainCircuit,
    className: "left-[3%] top-[9%] text-[#FB6C00]/[0.09]",
    iconClassName: "size-16 -rotate-12 sm:size-24 lg:size-28",
  },
  {
    name: "Chat",
    icon: MessageCircle,
    className: "right-[4%] top-[13%] text-gray-900/[0.07]",
    iconClassName: "size-14 rotate-12 sm:size-20",
  },
  {
    name: "Bot",
    icon: Bot,
    className: "bottom-[13%] left-[5%] hidden text-gray-900/[0.065] sm:block",
    iconClassName: "size-16 rotate-6 lg:size-24",
  },
];

function ChatPanel({ messages, isTyping, onSend, idPrefix, popup = false, onClose }) {
  const [input, setInput] = useState("");
  const messagesContainerRef = useRef(null);
  const hasUserMessage = messages.some((message) => message.role === "user");

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const submitMessage = (event) => {
    event.preventDefault();
    const message = input.trim();

    if (!message || isTyping) return;
    onSend(message);
    setInput("");
  };

  return (
    <div
      className={`flex flex-col overflow-hidden border border-gray-200 bg-white shadow-xl shadow-gray-900/8 ${
        popup
          ? "h-full rounded-[1.75rem]"
          : "h-[42rem] max-h-[78vh] rounded-[2rem]"
      }`}
    >
      <div className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-4 sm:px-5">
        <span className="relative grid size-11 shrink-0 place-items-center rounded-2xl bg-[#FB6C00] text-white shadow-md shadow-[#FB6C00]/20">
          <Bot className="size-5" aria-hidden="true" />
          <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-white bg-[#FB6C00]" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-black tracking-[-0.02em] text-gray-900">
            Muhammad Ali&apos;s Assistant
          </p>
          <p className="mt-0.5 text-xs font-medium text-gray-500">Portfolio assistant · AI chat</p>
        </div>
        {onClose && (
          <button
            id="ask-chat-popup-close"
            type="button"
            onClick={onClose}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#FB6C00] hover:bg-[#FB6C00]/6 hover:text-[#FB6C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB6C00]"
            aria-label="Close Ask About Me chat"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        )}
      </div>

      <div
        ref={messagesContainerRef}
        className="flex-1 space-y-5 overflow-y-auto bg-[#f9fafb] px-4 py-5 sm:px-5"
        aria-live="polite"
        aria-label="Chat conversation"
      >
        {messages.map((message) => {
          const assistant = message.role === "assistant";

          return (
            <div
              key={message.id}
              className={`flex items-end gap-2.5 ${assistant ? "justify-start" : "justify-end"}`}
            >
              {assistant && (
                <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-[#FB6C00]/20 bg-white text-[#FB6C00] shadow-sm">
                  <Bot className="size-4" aria-hidden="true" />
                </span>
              )}
              <div
                className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  assistant
                    ? "rounded-bl-md border border-gray-200 bg-white text-gray-700 shadow-sm"
                    : "rounded-br-md bg-[#FB6C00] text-white shadow-md shadow-[#FB6C00]/15"
                }`}
              >
                {message.content}
              </div>
              {!assistant && (
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-gray-900 text-white">
                  <UserRound className="size-4" aria-hidden="true" />
                </span>
              )}
            </div>
          );
        })}

        {!hasUserMessage && (
          <div className="pt-1">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
              <Sparkles className="size-3.5 text-[#FB6C00]" aria-hidden="true" />
              Suggested questions
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => onSend(question)}
                  disabled={isTyping}
                  className="rounded-full border border-gray-200 bg-white px-3 py-2 text-left text-xs font-semibold leading-4 text-gray-600 transition hover:-translate-y-0.5 hover:border-[#FB6C00]/50 hover:bg-[#FB6C00]/5 hover:text-[#FB6C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB6C00] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {isTyping && (
          <div className="flex items-end gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-[#FB6C00]/20 bg-white text-[#FB6C00] shadow-sm">
              <Bot className="size-4" aria-hidden="true" />
            </span>
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-gray-200 bg-white px-4 py-4 shadow-sm" aria-label="Assistant is typing">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="chat-typing-dot size-1.5 rounded-full bg-[#FB6C00]"
                  style={{ animationDelay: `${dot * 140}ms` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <form onSubmit={submitMessage} className="border-t border-gray-200 bg-white p-3 sm:p-4">
        <label htmlFor={`${idPrefix}-chat-input`} className="sr-only">
          Ask anything about Muhammad Ali
        </label>
        <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-[#f9fafb] p-1.5 transition focus-within:border-[#FB6C00] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#FB6C00]/10">
          <input
            id={`${idPrefix}-chat-input`}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            autoComplete="off"
            placeholder="Ask anything about Muhammad Ali..."
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FB6C00] px-3.5 text-sm font-bold text-white transition hover:bg-[#E86100] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB6C00] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          >
            <span className="hidden sm:inline">Send</span>
            <Send className="size-4" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default function AskAboutMe() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sectionChatReady, setSectionChatReady] = useState(false);
  const [messages, setMessages] = useState([
    { id: "welcome", role: "assistant", content: welcomeMessage },
  ]);
  const sessionIdRef = useRef(null);
  const messageNumberRef = useRef(0);
  const launcherRef = useRef(null);
  const previousFocusRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSectionChatReady(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!popupOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement = previousFocusRef.current;
    const closeButton = document.getElementById("ask-chat-popup-close");
    closeButton?.focus();

    const handleEscape = (event) => {
      if (event.key === "Escape") setPopupOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      previouslyFocusedElement?.focus();
    };
  }, [popupOpen]);

  const sendMessage = async (question) => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || isTyping) return;

    messageNumberRef.current += 1;
    const messageNumber = messageNumberRef.current;

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: `user-${messageNumber}`, role: "user", content: trimmedQuestion },
    ]);
    setIsTyping(true);

    try {
      const sessionId = sessionIdRef.current || getOrCreateSessionId();
      sessionIdRef.current = sessionId;

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedQuestion, sessionId }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || typeof data.reply !== "string" || !data.reply.trim()) {
        throw new Error("Chat request failed");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `assistant-${messageNumber}`,
          role: "assistant",
          content: data.reply.trim(),
        },
      ]);
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `assistant-error-${messageNumber}`,
          role: "assistant",
          content:
            "I’m sorry, the assistant is unavailable right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="ask-about-me"
        aria-labelledby="ask-about-me-heading"
        className="portfolio-section relative scroll-mt-20 overflow-x-clip bg-transparent px-5 pb-32 pt-24 sm:px-8 sm:pb-36 sm:pt-28 lg:px-12 lg:pb-40 lg:pt-32"
      >
        <SectionDecorations items={chatDecorations} />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(420px,1.18fr)] lg:gap-16 xl:gap-20">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gray-600 sm:text-sm">
              <span className="h-px w-8 bg-[#FB6C00]" />
              AI Assistant
            </p>
            <h2
              id="ask-about-me-heading"
              className="mt-5 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.06em] text-gray-900"
            >
              Ask About
              <span className="block text-[#FB6C00]">Me.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Want to know more about my skills, education, experience, or
              technologies I work with? Ask my AI assistant.
            </p>

            <div className="mt-9 rounded-3xl border border-[#FB6C00]/20 bg-white p-5 shadow-sm shadow-gray-900/5">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#FB6C00]/8 text-[#FB6C00]">
                  <Sparkles className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-gray-900">Portfolio-focused answers</p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Ask about Muhammad Ali&apos;s education, skills, certifications,
                    AI and web technologies, automation, or contact details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {popupOpen || !sectionChatReady ? (
              <div
                className="h-[42rem] max-h-[78vh] rounded-[2rem] border border-gray-200 bg-white"
                aria-hidden="true"
              />
            ) : (
              <ChatPanel
                messages={messages}
                isTyping={isTyping}
                onSend={sendMessage}
                idPrefix="section"
              />
            )}
          </div>
        </div>
      </section>

      {popupOpen && (
        <>
            <button
              type="button"
              aria-label="Close Ask About Me chat"
              onClick={() => setPopupOpen(false)}
              className="fixed inset-0 z-[70] cursor-default bg-gray-900/25"
            />
            <div
              id="ask-about-me-popup"
              role="dialog"
              aria-modal="true"
              aria-label="Ask About Muhammad Ali"
              className="fixed inset-x-2 bottom-2 top-20 z-[80] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:top-auto sm:h-[min(42rem,calc(100vh-8rem))] sm:w-[26rem]"
            >
              <ChatPanel
                messages={messages}
                isTyping={isTyping}
                onSend={sendMessage}
                idPrefix="popup"
                popup
                onClose={() => setPopupOpen(false)}
              />
            </div>
        </>
      )}

      {!popupOpen && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => {
            previousFocusRef.current = launcherRef.current;
            setPopupOpen(true);
          }}
          aria-expanded="false"
          aria-controls="ask-about-me-popup"
          className="fixed bottom-5 right-5 z-[60] inline-flex min-h-13 items-center gap-2.5 rounded-full bg-[#FB6C00] px-5 text-sm font-bold text-white shadow-lg shadow-[#FB6C00]/20 transition hover:-translate-y-0.5 hover:bg-[#E86100] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB6C00]"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Ask About Me
        </button>
      )}
    </>
  );
}
