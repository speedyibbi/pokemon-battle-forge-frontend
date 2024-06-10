import { useRef } from 'react';

interface Props {
	name: string;
	label: string;
	defaultValue?: number;
}

export default function NumberInput({ name, label, defaultValue }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<label className='p-[0.75vw] flex place-content-between place-items-end font-bebas-neue text-[1.25vw] text-foreground text-center tracking-[-3%] leading-[100%] gap-[2.5vw] border-b-[0.1vw] border-foreground'>
			{label}
			<button
				type='button'
				onClick={() => inputRef.current?.stepDown()}
				className='text-[2vw]'
			>
				-
			</button>
			<input
				ref={inputRef}
				type='number'
				name={name}
				min='0'
				step='0.1'
				defaultValue={defaultValue ?? 0}
				className='w-[2.5vw] text-center bg-transparent'
			/>
			<button
				type='button'
				onClick={() => inputRef.current?.stepUp()}
				className='text-[2vw]'
			>
				+
			</button>
		</label>
	);
}
