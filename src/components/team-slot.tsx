interface Props {
	pokemon?: string;
	onClick?: () => void;
}

export default function TeamSlot({ pokemon, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={`w-[5.2vw] aspect-square pb-[0.5vw] relative border-b-[0.1vw] ${
				pokemon ? 'border-secondary-accent' : 'border-foreground'
			} hover:border-secondary-accent transition-colors duration-150 will-change-auto`}
		>
			{pokemon ? (
				<img src='' alt='' className='w-full relative' />
			) : (
				<svg
					viewBox='0 0 38 38'
					fill='none'
					className='w-[1.75vw] m-[1.6vw_auto] stroke-foreground'
				>
					<path
						d='M19.0269 2V35.6538M2.20001 18.8269H35.8539'
						stroke='inherit'
						strokeOpacity='0.5'
						strokeWidth='3'
						strokeLinecap='round'
						strokeLinejoin='round'
					></path>
				</svg>
			)}
		</button>
	);
}
