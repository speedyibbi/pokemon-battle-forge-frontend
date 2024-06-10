import { useState } from 'react';

interface Props {
	name: string;
	label: string;
}

export default function Checkbox({ name, label }: Props) {
	const [checked, setChecked] = useState(false);

	const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<label className='flex place-content-start place-items-center gap-[1.3vw] font-bebas-neue text-[1.25vw] text-foreground text-center tracking-[-3%] leading-[100%]'>
			{label}
			<input
				type='checkbox'
				name={name}
				onChange={checkHandler}
				className='hidden'
			/>
			<span className='w-[1.25vw] aspect-square border-[0.15vw] border-foreground rounded-[0.36vw] bg-transparent'>
				<svg
					viewBox='0 0 16 12'
					fill='none'
					className={`w-[0.7vw] mx-auto py-[0.275vw] stroke-accent ${
						checked ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<path
						d='M14.3335 1L5 10.3333L1 6.33333'
						stroke='inherit'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</span>
		</label>
	);
}
