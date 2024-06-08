import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $modalState } from '@/stores/modal';
import { $teamSlots, $currentSlot, type pokemon } from '@/stores/team';

import BackButton from '@/components/back-button';

interface Props {
	pokemon: pokemon[];
}

export default function PokemonSearch({ pokemon }: Props) {
	const modalState = useStore($modalState);
	const [searchedPokemon, setSearchedPokemon] = useState(pokemon);

	const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchedPokemon(
			pokemon.filter((pokemon) => pokemon.name.includes(event.target.value))
		);
	};

	const clickHandler = (pokemon: pokemon) => {
		const team = $teamSlots.get();
		const slot = $currentSlot.get();

		if (slot !== undefined) {
			team[slot] = pokemon;
			$teamSlots.set([...team]);
		} else {
			if (team.length < 6) {
				$teamSlots.set([...team, pokemon]);
			} else {
				team.shift();
				$teamSlots.set([...team, pokemon]);
			}
		}

		$modalState.set('closed');
		$currentSlot.set(undefined);
	};

	useEffect(() => {
		setSearchedPokemon(pokemon);
	}, [modalState]);

	return modalState === 'search' ? (
		<dialog className='w-screen h-screen p-[3.125vw_6.25vw] inset-0 flex flex-col place-content-start place-items-center gap-[5.2vw] bg-black/50 backdrop-blur-3xl'>
			<form
				onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
					event.preventDefault();
				}}
				className='w-[45vw] p-[0.75vw] border-b-[0.1vw] border-foreground'
			>
				<input
					onChange={searchHandler}
					placeholder='Search'
					className='w-full font-bebas-neue text-[1.25vw] text-foreground placeholder:text-foreground text-center tracking-[-3%] leading-[100%] bg-transparent outline-none'
				/>
			</form>
			<div className='w-full py-[3.75vw] relative flex flex-wrap place-content-start place-items-end gap-[1.3vw] overflow-y-scroll'>
				{searchedPokemon.map((pokemon, idx) => (
					<button
						key={idx}
						onClick={() => {
							clickHandler(pokemon);
						}}
						className='relative group'
					>
						<img
							src={pokemon.sprite}
							alt={pokemon.name}
							className='w-[5vw] group-hover:scale-125 transition-all duration-150 will-change-auto'
						/>
						<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[0.625vw] text-foreground text-center tracking-[30%] leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
							{pokemon.name}
						</p>
					</button>
				))}
			</div>
			<span className='m-[3.125vw_6.25vw] absolute right-0 bottom-0'>
				<BackButton />
			</span>
		</dialog>
	) : (
		<></>
	);
}
