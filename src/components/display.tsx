export default function Display() {
	return (
		<h2 className='w-[50vw] font-bebas-neue text-[3.35vw] text-foreground text-center tracking-[-3%] leading-[100%] -translate-y-[50%]'>
			“Select{' '}
			<span className='inline-flex flex-col place-items-center after:w-[9.75vw] after:h-[0.15vw] after:bg-accent after:-translate-y-[0.25vw] after:shadow-[0_0_1vw_0.05vw_var(--accent)]'>
				Pokémon
			</span>{' '}
			to add to your party. Any slots left empty will be filled in to create a
			strategic team.”
		</h2>
	);
}
