interface Props {
	className?: string;
}

export function Normal({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_63)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_63)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M25 32C28.866 32 32 28.866 32 25C32 21.134 28.866 18 25 18C21.134 18 18 21.134 18 25C18 28.866 21.134 32 25 32ZM25 29C27.2091 29 29 27.2091 29 25C29 22.7909 27.2091 21 25 21C22.7909 21 21 22.7909 21 25C21 27.2091 22.7909 29 25 29Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Normal
			</p>
		</span>
	);
}

export function Fire({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_35)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_35)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M27.4855 29.44C27.6685 28.7708 27.3133 27.3949 27.3133 27.3949C27.3133 27.3949 27.0556 28.5157 26.6529 28.93C26.3095 29.2834 25.8886 29.5285 25.2851 29.5929C25.7785 29.3532 26.1179 28.8534 26.1179 28.2757C26.1179 27.4649 25.4492 26.8075 24.6243 26.8075C23.7994 26.8075 23.1307 27.4649 23.1307 28.2757C23.1307 28.4972 23.1806 28.7072 23.2699 28.8955C22.754 28.4845 22.6728 27.8255 22.6728 27.8255C22.6728 27.8255 22.0967 30.2174 23.6842 31.3426C25.2716 32.4678 28.3813 31.5006 28.3813 31.5006C28.3813 31.5006 23.9311 34.6319 20.6335 31.2239C17.7929 28.2882 19.8921 24.4232 19.8921 24.4232C19.8921 24.4232 19.8014 24.7818 19.8014 25.198C19.8014 25.6142 20.0271 25.9309 20.0271 25.9309C20.0271 25.9309 20.7002 24.512 21.2241 23.935C21.7199 23.3889 22.3414 22.946 22.8782 22.5635C23.2914 22.269 23.6545 22.0102 23.8713 21.7678C25.0656 20.4324 24.3333 18 24.3333 18C24.3333 18 25.6796 19.1868 26.0554 20.7197C26.1987 21.3039 26.1065 21.9687 26.0241 22.5632C25.8903 23.5283 25.7822 24.3081 26.7487 24.2575C28.3106 24.1758 26.9534 21.7678 26.9534 21.7678C26.9534 21.7678 30.4963 23.6299 30.2316 26.8867C29.9669 30.1435 26.359 30.8839 26.359 30.8839C26.359 30.8839 27.3025 30.1093 27.4855 29.44Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Fire
			</p>
		</span>
	);
}

export function Water({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_2)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_2)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M25 33C27.7614 33 30 29.5474 30 25.2884C30 21.0294 27.7614 17.5768 25 17.5768C22.2386 17.5768 20 21.0294 20 25.2884C20 29.5474 22.2386 33 25 33ZM24.1665 31.4031C21.6293 30.8479 22.0634 28.0373 22.0634 28.0373C22.0634 28.0373 22.7563 29.734 24.4376 30.2835C26.1189 30.8331 28.1507 30.0271 28.1507 30.0271C28.1507 30.0271 26.7037 31.9582 24.1665 31.4031Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Water
			</p>
		</span>
	);
}

export function Electric({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_69)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_69)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M21.9632 19.5837C21.8643 19.298 22.0765 19 22.3788 19H27.086C27.2788 19 27.4492 19.1256 27.5062 19.3098L29.8236 26.797C29.9112 27.08 29.6997 27.3669 29.4034 27.3669H26.5221C26.3762 27.3669 26.2707 27.5065 26.3106 27.6469L27.7536 32.7264C27.8867 33.1953 27.2718 33.5005 26.9789 33.111L20.5295 24.5343C20.3115 24.2444 20.5184 23.8301 20.881 23.8301H23.1238C23.275 23.8301 23.3811 23.6811 23.3316 23.5383L21.9632 19.5837Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Electric
			</p>
		</span>
	);
}

export function Grass({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_132)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_132)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20.6853 31.4986C23.1534 33.0651 26.8469 32.43 29.4489 29.8281C32.3778 26.8991 32.8144 22.587 30.4241 20.1967C28.0338 17.8064 23.7217 18.243 20.7927 21.1719C17.8638 24.1009 17.4272 28.413 19.8175 30.8033C19.8628 30.8486 19.9087 30.8928 19.9553 30.936L21.9343 28.4942L21.9343 25.7985L22.5931 27.8255L24.0143 26.2234L23.7369 24.3876L24.5249 25.4994L26.5653 23.2108L25.1308 25.7985L26.5653 26.2234L24.7512 26.6208L23.1575 28.2435L25.6652 28.4942L22.5931 29.1574L20.6853 31.4986Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Grass
			</p>
		</span>
	);
}

export function Ice({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_25)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_25)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M29.153 17.8357L29.2051 22.4134L25.2124 24.3301L25.1631 20.0079L29.153 17.8357Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M33.1554 25.049L29.2029 27.3098L25.2481 25.0454L29.2009 22.9691L33.1554 25.049Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M24.5451 25.049L20.5925 27.3098L16.6377 25.0454L20.5905 22.9691L24.5451 25.049Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20.5481 17.817L24.6505 19.8487L24.5457 24.2764L20.6722 22.358L20.5481 17.817Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M29.2646 32.2118L25.1622 30.18L25.2671 25.7523L29.1405 27.6707L29.2646 32.2118Z'
					fill='white'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20.6898 32.253L20.6377 27.6753L24.6304 25.7586L24.6796 30.0808L20.6898 32.253Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Ice
			</p>
		</span>
	);
}

export function Fighting({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_73)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_73)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20.0869 19.247C20.2685 18.5303 20.9178 18 21.6909 18C22.2733 18 22.7854 18.3009 23.0802 18.7557C23.1257 18.7519 23.1717 18.75 23.2182 18.75C23.3255 18.75 23.4304 18.7602 23.5321 18.7797C23.8342 18.4539 24.266 18.25 24.7455 18.25C25.4267 18.25 26.0118 18.6618 26.2655 19.25L26.2727 19.25C26.3904 19.25 26.5052 19.2623 26.6159 19.2856C26.8808 19.1054 27.2008 19 27.5455 19C28.2607 19 28.8699 19.4538 29.1009 20.0892C29.2263 20.1322 29.3448 20.1898 29.4545 20.2601C29.7117 20.0955 30.0174 20 30.3455 20C31.2592 20 32 20.7408 32 21.6545V26.625V26.7056C32 26.736 31.9992 26.7663 31.9975 26.7964C31.8978 30.238 28.8031 33 25 33C21.134 33 18 30.1458 18 26.625C18 24.9255 18.7302 23.3813 19.9205 22.2385C19.9175 23.8954 19.9455 25.6082 20.0745 25.5788C20.42 25.5001 20.1501 20.3683 20.0869 19.247Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Fighting
			</p>
		</span>
	);
}

export function Poison({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_41)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_41)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M22.1447 33C22.853 33 23.4742 32.4995 23.8224 31.7477C24.1706 32.4995 24.7917 33 25.5 33C26.1456 33 26.7189 32.5841 27.0789 31.9411C27.439 32.5841 28.0123 33 28.6579 33C29.7479 33 30.6316 31.8145 30.6316 30.3521C30.6316 30.064 30.5973 29.7866 30.5338 29.5268C32.0485 28.3156 33 26.5657 33 24.6196C33 20.9637 29.6421 18 25.5 18C21.3579 18 18 20.9637 18 24.6196C18 26.4955 18.884 28.189 20.3044 29.3936C20.2183 29.6908 20.1711 30.0141 20.1711 30.3521C20.1711 31.8145 21.0547 33 22.1447 33ZM25.4013 28.1117C27.8539 28.1117 29.8421 26.607 29.8421 24.7509C29.8421 22.8948 27.8539 21.3902 25.4013 21.3902C22.9487 21.3902 20.9605 22.8948 20.9605 24.7509C20.9605 26.607 22.9487 28.1117 25.4013 28.1117Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Poison
			</p>
		</span>
	);
}

export function Ground({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_87)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_87)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20.8683 29.9572C20.8074 29.9572 20.7648 29.8969 20.7851 29.8395L24.5738 19.134C24.6023 19.0537 24.6782 19 24.7634 19H28.622C28.7075 19 28.7837 19.0541 28.8119 19.1349L32.4919 29.6898C32.5375 29.8206 32.4404 29.9572 32.302 29.9572H20.8683ZM17.6978 30C17.5574 30 17.4602 29.8598 17.5094 29.7283L20.2478 22.4177C20.2772 22.3392 20.3522 22.2871 20.4361 22.2871H22.5289C22.6683 22.2871 22.7655 22.4256 22.718 22.5567L20.0701 29.8674C20.0413 29.947 19.9657 30 19.881 30H17.6978Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Ground
			</p>
		</span>
	);
}

export function Flying({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_51)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_51)'
					/>
				</g>
				<ellipse cx='25.5' cy='25.5' rx='7.5' ry='6.5' fill='white' />
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Flying
			</p>
		</span>
	);
}

export function Psychic({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_21)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_21)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M30.4745 29.6261C30.4745 29.6261 28.7092 31.042 25.1963 30.456C22.5311 30.0115 21.1096 27.0736 21.1096 25.4944C21.1096 21.7502 23.8808 20.8981 25.7543 20.8981C27.6278 20.8981 28.85 22.7247 28.85 24.1389C28.85 25.5531 27.8497 26.7901 26.2931 26.7901C24.7366 26.7901 24.2755 25.6973 24.2755 24.6926C24.2755 23.6879 25.0884 23.334 25.8297 23.334C26.571 23.334 26.8249 23.9669 26.8249 24.5108C26.8249 25.0548 26.4028 25.2496 26.0508 25.2496C25.6988 25.2496 25.6639 25.072 25.5292 24.8854C25.3945 24.6987 25.7011 23.9923 25.1963 23.9923C24.6915 23.9923 24.5974 24.8044 24.5974 24.8044C24.5974 24.8044 24.7815 26.3721 26.2931 26.3451C27.8048 26.318 28.522 25.1493 28.3136 23.9923C28.1052 22.8352 26.9822 21.6057 25.0115 21.8541C23.0407 22.1026 22.236 24.0939 22.5907 26.2219C22.9454 28.3499 25.4947 29.5829 27.4992 29.1393C29.5036 28.6957 31.5 27.2445 31.5 23.5653C31.5 19.8861 28.3136 17.6746 24.514 18.0391C20.7145 18.4036 18.3559 21.7254 18.5068 25.7166C18.6578 29.7078 22.445 31.8816 25.6475 31.9936C28.85 32.1057 30.8132 30.2518 30.8132 30.2518C30.8132 30.2518 31.2547 29.8581 31.0816 29.5506C30.9085 29.2432 30.4745 29.6261 30.4745 29.6261Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Psychic
			</p>
		</span>
	);
}

export function Bug({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_121)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_121)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M27.3547 17.3209C27.5923 16.9817 28.0599 16.8992 28.3992 17.1368C28.7384 17.3743 28.8209 17.8419 28.5833 18.1812L27.3678 19.9171C28.1573 20.1693 28.6952 20.4414 28.6952 20.4414C28.6952 20.4414 27.3805 22.7029 25.1506 22.7029C22.9206 22.7029 21.3361 20.5951 21.3361 20.5951C21.3361 20.5951 21.8979 20.2365 22.7308 19.929L21.4073 18.3518C21.1411 18.0345 21.1825 17.5615 21.4998 17.2953C21.817 17.029 22.29 17.0704 22.5563 17.3877L24.2491 19.4052C24.2828 19.4453 24.3115 19.4878 24.3353 19.5321C24.5344 19.5089 24.7374 19.4959 24.9423 19.4959C25.2296 19.4959 25.5167 19.5179 25.7968 19.5552C25.8109 19.529 25.8266 19.5033 25.8441 19.4783L27.3547 17.3209ZM21.7956 22.8099C21.2005 22.3849 20.3001 21.2757 20.3001 21.2757C20.3001 21.2757 18 23.0983 18 26.9631C18 30.8278 21.9764 33.1538 21.9764 33.1538C21.9764 33.1538 23.8763 31.2352 24.3427 28.803C24.8091 26.3708 23.6528 23.6701 23.6528 23.6701C23.6528 23.6701 22.3907 23.2349 21.7956 22.8099ZM28.2044 22.8099C28.7995 22.3849 29.6999 21.2757 29.6999 21.2757C29.6999 21.2757 32 23.0983 32 26.9631C32 30.8278 28.0236 33.1538 28.0236 33.1538C28.0236 33.1538 26.1237 31.2352 25.6573 28.803C25.1909 26.3708 26.3472 23.6701 26.3472 23.6701C26.3472 23.6701 27.6093 23.2349 28.2044 22.8099Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Bug
			</p>
		</span>
	);
}

export function Rock({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_14)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_14)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M28.8536 25.2658C28.8242 25.2258 28.8124 25.1757 28.8208 25.1268L29.674 20.1518C29.689 20.0641 29.7661 20 29.8551 20C29.9348 20 30.0062 20.0517 30.0302 20.1276L31.9618 26.2435C31.9848 26.3162 31.9601 26.3956 31.9 26.4425L30.661 27.4099C30.5799 27.4732 30.4624 27.457 30.4014 27.374L28.8536 25.2658ZM18 28.5214C18 28.6004 18.0508 28.6704 18.1259 28.695L20.9716 29.6254C21.0258 29.6432 21.0852 29.6345 21.1322 29.6021L27.818 24.9864C27.8596 24.9577 27.8874 24.913 27.8949 24.863L28.5847 20.2347C28.6011 20.1243 28.5156 20.0251 28.404 20.0251H22.6513C22.5969 20.0251 22.5454 20.0493 22.5107 20.0912L18.042 25.4819C18.0149 25.5147 18 25.5559 18 25.5985V28.5214ZM22.3271 29.907L25.5755 30.9712C25.6309 30.9893 25.6915 30.9799 25.7389 30.946L29.4951 28.2516C29.5753 28.1941 29.5953 28.0833 29.5402 28.0013L28.2482 26.0787C28.1916 25.9945 28.0772 25.9725 27.9935 26.0298L22.3271 29.907Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Rock
			</p>
		</span>
	);
}

export function Ghost({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_93)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_93)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M25 32C28.866 32 32 28.866 32 25C32 21.134 28.866 18 25 18C21.134 18 18 21.134 18 25C18 28.866 21.134 32 25 32ZM22.9219 25.0721C23.5259 25.0721 24.0156 24.5924 24.0156 24.0006H23.3394C22.8188 24.0006 22.3945 23.588 22.3757 23.072C22.0484 23.2572 21.8281 23.6037 21.8281 24.0006C21.8281 24.5924 22.3178 25.0721 22.9219 25.0721ZM25.7656 24.0006C25.7656 24.5924 26.2553 25.0721 26.8594 25.0721C27.4634 25.0721 27.9531 24.5924 27.9531 24.0006C27.9531 23.6037 27.7329 23.2572 27.4056 23.072C27.3868 23.588 26.9625 24.0006 26.4419 24.0006H25.7656Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Ghost
			</p>
		</span>
	);
}

export function Dragon({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_110)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_110)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M25.7804 24.965C25.8888 24.8989 25.9808 24.7603 26.0551 24.6063C27.0315 25.0054 27.7176 25.9484 27.7176 27.0481C27.7176 28.5091 26.5067 29.6934 25.0129 29.6934C24.3998 29.6934 23.8342 29.4938 23.3806 29.1575C23.2317 29.087 23.1093 29.0193 23.0091 28.9639C22.8537 28.878 22.7518 28.8217 22.688 28.8305C22.5014 28.8562 22.5556 29.0278 22.6048 29.1837C22.6383 29.2896 22.6694 29.3883 22.6212 29.429C22.5707 29.4716 22.4074 29.3158 22.2165 29.1338C21.9566 28.886 21.6457 28.5896 21.4991 28.6787C21.3832 28.7491 21.4957 28.94 21.6335 29.1738L21.6437 29.1911C21.7019 29.29 21.7693 29.3905 21.8309 29.4824C21.956 29.669 22.0567 29.8193 22.0063 29.8448C21.9454 29.8755 21.5208 29.589 21.163 29.1911C21.0249 29.0376 20.8911 28.8711 20.7669 28.7165C20.4948 28.3779 20.2681 28.0959 20.1408 28.1293C19.9878 28.1695 20.1036 28.4852 20.2737 28.7891C20.3533 28.9312 20.4469 29.0759 20.5279 29.2011C20.6539 29.396 20.7496 29.5438 20.7149 29.562C20.6681 29.5865 20.2562 29.1848 19.9764 28.6787C19.8102 28.378 19.6707 28.0458 19.5577 27.7768C19.4352 27.4851 19.344 27.2678 19.2839 27.2459C19.0751 27.1699 19.0751 27.5956 19.1589 28.21C19.1698 28.2901 19.186 28.3741 19.2061 28.4597C20.0181 31.087 22.5125 33 25.4637 33C29.0736 33 32 30.1379 32 26.6072C32 23.2469 29.3491 20.4921 25.981 20.2342C25.9852 20.0759 26.0678 19.762 26.0678 19.762C26.0678 19.762 26.6625 18.3233 26.6939 18.0159C26.696 17.9955 26.6984 17.9734 26.7011 17.9497C26.7381 17.6176 26.807 17 26.2757 17C25.992 17 25.86 17.2111 25.7091 17.4525C25.6512 17.5452 25.5904 17.6423 25.5172 17.7337C24.9901 18.392 24.1037 19.214 23.6011 19.652C22.5388 20.5776 21.4966 21.3384 20.8887 21.7821L20.8887 21.7821L20.8887 21.7821C20.6122 21.9839 20.4256 22.1201 20.3679 22.1764C19.9327 22.6006 18.3723 25.4152 18.3723 25.4152C18.3723 25.4152 17.8677 26.3182 18.047 26.5013C18.2264 26.6845 18.6589 26.6425 18.6589 26.6425C18.6589 26.6425 24.4696 25.3095 24.9898 25.2043C25.1299 25.176 25.2287 25.1597 25.3046 25.1472C25.5107 25.1131 25.5477 25.107 25.7804 24.965ZM21.6721 23.252C21.3602 23.5485 20.8429 24.2561 20.8429 24.2561C20.8429 24.2561 21.8043 24.3154 22.3338 23.8121C22.8632 23.3088 22.7419 22.451 22.7419 22.451C22.7419 22.451 21.984 22.9555 21.6721 23.252Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Dragon
			</p>
		</span>
	);
}

export function Dark({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_55)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_55)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M32 25C32 28.866 28.866 32 25 32C23.8401 32 22.7461 31.7179 21.7828 31.2185C22.6915 31.1825 23.5427 30.8826 24.2815 30.3826C24.5474 30.4233 24.8199 30.4444 25.0972 30.4444C28.0504 30.4444 30.4444 28.0504 30.4444 25.0972C30.4444 22.144 28.0504 19.75 25.0972 19.75C24.8991 19.75 24.7035 19.7608 24.5109 19.7818C23.7212 19.1835 22.7871 18.8213 21.7828 18.7815C22.7461 18.2821 23.8401 18 25 18C28.866 18 32 21.134 32 25Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Dark
			</p>
		</span>
	);
}

export function Steel({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_8)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_8)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M17.5511 25.6919C17.483 25.5756 17.483 25.4317 17.551 25.3154L21.1395 19.1843C21.2063 19.0702 21.3287 19 21.461 19H28.5772C28.7101 19 28.833 19.0708 28.8996 19.1859L32.4487 25.3169C32.5155 25.4324 32.5155 25.5749 32.4486 25.6903L28.8996 31.8143C28.833 31.9292 28.7102 32 28.5773 32H21.4608C21.3286 32 21.2063 31.9299 21.1394 31.8158L17.5511 25.6919ZM25 29C26.933 29 28.5 27.433 28.5 25.5C28.5 23.567 26.933 22 25 22C23.067 22 21.5 23.567 21.5 25.5C21.5 27.433 23.067 29 25 29Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Steel
			</p>
		</span>
	);
}

export function Fairy({ className }: Props) {
	return (
		<span className={`${className} relative group`}>
			<svg
				viewBox='0 0 50 50'
				fill='none'
				className='w-full group-hover:saturate-200 group-hover:scale-[1.2] transition-all duration-150 will-change-auto'
			>
				<g filter='url(#filter0_d_0_102)'>
					<rect
						x='10'
						y='10'
						width='30'
						height='30'
						rx='15'
						fill='url(#paint0_linear_0_102)'
					/>
				</g>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M20.7701 29.4502L22.8448 28.8486L24.7872 32.4001C24.8792 32.5683 25.1208 32.5683 25.2128 32.4001L27.1552 28.8486L29.2299 29.4502C29.4141 29.5036 29.5845 29.3323 29.5301 29.1484L28.9306 27.1223L32.3738 25.2391C32.542 25.1471 32.542 24.9055 32.3738 24.8135L28.8991 22.9131L29.5301 20.7806C29.5845 20.5967 29.4141 20.4254 29.2299 20.4788L27.0968 21.0973L25.2128 17.6525C25.1208 17.4843 24.8792 17.4843 24.7872 17.6525L22.9032 21.0973L20.7701 20.4788C20.5859 20.4254 20.4155 20.5967 20.4699 20.7806L21.1009 22.9131L17.6262 24.8135C17.458 24.9055 17.458 25.1471 17.6262 25.2391L21.0694 27.1223L20.4699 29.1484C20.4155 29.3323 20.5859 29.5036 20.7701 29.4502ZM22.6649 25.2595L24.05 26.017L24.8075 27.4021C24.8995 27.5703 25.1412 27.5703 25.2332 27.4021L25.9907 26.017L27.3758 25.2595C27.544 25.1675 27.544 24.9258 27.3758 24.8338L25.9907 24.0763L25.2332 22.6912C25.1412 22.5229 24.8995 22.5229 24.8075 22.6912L24.05 24.0763L22.6649 24.8338C22.4966 24.9258 22.4966 25.1675 22.6649 25.2595Z'
					fill='white'
				/>
			</svg>
			<p className='p-[0.5vw] absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full font-mono font-semibold text-[2.5vw] lg:text-[0.625vw] text-foreground text-center leading-[100%] uppercase border border-white bg-black/50 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-150 will-change-auto z-10 pointer-events-none'>
				Fairy
			</p>
		</span>
	);
}

export default function TypeLogos({
	className,
	options,
}: {
	className?: string;
	options?: {
		normal?: number;
		fire?: number;
		water?: number;
		electric?: number;
		grass?: number;
		ice?: number;
		fighting?: number;
		poison?: number;
		ground?: number;
		flying?: number;
		psychic?: number;
		bug?: number;
		rock?: number;
		ghost?: number;
		dragon?: number;
		dark?: number;
		steel?: number;
		fairy?: number;
	};
}) {
	return (
		<span className='flex flex-wrap place-content-center place-items-center'>
			<TypeLogoFilters />
			<Normal
				className={`${className ?? ''} ${options?.normal ? '' : 'hidden'}`}
			/>
			<Fire className={`${className ?? ''} ${options?.fire ? '' : 'hidden'}`} />
			<Water
				className={`${className ?? ''} ${options?.water ? '' : 'hidden'}`}
			/>
			<Electric
				className={`${className ?? ''} ${options?.electric ? '' : 'hidden'}`}
			/>
			<Grass
				className={`${className ?? ''} ${options?.grass ? '' : 'hidden'}`}
			/>
			<Ice className={`${className ?? ''} ${options?.ice ? '' : 'hidden'}`} />
			<Fighting
				className={`${className ?? ''} ${options?.fighting ? '' : 'hidden'}`}
			/>
			<Poison
				className={`${className ?? ''} ${options?.poison ? '' : 'hidden'}`}
			/>
			<Ground
				className={`${className ?? ''} ${options?.ground ? '' : 'hidden'}`}
			/>
			<Flying
				className={`${className ?? ''} ${options?.flying ? '' : 'hidden'}`}
			/>
			<Psychic
				className={`${className ?? ''} ${options?.psychic ? '' : 'hidden'}`}
			/>
			<Bug className={`${className ?? ''} ${options?.bug ? '' : 'hidden'}`} />
			<Rock className={`${className ?? ''} ${options?.rock ? '' : 'hidden'}`} />
			<Ghost
				className={`${className ?? ''} ${options?.ghost ? '' : 'hidden'}`}
			/>
			<Dragon
				className={`${className ?? ''} ${options?.dragon ? '' : 'hidden'}`}
			/>
			<Dark className={`${className ?? ''} ${options?.dark ? '' : 'hidden'}`} />
			<Steel
				className={`${className ?? ''} ${options?.steel ? '' : 'hidden'}`}
			/>
			<Fairy
				className={`${className ?? ''} ${options?.fairy ? '' : 'hidden'}`}
			/>
		</span>
	);
}

function TypeLogoFilters() {
	return (
		<svg className='absolute inset-0 w-0'>
			<defs>
				<filter
					id='filter0_d_0_63'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.364706 0 0 0 0 0.34902 0 0 0 0 0.415686 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_63'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_63'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_63'
					x1='10.1934'
					y1='10'
					x2='10.1934'
					y2='39.6132'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#9298A4' />
					<stop offset='1' stopColor='#A3A49E' />
				</linearGradient>
				<filter
					id='filter0_d_0_35'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.996078 0 0 0 0 0.619608 0 0 0 0 0.329412 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_35'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_35'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_35'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FB9B51' />
					<stop offset='1' stopColor='#FBAE46' />
				</linearGradient>
				<filter
					id='filter0_d_0_2'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.333333 0 0 0 0 0.619608 0 0 0 0 0.87451 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_2'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_2'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_2'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#4A90DD' />
					<stop offset='1' stopColor='#6CBDE4' />
				</linearGradient>
				<filter
					id='filter0_d_0_69'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.956863 0 0 0 0 0.835294 0 0 0 0 0.337255 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_69'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_69'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_69'
					x1='10.1934'
					y1='10'
					x2='10.1934'
					y2='39.6132'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#EDD53E' />
					<stop offset='1' stopColor='#FBE273' />
				</linearGradient>
				<filter
					id='filter0_d_0_132'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.392157 0 0 0 0 0.72549 0 0 0 0 0.329412 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_132'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_132'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_132'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#5FBC51' />
					<stop offset='1' stopColor='#5AC178' />
				</linearGradient>
				<filter
					id='filter0_d_0_25'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.494118 0 0 0 0 0.831373 0 0 0 0 0.788235 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_25'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_25'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_25'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#70CCBD' />
					<stop offset='1' stopColor='#8CDDD4' />
				</linearGradient>
				<filter
					id='filter0_d_0_73'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.831373 0 0 0 0 0.266667 0 0 0 0 0.364706 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_73'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_73'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_73'
					x1='10.1934'
					y1='10'
					x2='10.1934'
					y2='39.6132'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#CE4265' />
					<stop offset='1' stopColor='#E74347' />
				</linearGradient>
				<filter
					id='filter0_d_0_41'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.639216 0 0 0 0 0.419608 0 0 0 0 0.796078 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_41'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_41'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_41'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#A864C7' />
					<stop offset='1' stopColor='#C261D4' />
				</linearGradient>
				<filter
					id='filter0_d_0_87'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.847059 0 0 0 0 0.509804 0 0 0 0 0.333333 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_87'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_87'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_87'
					x1='10.1934'
					y1='10'
					x2='10.1934'
					y2='39.6132'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#DC7545' />
					<stop offset='1' stopColor='#D29463' />
				</linearGradient>
				<filter
					id='filter0_d_0_51'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.615686 0 0 0 0 0.709804 0 0 0 0 0.894118 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_51'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_51'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_51'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#90A7DA' />
					<stop offset='1' stopColor='#A6C2F2' />
				</linearGradient>
				<filter
					id='filter0_d_0_21'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.972549 0 0 0 0 0.486275 0 0 0 0 0.478431 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_21'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_21'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_21'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#F66F71' />
					<stop offset='1' stopColor='#FE9F92' />
				</linearGradient>
				<filter
					id='filter0_d_0_121'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.596078 0 0 0 0 0.764706 0 0 0 0 0.184314 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_121'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_121'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_121'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#92BC2C' />
					<stop offset='1' stopColor='#AFC836' />
				</linearGradient>
				<filter
					id='filter0_d_0_14'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.796078 0 0 0 0 0.756863 0 0 0 0 0.580392 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_14'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_14'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_14'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#C5B489' />
					<stop offset='1' stopColor='#D7CD90' />
				</linearGradient>
				<filter
					id='filter0_d_0_93'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.396078 0 0 0 0 0.423529 0 0 0 0 0.776471 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_93'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_93'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_93'
					x1='10.1934'
					y1='10'
					x2='10.1934'
					y2='39.6132'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#516AAC' />
					<stop offset='1' stopColor='#7773D4' />
				</linearGradient>
				<filter
					id='filter0_d_0_110'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.027451 0 0 0 0 0.427451 0 0 0 0 0.752941 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_110'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_110'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_110'
					x1='10.1934'
					y1='10'
					x2='10.1934'
					y2='39.6132'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#0C69C8' />
					<stop offset='1' stopColor='#0180C7' />
				</linearGradient>
				<filter
					id='filter0_d_0_55'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.364706 0 0 0 0 0.34902 0 0 0 0 0.415686 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_55'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_55'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_55'
					x1='10.1934'
					y1='10'
					x2='10.1934'
					y2='39.6132'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#595761' />
					<stop offset='1' stopColor='#6E7587' />
				</linearGradient>
				<filter
					id='filter0_d_0_8'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.313726 0 0 0 0 0.580392 0 0 0 0 0.631373 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_8'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_8'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_8'
					x1='10'
					y1='10'
					x2='10'
					y2='40'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#52869D' />
					<stop offset='1' stopColor='#58A6AA' />
				</linearGradient>
				<filter
					id='filter0_d_0_102'
					x='0'
					y='0'
					width='50'
					height='50'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.94902 0 0 0 0 0.580392 0 0 0 0 0.913725 0 0 0 0.7 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_0_102'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_0_102'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_0_102'
					x1='10.2462'
					y1='10'
					x2='10.2462'
					y2='39.5076'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#EC8CE5' />
					<stop offset='1' stopColor='#F3A7E7' />
				</linearGradient>
			</defs>
		</svg>
	);
}
