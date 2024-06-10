import { useStore } from '@nanostores/react';
import { $modalState } from '@/stores/modal';

import BackButton from '@/components/back-button';
import Checkbox from '@/components/checkbox';
import NumberInput from '@/components/number-input';

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
					<option className='text-background' value='mixedOffense'>
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
				<div className='w-[45vw] flex flex-col gap-[5.2vw]'>
					<div className='w-full flex flex-wrap place-content-center place-items-center gap-[5.2vw]'>
						<Checkbox
							name='fullyEvolved'
							label='Fully Evolved'
							defaultChecked
						/>
						<Checkbox name='includeLegendaries' label='Include Legendaries' />
						<Checkbox name='includeMythical' label='Include Mythical' />
						<Checkbox name='includeMegas' label='Include Megas' />
						<Checkbox name='includeGmaxed' label='Include Gmaxed' />
						<Checkbox name='duplicates' label='Include Duplicates' />
					</div>
					<div className='w-full flex flex-wrap place-content-center place-items-center gap-[5.2vw]'>
						<Checkbox name='generation-i' label='Gen I' defaultChecked />
						<Checkbox name='generation-ii' label='Gen II' defaultChecked />
						<Checkbox name='generation-iii' label='Gen III' defaultChecked />
						<Checkbox name='generation-iv' label='Gen IV' defaultChecked />
						<Checkbox name='generation-v' label='Gen V' defaultChecked />
						<Checkbox name='generation-vi' label='Gen VI' defaultChecked />
						<Checkbox name='generation-vii' label='Gen VII' defaultChecked />
						<Checkbox name='generation-viii' label='Gen VIII' defaultChecked />
						<Checkbox name='generation-ix' label='Gen IX' defaultChecked />
					</div>
				</div>
				<div className='w-[50vw] flex flex-wrap place-content-center place-items-center gap-[5.2vw]'>
					<NumberInput
						name='typeResistance'
						label='Type Resistance Weight'
						defaultValue={1}
					/>
					<NumberInput
						name='typeWeakness'
						label='Type Weakness Weight'
						defaultValue={5}
					/>
					<NumberInput
						name='randomFactor'
						label='Random Factor'
						defaultValue={0.5}
					/>
				</div>
			</form>
			<span className='m-[3.125vw_6.25vw] absolute right-0 bottom-0'>
				<BackButton />
			</span>
		</dialog>
	) : (
		<></>
	);
}