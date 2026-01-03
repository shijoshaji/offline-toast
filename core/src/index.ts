export interface OfflineToastOptions {
    theme?: 'light' | 'dark';
    position?: 'top-center' | 'bottom-center' | 'top-right' | 'bottom-right' | 'center';
    duration?: number; // Duration to show "Back online" message
}

export class OfflineToast {
    private options: OfflineToastOptions;
    private toastElement: HTMLElement | null = null;
    private cleanupFns: (() => void)[] = [];

    constructor(options: OfflineToastOptions = {}) {
        this.options = {
            theme: 'dark',
            position: 'bottom-center',
            duration: 3000,
            ...options
        };
    }

    public init() {
        this.createToast();
        this.checkStatus();

        const onOnline = () => this.handleOnline();
        const onOffline = () => this.handleOffline();

        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);

        this.cleanupFns.push(() => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
            if (this.toastElement) this.toastElement.remove();
        });
    }

    public cleanup() {
        this.cleanupFns.forEach(fn => fn());
        this.cleanupFns = [];
    }

    private createToast() {
        if (this.toastElement) return;

        this.toastElement = document.createElement('div');
        this.toastElement.style.cssText = `
        position: fixed;
        padding: 10px 20px;
        border-radius: 8px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
        opacity: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

        // Positioning
        const pos = this.options.position || 'bottom-center';

        if (pos === 'center') {
            Object.assign(this.toastElement.style, {
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%) scale(0.9)', // Start slightly small
                opacity: '0'
            });
        } else if (pos.includes('top')) {
            this.toastElement.style.top = '20px';
        } else {
            this.toastElement.style.bottom = '20px';
        }

        if (pos !== 'center') {
            if (pos.includes('center')) {
                this.toastElement.style.left = '50%';
                this.toastElement.style.transform = 'translate(-50%, 20px)'; // Start hidden offset
            } else if (pos.includes('right')) {
                this.toastElement.style.right = '20px';
                this.toastElement.style.transform = 'translateY(20px)';
            } else {
                this.toastElement.style.left = '20px';
                this.toastElement.style.transform = 'translateY(20px)';
            }
        }

        document.body.appendChild(this.toastElement);
    }

    private updateStyle(type: 'offline' | 'online') {
        if (!this.toastElement) return;

        const isDark = this.options.theme === 'dark';

        // Reset basic styles
        this.toastElement.style.flexDirection = 'column';
        this.toastElement.style.alignItems = 'flex-start';
        this.toastElement.style.gap = '4px';

        if (type === 'offline') {
            this.toastElement.style.background = isDark ? '#333' : '#fff';
            this.toastElement.style.color = isDark ? '#fff' : '#333';
            this.toastElement.style.borderLeft = '4px solid #ff4444'; // Red accent
            this.toastElement.innerHTML = `
                <div style="display:flex;align-items:center;gap:6px;font-weight:600">
                    <span>📡</span> You are currently offline
                </div>
                <div style="font-size:12px;opacity:0.8;padding-left:24px">
                    Please check your internet connection.
                </div>
            `;
        } else {
            this.toastElement.style.background = isDark ? '#333' : '#fff';
            this.toastElement.style.color = isDark ? '#fff' : '#333';
            this.toastElement.style.borderLeft = '4px solid #00C851'; // Green accent
            // Revert single line for success
            this.toastElement.style.flexDirection = 'row';
            this.toastElement.style.alignItems = 'center';
            this.toastElement.innerHTML = `<span>📡</span> Back online!`;
        }
    }

    private show() {
        if (!this.toastElement) return;
        this.toastElement.style.opacity = '1';

        if (this.options.position === 'center') {
            this.toastElement.style.transform = 'translate(-50%, -50%) scale(1)';
        } else if (this.options.position?.includes('center')) {
            this.toastElement.style.transform = 'translate(-50%, 0)';
        } else {
            this.toastElement.style.transform = 'translateY(0)';
        }
    }

    private hide() {
        if (!this.toastElement) return;
        this.toastElement.style.opacity = '0';

        if (this.options.position === 'center') {
            this.toastElement.style.transform = 'translate(-50%, -50%) scale(0.9)';
        } else if (this.options.position?.includes('center')) {
            this.toastElement.style.transform = 'translate(-50%, 20px)';
        } else {
            this.toastElement.style.transform = 'translateY(20px)';
        }
    }

    private handleOffline() {
        this.updateStyle('offline');
        this.show();
    }

    private handleOnline() {
        this.updateStyle('online');
        this.show();
        setTimeout(() => {
            this.hide();
        }, this.options.duration || 3000);
    }

    private checkStatus() {
        if (!navigator.onLine) {
            this.handleOffline();
        }
    }
}
