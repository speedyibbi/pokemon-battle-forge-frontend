import { useStore } from '@nanostores/react';
import { $modalState } from '@/stores/modal';

import BackButton from '@/components/back-button';

export default function Filters() {
	const modalState = useStore($modalState);

	return modalState === 'filters' ? (
		<dialog className='w-screen h-screen p-[3.125vw_6.25vw] inset-0 flex flex-col place-content-start place-items-center gap-[5.2vw] bg-black/50 backdrop-blur-3xl'>
			<span className='m-[3.125vw_6.25vw] absolute right-0 bottom-0'>
				<BackButton />
			</span>
		</dialog>
	) : (
		<></>
	);
}
