import type { pokemon } from '@/stores/team';

interface Props {
	pokemon?: pokemon;
	onClick?: () => void;
}

export default function TeamSlot({ pokemon, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={`w-[5.2vw] aspect-square pb-[0.5vw] relative border-b-[0.1vw] ${
				pokemon ? 'border-secondary-accent' : 'border-foreground'
			} hover:border-secondary-accent transition-colors duration-150 will-change-auto group`}
		>
			{pokemon ? (
				<img
					src={pokemon.sprite}
					alt={pokemon.name}
					className={`w-full relative group-hover:scale-125 transition-transform duration-150 will-change-transform ${
						pokemon.type === 'normal'
							? 'drop-shadow-normal'
							: pokemon.type === 'fire'
							? 'drop-shadow-fire'
							: pokemon.type === 'water'
							? 'drop-shadow-water'
							: pokemon.type === 'electric'
							? 'drop-shadow-electric'
							: pokemon.type === 'grass'
							? 'drop-shadow-grass'
							: pokemon.type === 'ice'
							? 'drop-shadow-ice'
							: pokemon.type === 'fighting'
							? 'drop-shadow-fighting'
							: pokemon.type === 'poison'
							? 'drop-shadow-poison'
							: pokemon.type === 'ground'
							? 'drop-shadow-ground'
							: pokemon.type === 'flying'
							? 'drop-shadow-flying'
							: pokemon.type === 'psychic'
							? 'drop-shadow-psychic'
							: pokemon.type === 'bug'
							? 'drop-shadow-bug'
							: pokemon.type === 'rock'
							? 'drop-shadow-rock'
							: pokemon.type === 'ghost'
							? 'drop-shadow-ghost'
							: pokemon.type === 'dragon'
							? 'drop-shadow-dragon'
							: pokemon.type === 'dark'
							? 'drop-shadow-dark'
							: pokemon.type === 'steel'
							? 'drop-shadow-steel'
							: pokemon.type === 'fairy'
							? 'drop-shadow-fairy'
							: ''
					}`}
				/>
			) : (
				<svg
					viewBox='0 0 38 38'
					fill='none'
					className='w-[1.75vw] m-[1.6vw_auto] stroke-foreground'
				>
					<path
						d='M19.0269 2V35.6538M2.20001 18.8269H35.8539'
						stroke='inherit'
						strokeOpacity='0.5'
						strokeWidth='3'
						strokeLinecap='round'
						strokeLinejoin='round'
					></path>
				</svg>
			)}
		</button>
	);
}
