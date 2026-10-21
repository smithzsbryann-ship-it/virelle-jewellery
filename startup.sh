#!/bin/sh
# Revive the Solenne preview. Idempotent: exit if already healthy.
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
cd /workspace
npm run dev
