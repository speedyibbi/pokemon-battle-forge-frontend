import { atom } from 'nanostores';

export type pokemon = {
	id: number;
	name: string;
	sprite: string;
	type: string;
};

export const $currentSlot = atom<number | undefined>();
export const $teamSlots = atom<(pokemon | undefined)[]>([
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
]);
