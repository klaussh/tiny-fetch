"use strict";

const DEFAULT_OPTIONS = {
  method: "GET",
  headers: {},
  timeout: 30000,
  retries: 0,
  retryDelay: 1000,
};

async function fetch(url, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  let lastError;

  for (let attempt = 0; attempt <= config.retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), config.timeout);

      const response = await globalThis.fetch(url, {
        method: config.method,
        headers: config.headers,
        body: config.body,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error) {
      lastError = error;
      if (attempt < config.retries) {
        await sleep(config.retryDelay * Math.pow(2, attempt));
      }
    }
  }

  throw lastError;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { fetch };
