# @jojovms/offline-toast-core

A lightweight, zero-dependency vanilla JS library to notify users when they go offline/online.

## Installation

```bash
npm install @jojovms/offline-toast-core
```

## Usage

```javascript
import { OfflineToast } from '@jojovms/offline-toast-core';

// Initialize
const toast = new OfflineToast({
  theme: 'dark', // 'light' | 'dark'
  position: 'bottom-center', // 'top-center' | 'bottom-center' | 'top-right' | 'bottom-right' | 'center'
  duration: 3000 // Time to show the "Back online" message (ms)
});

toast.init();

// Cleanup (if needed)
// toast.cleanup();
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `theme` | `'light' \| 'dark'` | `'dark'` | Visual theme of the toast. |
| `position` | `string` | `'bottom-center'` | Position on screen. Supports `center` for modal-like focus. |
| `duration` | `number` | `3000` | Duration (ms) the "Back online" message remains visible. |

## Methods

- `init()`: Starts listening to network events.
- `cleanup()`: Removes listeners and DOM elements.
