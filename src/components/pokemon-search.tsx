import { useStore } from '@nanostores/react';
import { $modalState } from '@/stores/modal';

import BackButton from '@/components/back-button';

export default function PokemonSearch() {
	const modalState = useStore($modalState);

	const submissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return modalState === 'search' ? (
		<dialog className='w-screen h-screen p-[3.125vw_6.25vw] inset-0 flex flex-col place-content-start place-items-center gap-[5.2vw] bg-black/50 backdrop-blur-3xl'>
			<form
				onSubmit={submissionHandler}
				className='w-[45vw] p-[0.75vw] border-b-[0.1vw] border-foreground'
			>
				<input
					placeholder='Search'
					className='w-full font-bebas-neue text-[1.25vw] text-foreground placeholder:text-foreground text-center tracking-[-3%] leading-[100%] bg-transparent outline-none'
				/>
			</form>
			<span className='m-[3.125vw_6.25vw] absolute right-0 bottom-0'>
				<BackButton />
			</span>
		</dialog>
	) : (
		<></>
	);
}
