import { useStore } from '@nanostores/react';
import { $teamSlots } from '@/stores/team';
import { $modalState } from '@/stores/modal';

import TeamSlot from '@/components/team-slot';

export default function Team() {
	const teamSlots = useStore($teamSlots);

	const clickHandler = () => {
		$modalState.set('search');
	};

	return (
		<div className='flex place-items-end gap-[2.6vw]'>
			{Array(6)
				.fill(null)
				.map((_, idx) => (
					<TeamSlot key={idx} pokemon={teamSlots[idx]} onClick={clickHandler} />
				))}
		</div>
	);
}
