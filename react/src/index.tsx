import { useEffect, useRef } from 'react';
import { OfflineToast as CoreToast, OfflineToastOptions } from '@jojovms/offline-toast-core';

export type { OfflineToastOptions };

export const OfflineToast = (props: OfflineToastOptions) => {
    const toastRef = useRef<CoreToast | null>(null);

    useEffect(() => {
        // Initialize
        toastRef.current = new CoreToast(props);
        toastRef.current.init();

        // Cleanup
        return () => {
            if (toastRef.current) {
                toastRef.current.cleanup();
            }
        };
    }, [props.theme, props.position, props.duration]); // Re-init on prop change

    return null; // Renderless component
};

export const useNetworkStatus = () => {
    // Simple hook for people who want to build their own UI
    const [isOnline, setIsOnline] = React.useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

    useEffect(() => {
        const updateOnlineStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return isOnline;
};
