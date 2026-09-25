import Link from "next/link";

const features = [
  {
    title: "職缺客製化提問",
    description:
      "貼上任何職缺描述，AI 會自動分析所需技能與經驗，量身設計對應的面試問題。",
    icon: (
      <path d="M9 12h6m-6 4h6M9 8h1M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
    ),
  },
  {
    title: "真實對話式面試",
    description:
      "採用自然語言逐題問答，模擬真人面試官的節奏與追問方式，讓練習更貼近實戰。",
    icon: (
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.3-3.9A7.9 7.9 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
  {
    title: "完整評分報告",
    description:
      "面試結束後立即產出總分、優點與待加強項目，並提供具體的改進建議。",
    icon: (
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    title: "無限次重新挑戰",
    description:
      "一鍵重新開始，針對不同職缺反覆練習，累積面試經驗與臨場反應。",
    icon: (
      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: "免費且免安裝",
    description:
      "開啟瀏覽器即可使用，不需註冊帳號、不需付費，隨時隨地開始準備。",
    icon: (
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 2v8m0 0v2m0-2c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "隱私優先",
    description: "面試內容僅用於當次流程產生回饋，不會被用於其他用途。",
    icon: (
      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "貼上職缺描述",
    description: "複製貼上任何職缺的工作內容、技能需求或條件說明。",
  },
  {
    number: "02",
    title: "回答 AI 提問",
    description:
      "AI 面試官會依職缺內容逐題提問，你可以用自己的話自然作答。",
  },
  {
    number: "03",
    title: "取得評分建議",
    description: "完成問答後，立即取得總分、優點與待加強建議。",
  },
];

const faqs = [
  {
    q: "使用這個服務需要付費嗎？",
    a: "不需要，AI 面試模擬器目前完全免費使用，無需訂閱或付費。",
  },
  {
    q: "需要註冊帳號才能使用嗎？",
    a: "不需要，開啟頁面貼上職缺描述即可立即開始模擬面試。",
  },
  {
    q: "支援哪些類型的職缺？",
    a: "只要能提供職缺描述文字，不論是工程、設計、行銷或其他職務都可以使用。",
  },
  {
    q: "面試內容會被保存嗎？",
    a: "對話內容僅用於產生當次的面試流程與評分建議，不會被另作他用。",
  },
];

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
        >
          <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-br from-indigo-400/30 via-violet-400/20 to-transparent blur-3xl sm:h-[480px] sm:w-[480px] dark:from-indigo-500/20 dark:via-violet-500/10" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/[.08] bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-600 shadow-sm dark:border-white/[.1] dark:bg-zinc-900 dark:text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                AI 驅動．完全免費
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl sm:leading-tight dark:text-zinc-50">
                讓 AI 面試官，
                <br className="hidden sm:block" />
                陪你練到準備好為止
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                貼上職缺描述，AI
                會依內容量身設計面試問題、進行對話式模擬面試，並在結束後給你具體的評分與改進建議。
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/interview"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
                >
                  立即開始模擬面試
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-black/[.1] px-7 py-3.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/[.04] dark:border-white/[.15] dark:text-zinc-200 dark:hover:bg-white/[.06]"
                >
                  了解服務內容
                </a>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-black/[.08] pt-8 dark:border-white/[.1]">
                <div>
                  <dt className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                    3 分鐘
                  </dt>
                  <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    快速完成一輪練習
                  </dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                    任何職缺
                  </dt>
                  <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    自動客製化問題
                  </dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                    免費
                  </dt>
                  <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    無需註冊即可使用
                  </dd>
                </div>
              </dl>
            </div>

            {/* Product mockup */}
            <div className="relative">
              <div className="rounded-2xl border border-black/[.08] bg-white p-2 shadow-xl shadow-zinc-900/5 dark:border-white/[.1] dark:bg-zinc-900">
                <div className="rounded-xl border border-black/[.06] bg-zinc-50 dark:border-white/[.08] dark:bg-zinc-950">
                  <div className="flex items-center gap-1.5 border-b border-black/[.06] px-4 py-3 dark:border-white/[.08]">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      AI 面試模擬器
                    </span>
                  </div>
                  <div className="space-y-3 px-4 py-5">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl bg-white px-4 py-2.5 text-sm leading-relaxed text-zinc-800 shadow-sm dark:bg-zinc-900 dark:text-zinc-100">
                        請分享一個你曾經解決過的技術難題，以及你的處理方式。
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl bg-foreground px-4 py-2.5 text-sm leading-relaxed text-background">
                        之前系統在高流量時經常延遲，我重新設計了快取策略...
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl bg-white px-4 py-2.5 text-sm leading-relaxed text-zinc-800 shadow-sm dark:bg-zinc-900 dark:text-zinc-100">
                        很好的實例，接下來想請問...
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-black/[.06] px-4 py-3 dark:border-white/[.08]">
                    <div className="flex items-center justify-between rounded-full border border-black/[.08] bg-white px-4 py-2 text-xs text-zinc-400 dark:border-white/[.1] dark:bg-zinc-900">
                      輸入你的回答...
                      <span className="rounded-full bg-foreground px-3 py-1 text-[11px] font-medium text-background">
                        送出
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-black/[.08] bg-white px-5 py-4 shadow-lg sm:block dark:border-white/[.1] dark:bg-zinc-900">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  總分
                </p>
                <p className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                  8.5<span className="text-sm text-zinc-400">/10</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Services */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            服務特色
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            專為求職者打造的面試練習服務，從提問到評分，一次幫你準備到位。
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-black/[.08] bg-white p-6 transition-shadow hover:shadow-md dark:border-white/[.1] dark:bg-zinc-950"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-950 dark:text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-black/[.08] bg-zinc-50 py-20 dark:border-white/[.1] dark:bg-zinc-950"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              使用流程
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              三個步驟，隨時開始一場屬於你的模擬面試。
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-0">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-950 shadow-sm dark:bg-zinc-900 dark:text-zinc-50">
                    {step.number}
                  </span>
                  <div className="sm:mt-5">
                    <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-12 hidden h-px w-full -translate-x-6 bg-black/[.08] sm:block sm:left-auto sm:right-0 sm:top-6 sm:w-[calc(100%-3rem)] sm:translate-x-6 dark:bg-white/[.1]" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/interview"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              立即體驗
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            常見問題
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-black/[.08] bg-white px-5 py-4 dark:border-white/[.1] dark:bg-zinc-950"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-950 dark:text-zinc-50">
                {faq.q}
                <svg
                  className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-violet-600/20"
          />
          <h2 className="relative text-2xl font-semibold tracking-tight text-background sm:text-3xl">
            準備好進行下一場面試了嗎？
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-background/70 sm:text-base">
            現在就開始你的第一場 AI 模擬面試，免費、免註冊，3 分鐘立即上手。
          </p>
          <Link
            href="/interview"
            className="relative mt-8 inline-flex items-center justify-center rounded-full bg-background px-8 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            免費開始模擬面試
          </Link>
        </div>
      </section>
    </div>
  );
}
