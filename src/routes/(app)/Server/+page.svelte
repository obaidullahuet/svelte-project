<script>
// @ts-nocheck

	import { onMount } from 'svelte';

	let seconds = 60;
	const totalSeconds = 60;

	let timer;

	onMount(() => {
		startCountdown();
	});

	function startCountdown() {
		timer = setInterval(() => {
			if (seconds > 0) {
				seconds -= 1;
			} else {
				// quick reset effect
				seconds = 60;
			}
		}, 1000);
	}


	let currentPage = 1;
	const totalPages = 6;

	const goToPage = (page) => {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
		}
	};
	// SVG calculations
	const radius = 16;
	const circumference = 2 * Math.PI * radius;

	$: offset = (circumference * seconds) / totalSeconds;

	let cards = [
		{
			thumbnail: '/Rectangle 115.png',
			title: 'Heavy Traffic I Public I NO DLC 2',
			badge: {
				icon: '/bjli.svg',
				label: 'Featured'
			},
			tier: {
				icon: 'Vector (1).svg',
				label: 'Public'
			},
			bg: 'bg-[rgba(255,255,255,0.1)]',
			dp: '',
			country: {
				icon: '/flag.svg',
				name: 'Australia'
			},
			players: {
				icon: '/Vector (3).svg',
				count: '18/32'
			},
			traffic: {
				icon: '/grr.svg',
				level: 'Light Traffic'
			},
			location: {
				icon: '/fi_12123759.svg',
				name: 'Barcelona'
			},
			city: {
				icon: '/fi_12123759.svg',
				name: 'Barcelona'
			},
			rating: {
				svg: {
					path: 'polygon',
					points: [
						'12 2',
						'15.09 8.26',
						'22 9.27',
						'17 14.14',
						'18.18 21.02',
						'12 17.77',
						'5.82 21.02',
						'7 14.14',
						'2 9.27',
						'8.91 8.26',
						'12 2'
					],
					style: {
						fill: 'transparent',
						stroke: '#5B5B5B',
						strokeWidth: 2
					}
				},
				image: '/Polygon 1.svg'
			}
		},
		{
			thumbnail: '/Rectangle 115.png',
			title: 'No Rules Server | Europe ',
			badge: {
				icon: '/bjli.svg',
				label: 'Popular'
			},
			tier: {
				icon: 'Vector (1).svg',
				label: 'Tier 1'
			},
			bg: 'bg-[rgba(255,255,255,0.1)]',
			dp: 'drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]',
			country: {
				icon: '/flag.png',
				name: 'Germany'
			},
			players: {
				icon: '/Vector (3).svg',
				count: '27/32'
			},
			traffic: {
				icon: '/grr.svg',
				level: 'Heavey Trffic'
			},
			location: {
				icon: '/fi_12123759.svg',
				name: 'Rome'
			},
			rating: {
				svg: {
					path: 'polygon',
					points: [
						'12 2',
						'15.09 8.26',
						'22 9.27',
						'17 14.14',
						'18.18 21.02',
						'12 17.77',
						'5.82 21.02',
						'7 14.14',
						'2 9.27',
						'8.91 8.26',
						'12 2'
					],
					style: {
						fill: 'transparent',
						stroke: '#5B5B5B',
						strokeWidth: 2
					}
				},
				image: '/Polygon 1.svg'
			}
		},
		{
			thumbnail: '/Rectangle 115.png',
			title: 'Simulation Only | Strict Rules',
			badge: {
				icon: '/bjli.svg',
				label: 'New'
			},
			tier: {
				icon: 'ortire.svg',
				label: 'Tier 2'
			},

			dp: 'drop-shadow-[0_0_20px_rgba(255,129,38,0.7)] ',
			bg: 'bg-[rgba(175,74,0,0.2)]',
			country: {
				icon: '/NL - Netherlands.svg',
				name: 'United Kingdom'
			},
			players: {
				icon: '/Vector (3).svg',
				count: '12/32'
			},
			traffic: {
				icon: '/grr.svg',
				level: 'Light Traffic'
			},
			location: {
				icon: '/fi_12123759.svg',
				name: 'London'
			},
			rating: {
				svg: {
					path: 'polygon',
					points: [
						'12 2',
						'15.09 8.26',
						'22 9.27',
						'17 14.14',
						'18.18 21.02',
						'12 17.77',
						'5.82 21.02',
						'7 14.14',
						'2 9.27',
						'8.91 8.26',
						'12 2'
					],
					style: {
						fill: 'transparent',
						stroke: '#5B5B5B',
						strokeWidth: 2
					}
				},
				image: '/Polygon 1.svg'
			}
		},
		
		
		
		{
			thumbnail: '/Rectangle 115.png',
			title: 'Chill Convoy | Voice Chat Enabled',
			badge: {
				icon: '/bjli.svg',
				label: 'Featured'
			},
			tier: {
				icon: '3itir.svg',
				label: 'Tier 3'
			},
			bg: 'bg-[rgba(155,0,58,0.2)]',
			dp: 'drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]',
			country: {
				icon: '/NL - Netherlands.svg',
				name: 'France'
			},
			players: {
				icon: '/Vector (3).svg',
				count: '5/20'
			},
			traffic: {
				icon: '/grr.svg',
				level: 'Realistic Traffic'
			},
			location: {
				icon: '/fi_12123759.svg',
				name: 'Paris'
			},
			rating: {
				svg: {
					path: 'polygon',
					points: [
						'12 2',
						'15.09 8.26',
						'22 9.27',
						'17 14.14',
						'18.18 21.02',
						'12 17.77',
						'5.82 21.02',
						'7 14.14',
						'2 9.27',
						'8.91 8.26',
						'12 2'
					],
					style: {
						fill: 'transparent',
						stroke: '#5B5B5B',
						strokeWidth: 2
					}
				},
				image: '/Polygon 1.svg'
			}
		}
	];

	let width = 0;

	onMount(() => {
		width = window.innerWidth;
		const handleResize = () => {
			width = window.innerWidth;
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div class="mt-[136px] w-full px-2 sm:px-6 lg:px-9   ">
	<h1 class="text-[39px] font-semibold font-inter text-[#eeedee] sm:text-4xl">Servers</h1>

	<div class="mt-5 rounded-2xl border border-border-light p-2">
		<div class="flex flex-col gap-2 lg:flex-row">
			<div
				class="h-[240px] w-full rounded-xl bg-gradient-to-br from-[#B451FF] to-[#3B105C] lg:max-w-[388px]"
			>
				<div class="m-4 inline-flex items-center gap-2 rounded-2xl  bg-[#FFFFFF]  px-3 py-1 shadow-sm">
					<!-- <img src="/fi_87925.png" alt="Feature Icon" class="h-3 w-3" /> -->
					<img src="/str.svg" alt="Feature Icon" class="h-3 w-3" />
					<span class="text-sm font-semibold font-inter text-[#8A06EF]">Brand new feature</span>
				</div>

				<div class="mt-20 px-6 pb-6 text-[#FFFFFF] font-inter leading-1  ">
					<p class="text-lg font-medium  sm:text-xl md:text-2xl lg:text-[29px]">
						You can now <span class="font-bold">host your own servers</span> and
						<span class="underline">it’s free!</span>
					</p>
				</div>
			</div>

			<div
				class=" w-full rounded-xl bg-cover bg-center bg-no-repeat sm:h-[240px] md:h-[280px] lg:h-[240px]"
				style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)),
radial-gradient(36.24% 104.38% at 40.01% 64.79%, rgba(156, 53, 234, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
"
			>
				<img
					src="/Frame 2735.png"
					class="   sm:h-[240px] md:h-[280px] lg:h-[240px] lg:w-full"
					alt=""
				/>
				<!-- <button class="absolute top-45 left-194 bg-white text-black px-5 py-1.5 font-semibold rounded-md">Host new server</button> -->
			</div>
		</div>
	</div>

	<div class="mt-6 h-[36px]">
		<div class="flex flex-wrap items-center justify-between gap-3">
			<div class="font-inter-tight rounded-2xl text-[#EEEDEEAD]">
				<div class="flex w-full flex-wrap items-center font-inter  justify-start gap-3 sm:w-auto">
					<div class="relative">
						<input
							type="text"
							placeholder="Search"
							class="h-[36px] w-[256px] rounded-md border border-border-light bg-[#161416] pl-9 pr-3 text-sm placeholder-white/50 focus:outline-none"
						/>
						<img
							src="/Search.png"
							alt="Search"
							class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50"
						/>
					</div>

					<button
						class="flex h-[36px] items-center gap-2 rounded-md border  bg-border px-2 py-1 border-border-light text-sm transition hover:bg-white/10"
					>
						<img src="/Car.png" alt="Cars" class="h-[10px] w-[18px] opacity-60" />
						<span class="text-[14px] font-normal">Cars</span>
						<span class="ml-1 rounded border border-border-light px-2 py-[4px] text-[12px] bg-border-light font-medium">
							Selected Cars <span
								class="bg-white/6 ml-1 rounded-sm py-[2px] px-1 text-[12px] bg-border-light font-medium">10</span
							>
						</span>
					</button>

					<div
						class="flex h-[36px] items-center gap-1 rounded-md border border-border bg-border  px-1 py-1 text-sm transition hover:bg-white/10 sm:gap-2 sm:px-2"
					>
						<img src="/Funnel.png" alt="Filter" class="h-4.2 w-4.2 opacity-60" />
						<span class="whitespace-nowrap text-[14px] font-normal">Filter By</span>
						<div class="ml-2 flex h-full items-center gap-1">
							<span class="rounded border border-border-light bg-border-light px-0.5 py-[4px] text-[12px] font-medium sm:px-2"
								>Europe</span
							>
							<span
								class="whitespace-nowrap border border-border-light rounded bg-border-light px-1 py-[4px] text-[12px] font-medium sm:px-2"
								>Traffic Density <span class="ml-1 bg-border-light px-1 rounded-sm py-[2px]">2</span></span
							>
							<span
								class="whitespace-nowrap border border-border-light rounded bg-border-light px-1 py-[4px] text-[12px] font-medium sm:px-2"
								>Tier <span class="ml-1 bg-border-light px-1 py-0.5 rounded-sm">2</span></span
							>
						</div>
					</div>

					<button
						class="flex h-[36px] items-center gap-2 rounded-md border border-border-light bg-[#161416] px-2 py-1 text-sm transition hover:bg-white/10"
					>
						<img src="/Server-button.png" alt="Favourite" class="h-5 w-5 opacity-60" />
						<span class="text-[14px] font-normal">Favourite Servers</span>
						<span class="ml-1 rounded-sm bg-border-light  px-1  text-[12px] font-medium ">2</span>
					</button>

					<button
						class="h-[36px] rounded-md bg-border-light px-4 py-1.5 text-[13px] font-medium transition hover:bg-white/20"
					>
						Reset Filters
					</button>
				</div>
			</div>

			<div class="relative h-[26px] w-[26px] flex justify-end text-[#EEEDEEAD]">
				<!-- Circle Track -->
				<svg class="h-full w-full rotate-[-90deg]" viewBox="0 0 40 40">
					<circle cx="20" cy="20" r={radius} stroke="#2d2d2d" stroke-width="4" fill="none" />
					<!-- Countdown Progress Circle -->
					<circle
						cx="20"
						cy="20"
						r={radius}
						stroke="white"
						stroke-width="4"
						fill="none"
						stroke-dasharray={circumference}
						stroke-dashoffset={offset}
						class={seconds === 60 ? 'transition-fast' : 'transition-slow'}
					/>
				</svg>

				<!-- Center Text -->
				<div
					class="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-[#ewewrew]"
				>
					{seconds}
				</div>
			</div>
		</div>
	</div>


	{#if width > 1439}
		<div class="mt-6 h-[40px] rounded-md border  border-border-light bg-[#161416] font-inter">
			<div class="flex flex-wrap items-center justify-between gap-3">
				<div class="font-inter-tight rounded-2xl">
					<div class="flex w-full text-[#EEEDEEAD] flex-wrap items-center justify-start gap-4 sm:w-auto">
						<div
							class=" w-[420px] bg-[#161416] px-1 py-2 text-[14px] font-medium placeholder-white/50 focus:outline-none"
						>
							Name
						</div>
						<div
							class=" flex w-[151px] items-center gap-1.5 bg-[#161416] px-1 py-2 text-sm placeholder-white/50 focus:outline-none"
						>
							<span class="text-[14px] font-medium">Tier</span>
							<img src="/upd.png" class="h-[12px] w-[12px]" alt="sort icon" />
						</div>
						<div
							class=" flex w-[151px] items-center gap-1.5 bg-[#161416] px-1 py-2 text-sm placeholder-white/50 focus:outline-none"
						>
							<span class="text-[14px] font-medium">Region</span>
							<img src="/upd.png" class="h-[12px] w-[12px]" alt="sort icon" />
						</div>
						<div
							class=" flex w-[151px] items-center justify-center gap-1.5 bg-[#161416] px-1 py-2 text-sm placeholder-white/50 focus:outline-none"
						>
							<span class="text-[14px] font-medium">Player</span>
							<img src="/upd.png" class="h-[12px] w-[12px]" alt="sort icon" />
						</div>
						<div
							class=" flex w-[151px] items-center gap-1.5 bg-[#161416] px-1 py-2 text-sm placeholder-white/50 focus:outline-none"
						>
							<span class="text-[14px] font-medium">Traffic Density</span>
							<img src="/upd.png" class="h-[12px] w-[12px]" alt="sort icon" />
						</div>
						<div
							class=" flex w-[151px] items-center gap-1.5 bg-[#161416] px-1 py-2 text-sm placeholder-white/50 focus:outline-none"
						>
							<span class="text-[14px] font-medium">Map</span>
							<img src="/upd.png" class="h-[12px] w-[12px]" alt="sort icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
		{#each cards as card}
			<div class="mt-2 h-[72px] rounded-md border text-[#EEEDEEDE] border-border-light bg-[#161416]">
				<div class="flex flex-wrap items-center justify-between gap-3">
					<div class="font-inter-tight rounded-2xl">
						<div
							class="align-center flex w-full flex-wrap items-center justify-start gap-4 py-1 sm:w-auto"
						>
							<div
								class="relative flex h-[60px] w-[420px] items-center gap-1.5 bg-[#161416] px-1 py-2 text-sm placeholder-white/50 focus:outline-none"
							>
								<img src="/Rectangle 115.png" class="h-[60px] w-[124px] rounded-sm" alt="thumbnail" />
								<span class="text-[15px] font-medium">{card.title}</span>

								{#if card.tier.label === 'Tier 3'}
									<div
										class="absolute left-3 top-[37px] flex h-[19px] w-[75px] items-center gap-1 rounded-2xl px-1"
										style="backdrop-filter: blur(13.9px);"
									>
										<img src="/bjli.svg" class="h-3 w-3" alt="featured" />
										<span class="text-[12px] font-medium">Featured</span>
									</div>
								{/if}
							</div>

							<div class="flex w-[151px] items-center gap-1.5 bg-[#161416] text-sm">
								<div
									class="flex h-[24px] w-[70px] items-center gap-1 rounded-2xl px-2 py-2 font-medium {card.bg} {card.dp} "
								>
									<img
										src={card.tier.icon}
										class="h-[15px] w-[15px] rounded-2xl {card.dp}  "
										alt="tier"
									/>
									<span class="whitespace-nowrap py-2 text-[15px] font-medium"
										>{card.tier.label}</span
									>
								</div>
							</div>

							<div class="flex w-[151px] items-center gap-2.5 bg-[#161416] px-1 py-2 text-sm">
								<img src={card.country.icon} class="h-[14px] w-[20px]" alt="country" />
								<span class="text-[15px] font-medium">{card.country.name}</span>
							</div>

							<div
								class="flex w-[151px] items-center justify-center gap-2.5 bg-[#161416] px-1 py-2 text-sm"
							>
								<img src={card.players.icon} class="h-[13px] w-[18px]" alt="players" />
								<span class="text-[15px] font-medium">{card.players.count}</span>
							</div>

							<div class="flex w-[151px] items-center gap-1.5 bg-[#161416] px-1 py-2 text-sm">
								<img src={card.traffic.icon} class="h-[16px] w-[16px]" alt="traffic" />
								<span class="text-[15px] font-medium">{card.traffic.level}</span>
							</div>

							<div class="flex w-[151px] items-center gap-2 bg-[#161416] px-1 py-2 text-sm">
								<img src={card.location.icon} class="h-[20px] w-[20px]" alt="location" />
								<span class="text-[15px] font-medium">{card.location.name}</span>
							</div>

							<div
								class="flex w-[72px] items-center justify-center gap-3 bg-[#161416] px-1 py-2 "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="h-[20px] w-[20px] fill-transparent stroke-[#5B5B5B] stroke-2 transition hover:fill-[#5B5B5B]"
								>
									<polygon points={card.rating.svg.points.join(' ')} />
								</svg>
								<img src={card.rating.image} class="h-[20px] w-[20px]" alt="rating" />
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	{:else}
		<div class=" mt-60 sm:mt-26 md:mt:30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each cards as card}
				<!-- <div
					class="flex cursor-pointer flex-col rounded-2xl border border-white/10 bg-[#161416] py-4 transition-colors duration-1000"
				>
					<div class="mx-4 flex items-center justify-between">
						<div class="flex w-[151px] items-center gap-1.5 bg-[#161416] text-sm">
							<div
								class="flex h-[36px] w-[90px] items-center justify-center gap-1 rounded-2xl px-1 py-2 font-medium {card.bg} {card.dp} "
							>
								<img
									src={card.tier.icon}
									class="h-[15px] w-[15px] rounded-2xl {card.dp}  "
									alt="tier"
								/>
								<span class="whitespace-nowrap py-2 text-[15px] font-medium">{card.tier.label}</span
								>
							</div>
						</div>

						<div
							class="flex w-[72px] items-center justify-center gap-2 bg-[#161416] px-1 py-2 text-sm"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="h-[20px] w-[20px] fill-transparent stroke-[#5B5B5B] stroke-2 transition hover:fill-[#5B5B5B]"
							>
								<polygon points={card.rating.svg.points.join(' ')} />
							</svg>
							<img src={card.rating.image} class="h-[17px] w-[18px]" alt="rating" />
						</div>
					</div>

					<div class=" flex flex-col justify-between gap-2 rounded-b-xl px-4 pt-5">
						<div class="flex flex-col gap-4">
							<img src={card.country.icon} alt="flag" class="h-[18px] w-6" />
							<h5 class=" text-[26px] font-semibold">
								{card.title}
							</h5>
						</div>

						<div class="text-content-secondary flex flex-col items-start gap-2">
							<div class="flex flex-wrap gap-4">
								<div class="flex items-center gap-2">
									<img src={card.players.icon} alt="players" />
									<span>{card.players.count}</span>
								</div>
								<div class="flex items-center gap-2">
									<img src={card.traffic.icon} alt="traffic" />
									<span>{card.traffic.level}</span>
								</div>
								<div class="flex items-center gap-2">
									<img src={card.location.icon} alt="location" />
									<span>{card.location.name}</span>
								</div>
							</div>
						</div>
					</div>
				</div> -->

				<div
					class="group flex cursor-pointer flex-col rounded-2xl border border-border text-[#EEEDEEAD] bg-border font-inter  p-4 shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,129,38,0.2)] sm:p-5 lg:p-6"
				>
					<!-- Tier Badge and Actions -->
					<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<!-- Tier Badge -->

							<!-- <div class="  flex    ">
								<div
									class="flex h-[36px] min-w-[90px] items-center justify-center gap-1 rounded-2xl px-2 py-1 text-sm font-medium {card.bg} {card.dp}"
								>
									<img
										src={card.tier.icon}
										class="h-[15px] w-[15px] rounded-full object-cover"
										alt="tier"
									/>
									<span class="text-[14px] font-semibold">{card.tier.label}</span>
								</div>

								<div class="flex items-center justify-end gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="h-[20px] w-[20px] fill-transparent stroke-[#5B5B5B] stroke-2 transition group-hover:fill-[#5B5B5B]"
									>
										<polygon points={card.rating.svg.points.join(' ')} />
									</svg>
									<img src={card.rating.image} class="h-[17px] w-[18px]" alt="rating" />
								</div>
							</div> -->


							<div class=" flex items-center justify-between w-full">
						<div class="flex w-full items-center gap-1.5 bg-background-light text-sm">
							<div
								class="flex h-[36px] w-[90px] items-center justify-center gap-1 rounded-2xl px-1 py-2 font-medium {card.bg} {card.dp} "
							>
								<img
									src={card.tier.icon}
									class="h-[15px] w-[15px] rounded-2xl {card.dp}  "
									alt="tier"
								/>
								<span class="whitespace-nowrap py-2 text-[15px] font-medium">{card.tier.label}</span
								>
							</div>
						</div>

						<div
								class="flex w-[72px] items-center  gap-3 bg-background-light px-1 py-2 text-sm"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="h-[20px] w-[20px] fill-transparent stroke-[#5B5B5B] stroke-2 transition hover:fill-[#5B5B5B]"
								>
									<polygon points={card.rating.svg.points.join(' ')} />
								</svg>
								<img src={card.rating.image} class="h-[20px] w-[20px]" alt="rating" />
							</div>
					</div>

						<!-- Star & Rating -->
					</div>

					<!-- Main Content -->
					<div class="mt-4 flex flex-col gap-5">
						<!-- Country Flag + Title -->
						<div class=" items-center gap-3">
							<img src={card.country.icon} alt="flag" class="h-[18px] w-6" />
							<h5 class="mt-4 text-[18px] font-semibold text-white sm:text-[22px] lg:text-[26px]">
								{card.title}
							</h5>
						</div>

						<!-- Stats -->
						<div class="flex flex-wrap items-start gap-4 text-sm text-white/70">
							<div class="flex items-center gap-2">
								<img src={card.players.icon} alt="players" class="h-4 w-4" />
								<span>{card.players.count}</span>
							</div>
							<div class="flex items-center gap-2">
								<img src={card.traffic.icon} alt="traffic" class="h-4 w-4" />
								<span>{card.traffic.level}</span>
							</div>
							<div class="flex items-center gap-2">
								<img src={card.location.icon} alt="location" class="h-4 w-4" />
								<span>{card.location.name}</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}



	<div class="flex items-center justify-center gap-2 p-4 mt-12 font-inter">
	<!-- Prev -->
	<button
		on:click={() => goToPage(currentPage - 1)}
		class="w-12 h-12 flex items-center justify-center rounded-lg border  border-border-light  bg-border  text-[#FFFFFF] disabled:opacity-30"
		disabled={currentPage === 1}>
		<img src="CaretLeft (3).svg" alt="">
	</button>

	<!-- Page Numbers -->
	{#each Array(totalPages).fill(0).map((_, i) => i + 1) as page (page)}
		{#if page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1}
			<button
				on:click={() => goToPage(page)}
				class={`w-12 h-12 flex items-center justify-center rounded-lg border  text-[16px]
					${currentPage === page
						? 'bg-[#FFFFFF] text-black border-white'
						: 'border-background-light text-[#FFFFFFFF] hover:bg-white/10 transition'}`}>
				{page}
			</button>
		{:else if page === currentPage - 2 || page === currentPage + 2}
			<span class="w-12 h-12 flex items-center bg-background-light border rounded-md text-[#FFFFFF] border-[#FFFFFF] justify-center text-white">...</span>
		{/if}
	{/each}

	<!-- Next -->
	<button
		on:click={() => goToPage(currentPage + 1)}
		class="w-12 h-12 flex items-center justify-center rounded-lg border border-background-light  text-[#FFFFFF] text-white disabled:opacity-30"
		disabled={currentPage === totalPages}>
	<img src="CaretLeft (2).svg" alt="">
	</button>
</div>
</div>

<style>
	.transition-fast {
		transition: stroke-dashoffset 0.3s ease-in;
	}

	.transition-slow {
		transition: stroke-dashoffset 1s linear;
	}
</style>
