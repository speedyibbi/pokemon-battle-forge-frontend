import { useStore } from '@nanostores/react';
import { $displayState } from '@/stores/display';
import { $modalState } from '@/stores/modal';
import { $filters } from '@/stores/filters';
import {
	$teamSlots,
	$teamResistances,
	$teamWeaknesses,
	type pokemon,
} from '@/stores/team';

export default function SideButtons() {
	const teamSlots = useStore($teamSlots);

	const clearHandler = () => {
		$teamSlots.set([
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
		]);

		$teamResistances.set(undefined);
		$teamWeaknesses.set(undefined);

		$displayState.set('default');
	};

	const filterHandler = () => {
		$modalState.set('filters');
	};

	const generateTeamHandler = async () => {
		try {
			$displayState.set('loading');

			const generatedTeam = await fetch(
				`${import.meta.env.PUBLIC_POKEMON_BATTLE_FORGE_API}/generate-team`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						team: teamSlots
							.filter((slot) => slot !== undefined)
							.map((slot) => slot?.name.toLowerCase()),
						options: $filters.get(),
					}),
				}
			);

			if (!generatedTeam.ok) {
				$teamResistances.set(undefined);
				$teamWeaknesses.set(undefined);

				$displayState.set('error');
			} else {
				const { team, resistances, weaknesses } = await generatedTeam.json();

				const filteredGeneratedTeam = [
					...team.map((teamMember: pokemon) => {
						return {
							id: teamMember.id,
							name: teamMember.name,
							sprite: teamMember.sprite,
							types: teamMember.types,
						};
					}),
				].filter(
					(slot) => !teamSlots.map((slot) => slot?.id).includes(slot.id)
				);

				setTimeout(() => {
					$teamSlots.set([
						...teamSlots.map((slot) => {
							return slot === undefined ? filteredGeneratedTeam.shift() : slot;
						}),
					]);

					$teamResistances.set(resistances);
					$teamWeaknesses.set(weaknesses);

					$displayState.set('analysis');
				}, 1000);
			}
		} catch (error) {
			$teamResistances.set(undefined);
			$teamWeaknesses.set(undefined);

			$displayState.set('error');
		}
	};

	return (
		<aside className='h-fit m-[3.125vw_6.25vw] absolute lg:right-0 bottom-0'>
			<span className='flex lg:flex-col gap-[3.9vw] lg:gap-[1.3vw]'>
				<button onClick={clearHandler}>
					<svg
						viewBox='0 0 48 48'
						fill='none'
						strokeWidth='0'
						className='w-[7.5vw] lg:w-[2.5vw] fill-foreground stroke-background hover:scale-[1.2] transition-transform duration-150 will-change-transform'
					>
						<g clipPath='url(#clip0_151_201)'>
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
				<button onClick={filterHandler}>
					<svg
						viewBox='0 0 48 48'
						fill='none'
						strokeWidth='0'
						className='w-[7.5vw] lg:w-[2.5vw] fill-foreground stroke-background hover:scale-[1.2] transition-transform duration-150 will-change-transform'
					>
						<g clipPath='url(#clip0_151_170)'>
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
				<button onClick={generateTeamHandler}>
					<svg
						viewBox='0 0 48 48'
						fill='none'
						strokeWidth='0'
						className='w-[7.5vw] lg:w-[2.5vw] fill-foreground stroke-background hover:scale-[1.2] animate-pulse hover:animate-none transition-transform duration-150 will-change-transform'
					>
						<g clipPath='url(#clip0_149_160)'>
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
