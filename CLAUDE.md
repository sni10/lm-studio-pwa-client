# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a lightweight Progressive Web App (PWA) client for LM Studio - a standalone HTML file (`lm_studio_pwa.html`) that provides a complete chat interface for interacting with LM Studio's API server.

## Architecture

The application is a single-page application built with vanilla JavaScript inside a self-contained HTML file. Key components:

- **LMStudioClient class**: Core client that handles API communication, message management, and UI updates
- **Streaming Response Handler**: Processes server-sent events (SSE) for real-time response streaming
- **Markdown Rendering**: Uses Marked.js library for rich message formatting
- **Local Storage**: Persists configuration, chat history, and conversation statistics
- **PWA Features**: Includes web app manifest for mobile installation

## Key Features

- Real-time streaming responses with "thinking" process display
- Offline-capable PWA with mobile optimization
- Local storage for chat history and configuration
- Export functionality for chat logs
- Connection status monitoring with auto-reconnect
- Responsive design optimized for mobile devices

## Configuration

The app connects to LM Studio API server with default settings:
- Host: 192.168.31.100
- Port: 1234
- Max tokens: 2048
- Temperature: 0.7

Configuration is stored in localStorage and persists between sessions.

## Development Notes

- No build process required - it's a single HTML file with embedded CSS and JavaScript
- Uses Marked.js CDN for markdown parsing
- Implements PWA service worker for offline functionality  
- Mobile-first responsive design with touch-friendly interactions
- Handles streaming responses with proper cursor animation and thinking process display