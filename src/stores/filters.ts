import { atom } from 'nanostores';

export type filters = {
	battleStyle: string;
	fullyEvolved: boolean;
	includeLegendaries: boolean;
	includeMythical: boolean;
	includeMegas: boolean;
	includeGmaxed: boolean;
	generations: {
		'generation-i': boolean;
		'generation-ii': boolean;
		'generation-iii': boolean;
		'generation-iv': boolean;
		'generation-v': boolean;
		'generation-vi': boolean;
		'generation-vii': boolean;
		'generation-viii': boolean;
		'generation-ix': boolean;
	};
	blacklist: [];
	duplicates: boolean;
	weights: {
		typeResistance: string;
		typeWeakness: string;
	};
	randomFactor: string;
};

export const $filters = atom<filters>({
	battleStyle: 'mixedOffense',
	fullyEvolved: true,
	includeLegendaries: false,
	includeMythical: false,
	includeMegas: false,
	includeGmaxed: false,
	generations: {
		'generation-i': true,
		'generation-ii': true,
		'generation-iii': true,
		'generation-iv': true,
		'generation-v': true,
		'generation-vi': true,
		'generation-vii': true,
		'generation-viii': true,
		'generation-ix': true,
	},
	blacklist: [],
	duplicates: false,
	weights: {
		typeResistance: '1',
		typeWeakness: '5',
	},
	randomFactor: '0.5',
});
