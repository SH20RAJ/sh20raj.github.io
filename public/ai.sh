#!/usr/bin/env bash
set -e

echo "🚀 Starting full setup: Ollama + OpenWebUI"

# -------------------------------
# ENV
# -------------------------------
export DEBIAN_FRONTEND=noninteractive
export OLLAMA_HOST=0.0.0.0
export OLLAMA_ORIGINS="*"

# -------------------------------
# Install dependencies
# -------------------------------
echo "📦 Installing dependencies..."
apt-get update -y
apt-get install -y curl wget git python3-pip lsof

# -------------------------------
# Install Ollama
# -------------------------------
echo "🤖 Installing Ollama..."
curl -fsSL https://ollama.ai/install.sh | sh

# -------------------------------
# Start Ollama
# -------------------------------
echo "⚙️ Starting Ollama..."
nohup ollama serve > /tmp/ollama.log 2>&1 &

# Wait until Ollama is ready
echo "⏳ Waiting for Ollama..."
for i in {1..30}; do
  if curl -s http://localhost:11434 > /dev/null; then
    echo "✅ Ollama is running"
    break
  fi
  sleep 2
done

# -------------------------------
# Pull model (auto choose small)
# -------------------------------
echo "📥 Pulling model (llama3.2:1b)..."
ollama pull llama3.2:1b

# -------------------------------
# Install OpenWebUI
# -------------------------------
echo "🌐 Installing OpenWebUI..."
pip install -q open-webui

# -------------------------------
# Start OpenWebUI
# -------------------------------
echo "🚀 Launching OpenWebUI..."
nohup open-webui serve --host 0.0.0.0 --port 8080 > /tmp/webui.log 2>&1 &

sleep 5

# -------------------------------
# Install Cloudflare Tunnel
# -------------------------------
echo "🌍 Setting up public tunnel..."
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -O cloudflared
chmod +x cloudflared

# -------------------------------
# Start tunnel
# -------------------------------
echo "🔗 Creating public URL..."
nohup ./cloudflared tunnel --url http://localhost:8080 > /tmp/tunnel.log 2>&1 &

sleep 8

# Extract public URL
URL=$(grep -o 'https://[-a-zA-Z0-9]*\.trycloudflare.com' /tmp/tunnel.log | head -n 1)

echo ""
echo "======================================"
echo "🔥 OPENWEBUI READY"
echo "👉 $URL"
echo "======================================"
echo ""

# -------------------------------
# Keep alive (important for Colab)
# -------------------------------
while true; do
  sleep 60
done
