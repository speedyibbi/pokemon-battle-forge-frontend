import { useRef } from 'react';

interface Props {
	name: string;
	label: string;
	defaultValue?: number;
}

export default function NumberInput({ name, label, defaultValue }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);

	const triggerChange = () => {
		if (inputRef.current) {
			const event = new Event('input', { bubbles: true });
			inputRef.current.dispatchEvent(event);
		}
	};

	return (
		<label
			htmlFor={name}
			className='p-[0.75vw] flex place-content-between place-items-end gap-[7.5vw] lg:gap-[2.5vw] font-bebas-neue text-[3.75vw] lg:text-[1.25vw] text-foreground text-center tracking-[-3%] leading-[100%] border-b-[0.1vw] border-foreground'
		>
			{label}
			<button
				type='button'
				onClick={() => {
					inputRef.current?.stepDown();
					triggerChange();
				}}
				className='text-[6vw] lg:text-[2vw]'
			>
				-
			</button>
			<input
				ref={inputRef}
				id={name}
				type='number'
				name={name}
				min='0'
				step='0.1'
				defaultValue={defaultValue ?? 0}
				className='w-[7.5vw] lg:w-[2.5vw] text-center bg-transparent'
			/>
			<button
				type='button'
				onClick={() => {
					inputRef.current?.stepUp();
					triggerChange();
				}}
				className='text-[6vw] lg:text-[2vw]'
			>
				+
			</button>
		</label>
	);
}
