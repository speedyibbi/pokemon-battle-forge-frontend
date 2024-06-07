interface Props {
	open?: boolean;
}

export default function PokemonSearch({ open = false }: Props) {
	return (
		<dialog
			open={open}
			className='w-screen h-screen p-[3.125vw_6.25vw] inset-0 flex flex-col place-content-start place-items-center gap-[5.2vw] bg-black/50 backdrop-blur-3xl'
		>
			<div className='w-[45vw] p-[0.75vw] border-b-[0.1vw] border-foreground'>
				<input
					placeholder='Search'
					className='w-full font-bebas-neue text-[1.25vw] text-foreground placeholder:text-foreground text-center tracking-[-3%] leading-[100%] bg-transparent outline-none'
				/>
			</div>
		</dialog>
	);
}
