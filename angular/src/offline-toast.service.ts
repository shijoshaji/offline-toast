import { Injectable, OnDestroy } from '@angular/core';
import { OfflineToast, OfflineToastOptions } from '@jojovms/offline-toast-core';

@Injectable({
    providedIn: 'root'
})
export class OfflineToastService implements OnDestroy {
    private instance: OfflineToast | null = null;

    /**
     * Initialize the Offline Toast.
     * Call this in your AppComponent's ngOnInit.
     */
    public init(options?: OfflineToastOptions) {
        if (this.instance) {
            this.instance.cleanup();
        }
        this.instance = new OfflineToast(options);
        this.instance.init();
    }

    ngOnDestroy() {
        if (this.instance) {
            this.instance.cleanup();
        }
    }
}
