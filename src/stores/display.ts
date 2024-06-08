import { atom } from 'nanostores';

export type displayState = 'default' | 'analysis' | 'loading' | 'error';

export const $displayState = atom<displayState>('default');
