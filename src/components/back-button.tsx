import { $modalState } from '@/stores/modal';

export default function BackButton() {
	return (
		<button onClick={() => $modalState.set('closed')}>
			<svg
				viewBox='0 0 48 48'
				fill='none'
				strokeWidth='0'
				className='w-[2.5vw] fill-foreground stroke-background hover:scale-[1.2] transition-transform duration-150 will-change-transform'
			>
				<g clipPath='url(#clip0_166_189)'>
					<circle cx='24' cy='24' r='24' fill='inherit'></circle>
					<path
						d='M17.3334 24.0001H30.6667M17.3334 24.0001L22.6667 18.6667M17.3334 24.0001L22.6667 29.3334'
						stroke='inherit'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					></path>
				</g>
				<defs>
					<clipPath id='clip0_166_189'>
						<rect width='48' height='48' fill='inherit'></rect>
					</clipPath>
				</defs>
			</svg>
		</button>
	);
}
