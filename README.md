# Offline Toast (Connectō) 🌐

**Connectō** is a lightweight, framework-agnostic utility designed to monitor network connectivity and provide instant feedback to users when their application goes offline. Whether you are using vanilla JavaScript, React, or Angular, Connectō helps you keep your users aware and connected.

## 📦 Packages

This repository houses the following packages:

| Package | Description |
| :--- | :--- |
| **[`@jojovms/offline-toast-core`](./core)** | The core logic for network monitoring and toast notifications. |
| **[`@jojovms/react-offline-toast`](./react)** | A React wrapper (hook & component) for easy integration. |
| **[`@jojovms/angular-offline-toast`](./angular)** | An Angular wrapper (service & directive) for seamless usage. |

## 🚀 Installation

Choose the package that fits your technology stack:

### Core (Vanilla JS)
```bash
npm install @jojovms/offline-toast-core
```

### React
```bash
npm install @jojovms/react-offline-toast
```

### Angular
```bash
npm install @jojovms/angular-offline-toast
```

## 🛠️ Usage

### Core (Vanilla JS)
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

### React
```jsx
import { OfflineToast } from '@jojovms/react-offline-toast';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <OfflineToast />
    </div>
  );
}
```

### Angular
Inject the `OfflineToastService` in your root component (e.g., `app.component.ts`):

```typescript
import { Component, OnInit } from '@angular/core';
import { OfflineToastService } from '@jojovms/angular-offline-toast';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  
  constructor(private toastService: OfflineToastService) {}

  ngOnInit() {
    this.toastService.init({
      theme: 'dark',
      position: 'center'
    });
  }
}
```

## 👨‍💻 Author

**Shijo Shaji**
- 🌐 Website: [shijoshaji.in](https://shijoshaji.in)
- 🐙 GitHub: [shijoshaji](https://github.com/shijoshaji)

## 📄 License

MIT
