# @jojovms/angular-offline-toast

Angular wrapper for `@jojovms/offline-toast-core`.

## Installation

```bash
npm install @jojovms/angular-offline-toast
```

## Usage

Inject the `OfflineToastService` in your root component (e.g., `app.component.ts`).

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

## Options

The `init()` method accepts the following options:

| Option | Type | Default | Description |
|---|---|---|---|
| `theme` | `'light' \| 'dark'` | `'dark'` | Visual theme. |
| `position` | `string` | `'bottom-center'` | `top-center`, `bottom-center`, `top-right`, `bottom-right`, `center`. |
| `duration` | `number` | `3000` | Duration (ms) to show "Back online" message. |
