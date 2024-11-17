/// <reference types="vitest" />
import {UserConfig} from 'vite';

const config: UserConfig = {
    test: {
        include: ['src/**/*.test.ts'],
        coverage: {
            enabled: true,
            all: false,
        },
        passWithNoTests: true,
    },
};

export default config;
