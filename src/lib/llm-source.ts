/**
 * Ziyaretçinin bir yapay zekâ sohbetinden (ChatGPT, Perplexity, Copilot…)
 * gelip gelmediğini tespit eder.
 *
 * Neden gerekli: GA4 bu trafiği "Referral" kovasına atıyor ve tek tek kaynak
 * aramak gerekiyor; Clarity'de ise referrer filtresi var ama LLM'leri tek
 * başlık altında toplamıyor. Burada tespit edilen kaynak Clarity'ye özel
 * etiket olarak basılır, böylece "LLM'den gelenler" diye filtreleyip
 * oturum kayıtları izlenebilir — bkz. LlmSourceTag bileşeni.
 *
 * Saf fonksiyon: DOM'a dokunmaz, referrer ve query string dışarıdan verilir.
 */

/** Referrer alan adı → kaynak kimliği. Alt alan adları da eşleşir (chat.openai.com). */
const HOSTS: Record<string, string> = {
  "chatgpt.com": "chatgpt",
  "openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "copilot.microsoft.com": "copilot",
  "gemini.google.com": "gemini",
  "bard.google.com": "gemini",
  "claude.ai": "claude",
  "grok.com": "grok",
  "x.ai": "grok",
  "you.com": "you",
  "poe.com": "poe",
  "mistral.ai": "mistral",
  "deepseek.com": "deepseek",
};

/**
 * utm_source değerinde aranan parçalar. ChatGPT paylaştığı linke kendisi
 * `?utm_source=chatgpt.com` ekler; referrer boş gelse bile bu yakalar.
 */
const UTM_KEYWORDS: Array<[string, string]> = [
  ["chatgpt", "chatgpt"],
  ["openai", "chatgpt"],
  ["perplexity", "perplexity"],
  ["copilot", "copilot"],
  ["gemini", "gemini"],
  ["claude", "claude"],
  ["grok", "grok"],
  ["deepseek", "deepseek"],
];

function fromHostname(referrer: string): string | null {
  if (!referrer) return null;

  let hostname: string;
  try {
    hostname = new URL(referrer).hostname.toLowerCase();
  } catch {
    return null;
  }

  for (const [host, source] of Object.entries(HOSTS)) {
    if (hostname === host || hostname.endsWith(`.${host}`)) return source;
  }
  return null;
}

function fromUtm(search: string): string | null {
  const utmSource = new URLSearchParams(search).get("utm_source")?.toLowerCase();
  if (!utmSource) return null;

  for (const [keyword, source] of UTM_KEYWORDS) {
    if (utmSource.includes(keyword)) return source;
  }
  return null;
}

/**
 * Kaynağı döndürür ("chatgpt", "perplexity"…), LLM değilse null.
 *
 * @param referrer document.referrer değeri
 * @param search   location.search değeri ("?utm_source=chatgpt.com")
 */
export function detectLlmSource(referrer: string, search: string): string | null {
  return fromUtm(search) ?? fromHostname(referrer);
}
