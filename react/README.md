# @jojovms/react-offline-toast

React wrapper for `@jojovms/offline-toast-core`.

## Installation

```bash
npm install @jojovms/react-offline-toast
```

## Usage

### Component (Recommended)

Just drop it in your main App component.

```jsx
import { OfflineToast } from '@jojovms/react-offline-toast';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <OfflineToast position="center" theme="dark" />
    </div>
  );
}
```

### Hook (Custom UI)

If you want to build your own UI:

```jsx
import { useNetworkStatus } from '@jojovms/react-offline-toast';

function NetworkBadge() {
  const isOnline = useNetworkStatus();

  return (
    <div style={{ color: isOnline ? 'green' : 'red' }}>
      {isOnline ? 'Online' : 'Offline'}
    </div>
  );
}
```

## Props

The `<OfflineToast />` component accepts the same options as the core library:

| Prop | Type | Default | Description |
|---|---|---|---|
| `theme` | `'light' \| 'dark'` | `'dark'` | Visual theme. |
| `position` | `string` | `'bottom-center'` | `top-center`, `bottom-center`, `top-right`, `bottom-right`, `center`. |
| `duration` | `number` | `3000` | Duration (ms) to show success message. |
