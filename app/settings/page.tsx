"use client";

import Link from "next/link";
import { useState } from "react";
import {
  clearStoredOpenAIKey,
  setStoredOpenAIKey,
  useStoredOpenAIKey,
} from "@/lib/openaiKey";

function maskKey(key: string) {
  if (key.length <= 11) return "•".repeat(key.length);
  return `${key.slice(0, 7)}${"•".repeat(key.length - 11)}${key.slice(-4)}`;
}

function KeyForm({
  savedKey,
  onSave,
  onClear,
}: {
  savedKey: string;
  onSave: (key: string) => void;
  onClear: () => void;
}) {
  const [key, setKey] = useState(savedKey);
  const trimmed = key.trim();

  return (
    <>
      <label
        htmlFor="openai-api-key"
        className="mt-6 block text-sm font-medium text-zinc-950 dark:text-zinc-50"
      >
        OpenAI API Key
      </label>
      <input
        id="openai-api-key"
        type="password"
        autoComplete="off"
        spellCheck={false}
        className="mt-2 w-full rounded-lg border border-black/[.1] bg-transparent p-3 font-mono text-sm text-zinc-950 outline-none focus:border-zinc-950 dark:border-white/[.15] dark:text-zinc-50 dark:focus:border-zinc-50"
        placeholder="sk-..."
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />

      <div className="mt-4 flex gap-3">
        <button
          className="flex-1 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-[#ccc]"
          onClick={() => onSave(trimmed)}
          disabled={!trimmed || trimmed === savedKey}
        >
          儲存金鑰
        </button>
        <button
          className="rounded-full border border-black/[.1] px-5 py-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-black/[.04] disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/[.15] dark:text-zinc-300 dark:hover:bg-white/[.06]"
          onClick={onClear}
          disabled={!savedKey}
        >
          移除
        </button>
      </div>
    </>
  );
}

export default function SettingsPage() {
  const savedKey = useStoredOpenAIKey();
  const [status, setStatus] = useState<"idle" | "saved" | "cleared">("idle");

  function handleSave(trimmed: string) {
    if (!trimmed) return;
    setStoredOpenAIKey(trimmed);
    setStatus("saved");
  }

  function handleClear() {
    clearStoredOpenAIKey();
    setStatus("cleared");
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <div className="w-full max-w-xl rounded-2xl border border-black/[.08] bg-white p-8 shadow-sm dark:border-white/[.1] dark:bg-zinc-950">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          返回首頁
        </Link>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          API 金鑰設定
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          本服務採用 BYOK（Bring Your Own Key）模式：你需要提供自己的 OpenAI
          API Key 才能開始模擬面試。金鑰只會儲存在這個瀏覽器（localStorage），
          並在每次呼叫面試 API 時一併送出，我們不會在伺服器保存或記錄你的金鑰。
        </p>

        <KeyForm
          key={savedKey}
          savedKey={savedKey}
          onSave={handleSave}
          onClear={handleClear}
        />

        {status === "saved" && (
          <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">
            已儲存至此瀏覽器。
          </p>
        )}
        {status === "cleared" && (
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            已移除金鑰。
          </p>
        )}

        {savedKey && (
          <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
            目前已儲存：<span className="font-mono">{maskKey(savedKey)}</span>
          </p>
        )}

        <p className="mt-6 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          還沒有 API Key？前往{" "}
          <a
            href="https://platform.openai.com/api-keys"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            OpenAI 官方頁面
          </a>{" "}
          申請。實際使用費用將依 OpenAI 帳戶用量計算，本服務不會另外收費。
        </p>
      </div>
    </div>
  );
}
