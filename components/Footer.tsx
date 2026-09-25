const productLinks = [
  { href: "/#features", label: "服務特色" },
  { href: "/#how-it-works", label: "使用流程" },
  { href: "/#faq", label: "常見問題" },
  { href: "/interview", label: "開始模擬面試" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] bg-zinc-50 dark:border-white/[.1] dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
                AI
              </span>
              <span className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                面試模擬器
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              貼上任何職缺描述，AI 面試官即會依內容提出對應問題，模擬真實面試情境，並在結束後給予完整評分與建議，讓你在正式面試前先做好準備。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              產品
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              關於服務
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>由 AI 語言模型驅動</li>
              <li>資料僅用於當次面試流程</li>
              <li>持續優化題目與評分品質</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/[.08] pt-6 sm:flex-row dark:border-white/[.1]">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} AI 面試模擬器. All rights
            reserved.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Powered by AI &middot; Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
