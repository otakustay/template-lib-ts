import {test, expect} from 'vitest';
import {getRandomToHex} from '../index.js';

test('get random', () => {
    const hex = getRandomToHex();
    expect(hex).toMatch(/^[0-9a-f]{8}$/);
});
