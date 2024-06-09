import { useStore } from '@nanostores/react';
import { $displayState } from '@/stores/display';
import { $teamResistances, $teamWeaknesses } from '@/stores/team';

import TypeLogos from '@/components/type-logos';

export default function Display() {
	const displayState = useStore($displayState);
	const teamResistances = useStore($teamResistances);
	const teamWeaknesses = useStore($teamWeaknesses);

	if (displayState === 'default') {
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
	} else if (displayState === 'analysis') {
		return (
			<div className='flex flex-col place-content-start place-items-center gap-[1.8vw] -translate-y-[50%]'>
				<h2 className='inline-flex flex-col place-items-center font-bebas-neue text-[3.35vw] text-foreground text-center tracking-[-3%] leading-[100%] after:w-full after:h-[0.15vw] after:bg-accent after:-translate-y-[0.25vw] after:shadow-[0_0_1vw_0.05vw_var(--accent)]'>
					Team Analysis
				</h2>
				<span>
					<h3 className='mb-[0.8vw] font-bebas-neue text-[1.7vw] text-foreground text-center tracking-[-3%] leading-[100%]'>
						Resistances
					</h3>
					<TypeLogos className='w-[3.5vw]' options={teamResistances} />
				</span>
				<span>
					<h3 className='mb-[0.8vw] font-bebas-neue text-[1.7vw] text-foreground text-center tracking-[-3%] leading-[100%]'>
						Weaknesses
					</h3>
					<TypeLogos className='w-[3.5vw]' options={teamWeaknesses} />
				</span>
			</div>
		);
	}
}
