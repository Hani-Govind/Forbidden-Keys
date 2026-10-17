# Forbidden Keys 

**Forbidden Keys** is a Chrome extension for LeetCode that discourages mindless copy-pasting and encourages users to type code themselves.

## What It Does

- **Copy freely:** Copy problem statements or code for learning and doubt-solving.
- **Block pasting:** Intercepts normal paste attempts on LeetCode and displays a warning popup.
- **Clear clipboard:** Attempts to clear the clipboard when a paste attempt is detected.
- **Type normally:** Manual typing and regular coding remain unaffected.

The goal is simple: understand the code, get familiar with the syntax, and write it yourself instead of blindly pasting solutions.

## How It Works

Forbidden Keys uses a Chrome content script to detect paste-related keyboard shortcuts and paste events on LeetCode. When a paste attempt is detected, it prevents the default action, displays a warning, and attempts to clear the clipboard.

## Tech Stack

- JavaScript
- Chrome Extension Manifest V3
- HTML DOM events and CSS

## Installation

1. Clone this repository:

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   ```

2. Open `chrome://extensions` in Google Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the cloned `Forbidden Keys` project folder.
6. Open or refresh a LeetCode page and start coding.

## Limitations

Forbidden Keys is a lightweight deterrent, not a foolproof anti-cheating system. Clipboard clearing depends on browser permissions, and some paste methods or alternative ways of inserting text may bypass page-level event handling.

## Motivation

Typing code yourself helps build familiarity with syntax and encourages active problem-solving. Forbidden Keys is a small step toward making coding practice more intentional.
