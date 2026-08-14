export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 4000;
const MAX_SESSION_ID_LENGTH = 200;
const REQUEST_TIMEOUT_MS = 10000;
const FALLBACK_REPLY =
  "Sorry, the AI assistant is temporarily unavailable. Please try again later.";

function fallbackResponse() {
  return Response.json({ reply: FALLBACK_REPLY });
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function extractReply(data) {
  const items = Array.isArray(data) ? data : [data];

  for (const item of items) {
    if (typeof item === "string" && item.trim()) return item.trim();
    if (!item || typeof item !== "object") continue;

    const possibleReplies = [
      item.reply,
      item.output,
      item.answer,
      item.response,
      item.text,
      item.message,
      item.data?.reply,
      item.data?.output,
      item.data?.answer,
      item.data?.response,
      item.data?.text,
    ];

    const reply = possibleReplies.find(
      (value) => typeof value === "string" && value.trim(),
    );

    if (reply) return reply.trim();
  }

  return "";
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const message = clean(body?.message);
  const sessionId = clean(body?.sessionId);

  if (!message) {
    return Response.json(
      { error: "A message is required." },
      { status: 400 },
    );
  }

  if (
    message.length > MAX_MESSAGE_LENGTH ||
    sessionId.length > MAX_SESSION_ID_LENGTH
  ) {
    return Response.json(
      { error: "The chat request is too long." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.N8N_CHAT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("[chat] N8N chat integration is not configured.");
    return fallbackResponse();
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error(`[chat] n8n returned HTTP ${response.status}.`);
      return fallbackResponse();
    }

    let data;

    try {
      data = await response.json();
    } catch {
      console.error("[chat] n8n returned an invalid JSON response.");
      return fallbackResponse();
    }

    const reply = extractReply(data);

    if (!reply) {
      console.error("[chat] n8n response did not include an assistant reply.");
      return fallbackResponse();
    }

    return Response.json({ reply });
  } catch (error) {
    const reason =
      error instanceof Error && error.name === "AbortError"
        ? "n8n request timed out."
        : "Unable to connect to the n8n workflow.";
    console.error(`[chat] ${reason}`);
    return fallbackResponse();
  } finally {
    clearTimeout(timeoutId);
  }
}
