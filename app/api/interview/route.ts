const TOTAL_QUESTIONS = 3;
const MODEL = "gpt-4o-mini";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function buildSystemPrompt(jobDescription: string, answeredCount: number) {
  if (answeredCount >= TOTAL_QUESTIONS) {
    return `你是一位專業的面試官，剛完成針對以下職缺的 ${TOTAL_QUESTIONS} 題模擬面試：

【職缺描述】
${jobDescription}

請根據完整的問答內容，給予這位應徵者總體評分與建議，並以下列格式輸出（請勿加入其他前言或結語）：

總分: X/10

優點:
- ...
- ...

待加強:
- ...
- ...

建議:
...`;
  }

  return `你是一位專業的面試官，正在為以下職缺進行模擬面試：

【職缺描述】
${jobDescription}

請根據職缺內容與先前的問答，提出下一個切合職缺技能與經驗、有深度的面試問題。這是第 ${
    answeredCount + 1
  } 題（共 ${TOTAL_QUESTIONS} 題）。只輸出這一題的問題文字本身，不要加上題號、前綴或其他說明。`;
}

export async function POST(request: Request) {
  const apiKey = request.headers.get("x-openai-api-key")?.trim();
  if (!apiKey) {
    return Response.json(
      { error: "請先在「API 設定」頁面輸入你的 OpenAI API Key。" },
      { status: 401 }
    );
  }

  let body: { jobDescription?: string; messages?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "請求格式錯誤。" }, { status: 400 });
  }

  const jobDescription = body.jobDescription?.trim();
  const messages = Array.isArray(body.messages) ? body.messages : [];

  if (!jobDescription) {
    return Response.json({ error: "請提供職缺描述。" }, { status: 400 });
  }

  const answeredCount = messages.filter((m) => m.role === "user").length;
  const isComplete = answeredCount >= TOTAL_QUESTIONS;
  const systemPrompt = buildSystemPrompt(jobDescription, answeredCount);

  const openaiMessages = [
    { role: "system", content: systemPrompt },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  let res: Response;
  try {
    res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: openaiMessages,
        temperature: 0.7,
      }),
    });
  } catch {
    return Response.json(
      { error: "無法連線至 OpenAI，請稍後再試。" },
      { status: 502 }
    );
  }

  if (!res.ok) {
    if (res.status === 401) {
      return Response.json(
        { error: "OpenAI API Key 無效，請至「API 設定」頁面確認並重新輸入。" },
        { status: 401 }
      );
    }
    const errText = await res.text();
    return Response.json(
      { error: `OpenAI 回應錯誤: ${errText}` },
      { status: res.status }
    );
  }

  const data = await res.json();
  const message: string | undefined = data?.choices?.[0]?.message?.content;

  if (!message) {
    return Response.json(
      { error: "OpenAI 未回傳有效內容。" },
      { status: 502 }
    );
  }

  return Response.json({
    message: message.trim(),
    isComplete,
    questionNumber: Math.min(answeredCount + 1, TOTAL_QUESTIONS),
    totalQuestions: TOTAL_QUESTIONS,
  });
}
