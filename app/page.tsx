"use client";

import { useState, useRef, useEffect } from "react";

const TOTAL_QUESTIONS = 3;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const answeredCount = messages.filter((m) => m.role === "user").length;

  async function callInterviewApi(nextMessages: ChatMessage[]) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription, messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? "發生未知錯誤");
      }
      setMessages([
        ...nextMessages,
        { role: "assistant", content: data.message },
      ]);
      setIsComplete(Boolean(data.isComplete));
    } catch (e) {
      setError(e instanceof Error ? e.message : "發生未知錯誤");
    } finally {
      setLoading(false);
    }
  }

  async function handleStart() {
    if (!jobDescription.trim() || loading) return;
    setStarted(true);
    await callInterviewApi([]);
  }

  async function handleSend() {
    if (!input.trim() || loading || isComplete) return;
    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: input.trim() },
    ];
    setMessages(nextMessages);
    setInput("");
    await callInterviewApi(nextMessages);
  }

  function handleRestart() {
    setStarted(false);
    setMessages([]);
    setInput("");
    setIsComplete(false);
    setError(null);
    setJobDescription("");
  }

  if (!started) {
    return (
      <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
        <div className="w-full max-w-xl rounded-2xl border border-black/[.08] bg-white p-8 shadow-sm dark:border-white/[.1] dark:bg-zinc-950">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            AI 面試模擬器
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            貼上職缺描述，AI 面試官會依此提出 {TOTAL_QUESTIONS}{" "}
            題面試問題，回答完畢後給予評分與建議。
          </p>
          <textarea
            className="mt-6 h-48 w-full resize-none rounded-lg border border-black/[.1] bg-transparent p-3 text-sm text-zinc-950 outline-none focus:border-zinc-950 dark:border-white/[.15] dark:text-zinc-50 dark:focus:border-zinc-50"
            placeholder="請貼上職缺描述，例如：徵求前端工程師，需熟悉 React、TypeScript..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          {error && (
            <p className="mt-3 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
          <button
            className="mt-4 w-full rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-[#ccc]"
            onClick={handleStart}
            disabled={!jobDescription.trim() || loading}
          >
            {loading ? "面試官準備中..." : "開始面試"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-4 py-8 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-1 flex-col rounded-2xl border border-black/[.08] bg-white shadow-sm dark:border-white/[.1] dark:bg-zinc-950">
        <div className="flex items-center justify-between rounded-t-2xl border-b border-black/[.08] px-5 py-4 dark:border-white/[.1]">
          <div>
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              AI 面試模擬器
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {isComplete
                ? "面試已結束"
                : `第 ${Math.min(
                    answeredCount + 1,
                    TOTAL_QUESTIONS
                  )} / ${TOTAL_QUESTIONS} 題`}
            </p>
          </div>
          <button
            className="rounded-full border border-black/[.1] px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-black/[.04] dark:border-white/[.15] dark:text-zinc-300 dark:hover:bg-white/[.06]"
            onClick={handleRestart}
          >
            重新開始
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-foreground text-background"
                    : "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl bg-zinc-100 px-4 py-2.5 text-sm text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                面試官輸入中...
              </div>
            </div>
          )}
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-black/[.08] p-4 dark:border-white/[.1]">
          {isComplete ? (
            <button
              className="w-full rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              onClick={handleRestart}
            >
              再試一次
            </button>
          ) : (
            <div className="flex gap-2">
              <textarea
                className="h-12 flex-1 resize-none rounded-lg border border-black/[.1] bg-transparent px-3 py-2.5 text-sm text-zinc-950 outline-none focus:border-zinc-950 dark:border-white/[.15] dark:text-zinc-50 dark:focus:border-zinc-50"
                placeholder="輸入你的回答..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={loading}
              />
              <button
                className="rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-[#ccc]"
                onClick={handleSend}
                disabled={!input.trim() || loading}
              >
                送出
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
