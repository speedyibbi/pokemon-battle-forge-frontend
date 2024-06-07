import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { $modalState } from '@/stores/modal';
import type { pokemon } from '@/stores/team';

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
			<div className='w-full relative flex flex-wrap place-content-start place-items-end overflow-y-scroll'>
				{searchedPokemon.map((pokemon, idx) => (
					<img
						key={idx}
						src={pokemon.sprite}
						alt={pokemon.name}
						className='w-[5vw]'
					/>
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
