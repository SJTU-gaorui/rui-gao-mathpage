(() => {
  "use strict";

  const counter = document.querySelector("[data-view-counter]");
  if (!counter || counter.dataset.started === "true") return;
  counter.dataset.started = "true";

  const value = counter.querySelector("[data-view-count]");
  const status = counter.querySelector("[role='status']");
  if (!value || !status) return;

  const chinese = document.documentElement.lang.startsWith("zh");
  const labels = chinese ? {
    loading: "加载中…",
    unavailable: "暂不可用",
    error: "暂时无法获取浏览次数；正文阅读不受影响。",
    preview: "仅在正式主页统计，预览和本地文件不会增加浏览次数。",
    private: "已尊重浏览器的隐私偏好，未向计数服务发送请求。"
  } : {
    loading: "Loading…",
    unavailable: "Unavailable",
    error: "The page-view count is temporarily unavailable. The rest of the page is unaffected.",
    preview: "Counting is enabled only on the published homepage, not in previews or local files.",
    private: "Your browser's privacy preference is respected; no request was sent to the counter service."
  };

  const description = counter.title;
  function display(text, state, explanation = description) {
    value.textContent = text;
    counter.dataset.state = state;
    counter.title = explanation;
    status.setAttribute("aria-busy", state === "loading" ? "true" : "false");
  }

  // Do not let local previews, forks, or the private Site inflate the public count.
  const isGithubPages = window.location.origin === "https://sjtu-gaorui.github.io" &&
    window.location.pathname.startsWith("/rui-gao-mathpage/");
  const isPublicSite = window.location.origin === "https://rui-gao-mathematics.maimaiti415.chatgpt.site";
  const liveSite = isGithubPages || isPublicSite;
  if (!liveSite) {
    display("—", "preview", labels.preview);
    return;
  }

  if (navigator.globalPrivacyControl === true || navigator.doNotTrack === "1" ||
      window.doNotTrack === "1") {
    display("—", "private", labels.private);
    return;
  }

  // Both language pages use this one durable, project-specific counter.
  // A load makes one request. No retries: a failed response might still be counted.
  const endpoint = "https://counterapi.com/api/sjtu-gaorui.github.io/view/rui-gao-mathpage";
  display(labels.loading, "loading");

  async function recordView() {
    let timeout;
    try {
      const controller = new AbortController();
      timeout = window.setTimeout(() => controller.abort(), 10000);
      const response = await fetch(endpoint, {
        method: "GET",
        mode: "cors",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        cache: "no-store",
        signal: controller.signal
      });
      if (!response.ok) throw new Error("Counter request failed");
      const data = await response.json();
      if (!Number.isSafeInteger(data.value) || data.value < 0) {
        throw new Error("Invalid counter value");
      }
      display(data.value.toLocaleString(chinese ? "zh-CN" : "en-US"), "ready");
    } catch {
      // Never invent a count or replace the shared counter with browser storage.
      display(labels.unavailable, "unavailable", labels.error);
    } finally {
      window.clearTimeout(timeout);
    }
  }

  recordView();
})();
