import { atom } from 'nanostores';

export type pokemon = {
	id: number;
	name: string;
	sprite: string;
	types: string[];
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
export const $teamResistances = atom<{ [key: string]: number } | undefined>();
export const $teamWeaknesses = atom<{ [key: string]: number } | undefined>();
