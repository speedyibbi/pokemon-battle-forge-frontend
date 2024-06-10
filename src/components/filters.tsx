import { useStore } from '@nanostores/react';
import { $modalState } from '@/stores/modal';

import BackButton from '@/components/back-button';

// const DEFAULT_OPTIONS = {
// 	battleStyle: 'mixedOffense',
// 	fullyEvolved: true,
// 	includeLegendaries: false,
// 	includeMythical: false,
// 	includeMegas: false,
// 	includeGmaxed: false,
// 	generations: {
// 		'generation-i': true,
// 		'generation-ii': true,
// 		'generation-iii': true,
// 		'generation-iv': true,
// 		'generation-v': true,
// 		'generation-vi': true,
// 		'generation-vii': true,
// 		'generation-viii': true,
// 		'generation-ix': true,
// 	},
// 	blacklist: [],
// 	duplicates: false,
// 	weights: {
// 		typeResistance: 1,
// 		typeWeakness: 5,
// 	},
// 	randomFactor: 0.5,
// };

export default function Filters() {
	const modalState = useStore($modalState);

	return modalState === 'filters' ? (
		<dialog className='w-screen h-screen p-[3.125vw_6.25vw] inset-0 block bg-black/50 backdrop-blur-3xl'>
			<form
				onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
					event.preventDefault();
				}}
				className='w-full flex flex-col place-content-start place-items-center gap-[5.2vw]'
			>
				<select
					name='battleStyle'
					className='w-[11.5vw] m-0 p-[0.75vw] font-bebas-neue text-[1.25vw] text-foreground text-center tracking-[-3%] leading-[100%] border-b-[0.1vw] border-foreground bg-transparent cursor-pointer'
				>
					<option selected className='text-background' value='mixedOffense'>
						Mixed Offense
					</option>
					<option className='text-background' value='allOutAttack'>
						All Out Attack
					</option>
					<option className='text-background' value='speedAndPower'>
						Speed And Power
					</option>
					<option className='text-background' value='fortress'>
						Fortress
					</option>
					<option className='text-background' value='endurance'>
						Endurance
					</option>
					<option className='text-background' value='wallAndStall'>
						Wall And Stall
					</option>
					<option className='text-background' value='statusInfliction'>
						Status Infliction
					</option>
					<option className='text-background' value='utilityFocus'>
						Utility Focus
					</option>
					<option className='text-background' value='hazardControl'>
						Hazard Control
					</option>
				</select>
			</form>
			<span className='m-[3.125vw_6.25vw] absolute right-0 bottom-0'>
				<BackButton />
			</span>
		</dialog>
	) : (
		<></>
	);
}
