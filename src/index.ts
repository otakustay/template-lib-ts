import crypto from 'node:crypto';

export function getRandomToHex() {
    const array = new Uint8Array(4);
    crypto.getRandomValues(array);
    return [...array].map(v => v.toString(16).padStart(2, '0')).join('');
}
