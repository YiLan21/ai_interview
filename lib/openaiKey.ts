"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "ai-interview:openai-api-key";
const CHANGE_EVENT = "ai-interview:openai-api-key-change";

function readKey(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function notifyChange() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function getStoredOpenAIKey(): string {
  return readKey();
}

export function setStoredOpenAIKey(key: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, key);
  } catch {
    // localStorage unavailable (e.g. private browsing) — nothing to do
  }
  notifyChange();
}

export function clearStoredOpenAIKey() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage unavailable — nothing to do
  }
  notifyChange();
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getServerSnapshot() {
  return "";
}

/** Reactive read of the stored OpenAI key; updates when it changes in this or another tab. */
export function useStoredOpenAIKey(): string {
  return useSyncExternalStore(subscribe, readKey, getServerSnapshot);
}
