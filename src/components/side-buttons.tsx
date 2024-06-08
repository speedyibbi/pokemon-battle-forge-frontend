import { useStore } from '@nanostores/react';
import { $teamSlots } from '@/stores/team';

export default function SideButtons() {
	const teamSlots = useStore($teamSlots);

	return (
		<aside className='h-fit m-[3.125vw_6.25vw] absolute right-0 bottom-0'>
			<span className='flex flex-col gap-[1.3vw]'>
				{teamSlots.length > 0 && (
					<button onClick={() => $teamSlots.set([])}>
						<svg
							viewBox='0 0 48 48'
							fill='none'
							strokeWidth='0'
							className='w-[2.5vw] fill-foreground stroke-background hover:scale-[1.2] transition-transform duration-150 will-change-transform'
						>
							<g clip-path='url(#clip0_151_201)'>
								<circle cx='24' cy='24' r='24' fill='inherit'></circle>
								<path
									d='M31.25 17.25L17.25 31.25M17.25 17.25L31.25 31.25'
									stroke='inherit'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								></path>
							</g>
							<defs>
								<clipPath id='clip0_151_201'>
									<rect width='48' height='48' fill='inherit'></rect>
								</clipPath>
							</defs>
						</svg>
					</button>
				)}
				<button>
					<svg
						viewBox='0 0 48 48'
						fill='none'
						strokeWidth='0'
						className='w-[2.5vw] fill-foreground stroke-background hover:scale-[1.2] transition-transform duration-150 will-change-transform'
					>
						<g clip-path='url(#clip0_151_170)'>
							<circle cx='24' cy='24' r='24' fill='inherit'></circle>
							<path
								d='M13.3334 14.6667H21.3334M21.3334 14.6667C21.3334 16.1394 22.5272 17.3333 24 17.3333C25.4728 17.3333 26.6667 16.1394 26.6667 14.6667M21.3334 14.6667C21.3334 13.1939 22.5272 12 24 12C25.4728 12 26.6667 13.1939 26.6667 14.6667M26.6667 14.6667H34.6667M13.3334 24H29.3334M29.3334 24C29.3334 25.4728 30.5272 26.6667 32 26.6667C33.4728 26.6667 34.6667 25.4728 34.6667 24C34.6667 22.5272 33.4728 21.3333 32 21.3333C30.5272 21.3333 29.3334 22.5272 29.3334 24ZM18.6667 33.3333H34.6667M18.6667 33.3333C18.6667 31.8605 17.4728 30.6667 16 30.6667C14.5273 30.6667 13.3334 31.8605 13.3334 33.3333C13.3334 34.8061 14.5273 36 16 36C17.4728 36 18.6667 34.8061 18.6667 33.3333Z'
								stroke='inherit'
								strokeWidth='2'
								strokeLinecap='round'
							></path>
						</g>
						<defs>
							<clipPath id='clip0_151_170'>
								<rect width='48' height='48' fill='inherit'></rect>
							</clipPath>
						</defs>
					</svg>
				</button>
				<button>
					<svg
						viewBox='0 0 48 48'
						fill='none'
						strokeWidth='0'
						className='w-[2.5vw] fill-foreground stroke-background hover:scale-[1.2] transition-transform duration-150 will-change-transform'
					>
						<g clip-path='url(#clip0_149_160)'>
							<circle cx='24' cy='24' r='24' fill='inherit'></circle>
							<path
								d='M32.9639 21V27M32.9639 27H26.9639M32.9639 27C30.6365 24.9114 28.481 22.5468 25.2186 22.0878C23.2862 21.8159 21.3179 22.1794 19.6101 23.1234C17.9022 24.0675 16.5475 25.5409 15.75 27.3218'
								stroke='inherit'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
						</g>
						<defs>
							<clipPath id='clip0_149_160'>
								<rect width='48' height='48' fill='inherit'></rect>
							</clipPath>
						</defs>
					</svg>
				</button>
			</span>
		</aside>
	);
}
