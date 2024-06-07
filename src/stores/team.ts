import { atom } from 'nanostores';

export type pokemon = {
	id: number;
	name: string;
	sprite: string;
};

export const $teamSlots = atom<pokemon[]>([]);
