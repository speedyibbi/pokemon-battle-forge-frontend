import { useStore } from '@nanostores/react';
import { $teamSlots } from '@/stores/team';

import TeamSlot from '@/components/team-slot';

export default function Team() {
	const teamSlots = useStore($teamSlots);

	return (
		<div className='flex place-items-end gap-[2.6vw]'>
			<TeamSlot pokemon={teamSlots[0]} />
			<TeamSlot pokemon={teamSlots[1]} />
			<TeamSlot pokemon={teamSlots[2]} />
			<TeamSlot pokemon={teamSlots[3]} />
			<TeamSlot pokemon={teamSlots[4]} />
			<TeamSlot pokemon={teamSlots[5]} />
		</div>
	);
}
