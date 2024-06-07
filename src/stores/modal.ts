import { atom } from 'nanostores';

export type modalState = 'closed' | 'search' | 'filters';

export const $modalState = atom<modalState>('closed');
