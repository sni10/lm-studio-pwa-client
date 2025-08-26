# LM Studio PWA Client

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/sni10/lm-studio-pwa-client?style=for-the-badge)](https://github.com/sni10/lm-studio-pwa-client/releases)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/sni10/lm-studio-pwa-client/test.yml?branch=main&label=tests&style=for-the-badge)](https://github.com/sni10/lm-studio-pwa-client/actions)
[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://sni10.github.io/lm-studio-pwa-client/)

[![Made with JavaScript](https://img.shields.io/badge/made%20with-javascript-yellow.svg?style=flat-square)](https://github.com/sni10/lm-studio-pwa-client)
[![PWA](https://img.shields.io/badge/PWA-enabled-blue.svg?style=flat-square)](https://web.dev/progressive-web-apps/)
[![GitHub](https://img.shields.io/github/license/sni10/lm-studio-pwa-client?style=flat-square)](https://github.com/sni10/lm-studio-pwa-client/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/sni10/lm-studio-pwa-client?style=social)](https://github.com/sni10/lm-studio-pwa-client)

Lightweight Progressive Web App client for [LM Studio](https://lmstudio.ai/) local AI server.

## Features

- 🚀 **Single HTML file** - no build process required
- 📱 **PWA ready** - install as mobile app  
- 🔄 **Real-time streaming** - live responses with thinking process
- 🧠 **Smart auto-scroll** - free navigation while responses stream
- ⏹️ **Dynamic interruption** - pause responses while preserving context
- 📁 **File upload support** - text files with syntax highlighting
- 💾 **Persistent storage** - saves chat history and settings
- 🎨 **Mobile optimized** - responsive design with touch support
- 🌐 **Multi-model support** - works with any LM Studio compatible model
- 🔄 **Model switching indicator** - visual feedback during model changes
- 🤖 **Universal thinking process** - supports Qwen3 and other models
- 🌙 **Light/Dark theme** - toggle between themes with persistence
- ✨ **Smooth animations** - enhanced UI with fluid transitions
- 📊 **Token counting** - accurate usage tracking with fallback estimation

## Quick Start

1. Start LM Studio server on your local network
2. Open `index.html` in your browser
3. Configure server IP/port in settings (⚙️)
4. Select a model and start chatting

## Default Settings

- **Host**: `192.168.31.100`
- **Port**: `1234`
- **Max tokens**: `2048`
- **Temperature**: `0.7`

## What's New in v1.5.2

### 🎯 Major Features (v1.5.0)
- 🧠 **Smart Auto-scroll** - Free navigation while responses stream
- ⏹️ **Dynamic Send/Interrupt** - Transform send button to stop button with AbortController
- 🔄 **Model Loading Indicator** - Visual spinner when switching models  
- 📁 **File Upload Support** - Text files, code, markdown with syntax highlighting
- 🤖 **Enhanced Thinking Process** - Universal parsing for Qwen3 and other models

### 🔧 Recent Fixes (v1.5.1-v1.5.2)
- 🛠️ **Interrupt Behavior** - Partial responses preserved in conversation history
- 📄 **File Formatting** - Proper syntax highlighting and markdown display
- ⚙️ **GitHub Actions** - Fixed auto-versioning and release workflows
- 🐛 **Status Messages** - Resolved interrupt message conflicts

## Live Demo

🌐 **[Try it now!](https://sni10.github.io/lm-studio-pwa-client/)** - No installation required

## FAQ & Troubleshooting

### ❓ **Почему не подключается к серверу?**
- Убедитесь, что LM Studio запущен и сервер активен
- Проверьте IP адрес и порт в настройках (⚙️)
- Для доступа с других устройств: используйте LM Studio → Developer → CORS enabled
- Проверьте firewall и antivirus - они могут блокировать соединения

### 📁 **Какие файлы поддерживаются?**
Поддерживаются только текстовые файлы:
- Код: `.js`, `.py`, `.cpp`, `.java`, `.css`, `.html`
- Документы: `.txt`, `.md`, `.json`, `.csv`, `.xml`
- Конфигурации: `.yml`, `.yaml`, `.ini`, `.cfg`, `.log`

### ⏹️ **Как работает кнопка прерывания?**
- При генерации ответа кнопка "Отправить" превращается в "Стоп" 
- Нажатие сохраняет частичный ответ в истории для контекста
- Можно продолжить диалог с сохранённым частичным ответом

### 🔄 **Как переключать модели?**
- Выберите модель из выпадающего списка в шапке
- При переключении появится индикатор загрузки
- Выбранная модель сохраняется между сессиями

### 📱 **Как установить как мобильное приложение?**
1. Откройте сайт в Chrome/Safari на мобильном
2. Нажмите "Добавить на домашний экран" / "Add to Home Screen"
3. Приложение будет работать как нативное

### 🌙 **Проблемы с темой?**
- Переключение: кнопка 🌙 в правом верхнем углу
- Тема сохраняется автоматически в браузере
- При проблемах: очистите localStorage сайта

## Installation Options

### 📦 **Простой запуск (рекомендуется)**
```bash
# Просто откройте файл в браузере
open index.html
# или запустите локальный сервер
python -m http.server 8000
```

### 🐳 **Docker (опционально)**
```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
EXPOSE 80
```

```bash
docker build -t lm-studio-pwa .
docker run -p 8080:80 lm-studio-pwa
```

---

*Simple, fast, and reliable LM Studio client that just works.*