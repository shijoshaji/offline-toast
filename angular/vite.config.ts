import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'AngularOfflineToast',
            fileName: 'index'
        },
        rollupOptions: {
            external: ['@angular/core', 'rxjs'],
            output: {
                globals: {
                    '@angular/core': 'ng.core',
                    'rxjs': 'rxjs'
                }
            }
        }
    },
    plugins: [dts({ rollupTypes: true })]
});
