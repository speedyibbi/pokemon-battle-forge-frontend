import { useState } from 'react';

interface Props {
	name: string;
	label: string;
	defaultChecked?: boolean;
}

export default function Checkbox({ name, label, defaultChecked }: Props) {
	const [checked, setChecked] = useState(
		defaultChecked !== undefined ? defaultChecked : false
	);

	return (
		<label
			htmlFor={name}
			className='relative flex place-content-start place-items-center gap-[3.9vw] lg:gap-[1.3vw] font-bebas-neue text-[3.75vw] lg:text-[1.25vw] text-foreground text-center tracking-[-3%] leading-[100%] cursor-pointer'
		>
			{label}
			<input
				id={name}
				type='checkbox'
				name={name}
				checked={checked}
				onChange={() => {
					setChecked((prevState) => !prevState);
				}}
				className='w-[3.75vw] lg:w-[1.25vw] aspect-square relative border-[0.15vw] border-foreground rounded-[1.08vw] lg:rounded-[0.36vw] bg-transparent appearance-none'
			/>
			<svg
				viewBox='0 0 16 12'
				fill='none'
				className={`w-[2.1vw] lg:w-[0.7vw] absolute right-[0.6vw] lg:right-[0.2vw] stroke-accent ${
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
		</label>
	);
}
