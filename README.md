# Offline Toast (Connectō) 🌐

**Connectō** is a lightweight, framework-agnostic utility designed to monitor network connectivity and provide instant feedback to users when their application goes offline. Whether you are using vanilla JavaScript, React, or Angular, Connectō helps you keep your users aware and connected.

## 📦 Packages

This repository houses the following packages:

| Package | Version | Description |
| :--- | :--- | :--- |
| **[`@jojovms/offline-toast-core`](./packages/offline-toast/core)** | `0.0.1` | The core logic for network monitoring and toast notifications. |
| **[`@jojovms/react-offline-toast`](./packages/offline-toast/react)** | `0.0.1` | A React wrapper (hook & component) for easy integration. |
| **[`@jojovms/angular-offline-toast`](./packages/offline-toast/angular)** | `0.0.1` | An Angular wrapper (service & directive) for seamless usage. |

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
import { offlineToast } from '@jojovms/offline-toast-core';

// Initialize with default settings
offlineToast.init();

// Or customize it
offlineToast.init({
  message: "You are currently offline",
  duration: 3000,
  position: "bottom-right"
});
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
Import the module in your `app.module.ts`:

```typescript
import { OfflineToastModule } from '@jojovms/angular-offline-toast';

@NgModule({
  imports: [
    OfflineToastModule
  ],
  // ...
})
export class AppModule { }
```

Use the directive in your template:
```html
<lib-offline-toast></lib-offline-toast>
```

## 👨‍💻 Author

**Shijo Shaji**
- 🌐 Website: [shijoshaji.in](https://shijoshaji.in)
- 🐙 GitHub: [shijoshaji](https://github.com/shijoshaji)

## 📄 License

MIT
