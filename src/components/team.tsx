import { useStore } from '@nanostores/react';
import { $teamSlots, $currentSlot } from '@/stores/team';
import { $modalState } from '@/stores/modal';

import TeamSlot from '@/components/team-slot';

export default function Team() {
	const teamSlots = useStore($teamSlots);

	const clickHandler = (idx: number) => {
		$modalState.set('search');
		$currentSlot.set(idx);
	};

	return (
		<div className='flex place-items-end gap-[2.6vw]'>
			{teamSlots.map((_, idx) => (
				<TeamSlot
					key={idx}
					pokemon={teamSlots[idx]}
					onClick={() => clickHandler(idx)}
				/>
			))}
		</div>
	);
}
