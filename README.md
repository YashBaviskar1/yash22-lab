# YASH22 / AI Inference Lab

A small Next.js application for an AI infrastructure talk. Public demos live at `/`, `/chat-1`, `/chat-2`, `/gpu`, `/models`, and `/terminal`; `/admin` is protected by an HTTP-only signed session.

## Run locally

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env.local` and fill in the values you have.
3. Run `npm install`, then `npm run dev`.

Without a gateway configured, the UI still loads and shows clear unavailable states. Set `GPU_GATEWAY_URL` to the stable HTTPS gateway. Its private credentials stay server-side. The gateway should expose the configured chat, GPU JSON, and image classification paths. GPU JSON should contain `gpus` with `index`, `name`, `utilizationPercent`, `memoryUsedMiB`, `memoryTotalMiB`, `temperatureC`, and `powerW`. Image requests send the validated image bytes and expect `{ "predictions": [{ "label": "…", "score": 0.92 }], "latencyMs": 32 }`.

`/chat-1` uses the RunPod vLLM service at `VLLM_BASE_URL` and requires `VLLM_API_KEY`; both values are server-only. Set `VLLM_BASE_URL` to the current RunPod HTTPS proxy ending in `/v1`, and set `VLLM_API_KEY` to a newly rotated key. The key previously pasted into chat/terminal output should be revoked and replaced. `/chat-2` remains connected to the separate scaled gateway.

Admin login uses `ADMIN_PASSWORD` when set, otherwise the demo password is `yashbaviskar123`. Set a unique random `AUTH_SECRET` in Vercel to sign the HTTP-only session cookie. Admin configuration persistence requires `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`; without them the admin can sign in, but saving settings reports that storage is unavailable. Chat prompts are not persisted. The terminal stream accepts only secure Asciinema WebSocket URLs and is read-only.

## Gateway safety

The app proxies requests through the single server-side `GPU_GATEWAY_URL`, requires HTTPS, and attaches `GPU_GATEWAY_SECRET` server-side. It exposes only bounded chat requests, validated image uploads (8 MB maximum), and read-only structured telemetry. Do not point the gateway at a browser-facing service or expose Kubernetes, SSH, or shell access.
