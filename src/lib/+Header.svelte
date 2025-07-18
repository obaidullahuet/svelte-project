<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import logo from '../lib/assets/NO HESI.svg';
	import logo2 from '../lib/assets/Vector.png';
	import Alert from '../lib/assets/Ellipse 1.png';
	import Star from '../lib/assets/Star.svg';
	import Data from '../lib/assets/Database.png';
	import File from '../lib/assets/FileArrowDown.svg';

	import { onMount } from 'svelte';

	let isUserDropdownOpen = false;
	let isNotificationDropdownOpen = false;
	let isMobileMenuOpen = false;

	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	const closeMobileMenu = () => {
		if (window.innerWidth < 1280) {
			isMobileMenuOpen = false;
		}
	};

	let userDropdownRef: HTMLDivElement;
	let notificationDropdownRef: HTMLDivElement;

	function handleClickOutside(event: { target: any }) {
		if (userDropdownRef && !userDropdownRef.contains(event.target)) {
			isUserDropdownOpen = false;
		}
		if (notificationDropdownRef && !notificationDropdownRef.contains(event.target)) {
			isNotificationDropdownOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="flex w-full justify-center px-4 sm:px-6 lg:px-8">
	<nav
		class="nav-container fixed top-5 font-inter z-20 w-full flex h-[68px] items-center justify-between rounded-full border border-[#FFFFFF]/10 px-3 py-3 backdrop-blur-md sm:px-4"
	>
		<!-- Logo Section -->
		<div class="flex items-center">
			<div
				class="flex h-11 w-32 items-center gap-1 rounded-full bg-border bg-white/5 sm:w-36 lg:w-42"
			>
				<a href="/" class="flex items-center rounded-2xl px-3 py-2 text-white sm:px-4">
					<img src={logo2} alt="Logo" class="mr-2 h-[28px] w-[17px] flex-shrink-0" />
					<img src={logo} alt="Logo" class="h-6 w-16 flex-shrink-0 sm:h-7 sm:w-20" />
				</a>
			</div>

			<!-- Desktop Navigation Links - Show on large screens -->
			<div class="ml-6 hidden items-center gap-1 xl:flex xl:gap-2">
				<a href="/billing" class="nav-link">
					<button class="nav-button">Get started</button>
				</a>
				<!-- <a href="/" class="nav-link">
				</a>
				<a href="/" class="nav-link">
				</a>
				
				<a href="/contacts" class="nav-link">
				</a> -->

				<button class="nav-button">Shop</button>
				<button class="nav-button">About us</button>
				<button class="nav-button">Contacts</button>
				<a href="/clubs" class="nav-link">
					<button class="nav-button">Club</button>
				</a>
			</div>
		</div>

		<!-- Right Side Actions -->
		<div class="flex items-center gap-2 h-11">
			<!-- Desktop Action Buttons - Progressive display based on screen size -->
			<div class="hidden items-center gap-4 h-11 xl:flex">
				<div
					class="rounded-full border border-[#ffffff]/10 px-3 text-[#ffffff] flex items-center justify-between gap-2"
				>
					<!-- Subscription Button - Show on md+ -->
					<a href="/blog" class="action-link hidden py-3 xl:block">
						<button class="flex items-center gap-2">
							<img src={Star} alt="Subscription" class="h-[13px] w-[14px] flex-shrink-0" />
							<span class="action-text">Blog</span>
						</button>
					</a>
					<a href="/blog" class="action-link hidden py-3 xl:block">
						<button class="flex items-center gap-2">
							<img src={Star} alt="Subscription" class="h-[13px] w-[14px] flex-shrink-0" />
							<span class="action-text">Subscription</span>
						</button>
					</a>
					<!-- Servers Button - Show on lg+ -->
					<span class="w-[1px] h-full text-border">|</span>
					<a href="/Server" class=" hidden bg-border rounded-full py-1 w-full px-2 xl:block">
						<button class=" flex items-center gap-2">
							<img src="/beli.svg" alt="Servers" class="h-[13px] w-3 flex-shrink-0" />
							<span class="action-text">Servers</span>
						</button>
					</a>

					<span class="w-[1px] h-full text-border">|</span>
					<!-- Download Button - Show on xl+ -->
					<!-- <a href="/" class="action-link hidden xl:block"> -->
					<button class="flex items-center gap-2">
						<img src={File} alt="Download" class="h-4 w-4 flex-shrink-0" />
						<span class="action-text">Download launcher</span>
					</button>
					<!-- </a> -->
				</div>

				<!-- Bell Button - Show on lg+ -->
				<div class="flex justify-normal bg-border rounded-full">
					<div
						class="action-link hidden xl:block rounded-full border border-[#ffffff]/10 relative"
						bind:this={notificationDropdownRef}
					>
						<button
							class="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 transition-colors cursor-pointer hover:bg-white/10"
							on:click={() => (isNotificationDropdownOpen = !isNotificationDropdownOpen)}
						>
							<img src="/belo.svg" alt="Notifications" class="h-3 w-[13px] rounded-full" />
						</button>
						{#if isNotificationDropdownOpen}
							<div
								class="absolute right-[0] top-[50px] w-[400px] h-[550px] text-[#EEEDEE] bg-background border border-border-light rounded-xl p-2 shadow-xl space-y-1 z-50"
								transition:slide={{ duration: 200 }}
							>
								<div class="flex items-center gap-3 px-3 py-2 rounded-lg">
									<div class="flex items-center gap-3">
										<span class="text-base text-gray-400 font-medium ">No new notifications</span>
										<!-- <img src="/billing/House.svg" alt="Notification" class="h-5 w-5" /> -->
									</div>

									<span class="text-base text-gray-400 font-medium"> Mark all as read</span>
								</div>
							</div>
						{/if}
					</div>

					<!-- User Profile with Dropdown -->
					<div class="relative flex justify-between px-5" bind:this={userDropdownRef}>
						<button
							class="items-center content-center h-11 gap-2 rounded-full px-5 hidden xl:flex sm:px-3 cursor-pointer transition-colors hover:bg-white/10"
							on:click={() => (isUserDropdownOpen = !isUserDropdownOpen)}
						>
							<span class="hidden text-sm font-medium text-white lg:inline xl:text-base">
								JohnDoe_911
							</span>
							<img
								src="/downar (1).svg"
								alt="Dropdown"
								class={`ml-1 hidden h-[8px] w-[11px] lg:inline transform transition-transform duration-300 ${
									isUserDropdownOpen ? 'rotate-180' : ''
								}`}
							/>
						</button>

						{#if isUserDropdownOpen}
							<div
								class="absolute right-[0] top-[50px] w-[240px] text-[#EEEDEE] bg-background border border-border-light rounded-xl p-2 shadow-xl space-y-1 z-50"
								transition:slide={{ duration: 200 }}
							>
								<a
									href="/"
									class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors"
								>
									<img src="/billing/House.svg" alt="Home" class="h-5 w-5" />
									<span class="text-sm font-bold uppercase">Home</span>
								</a>
								<a
									href="/"
									class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors"
								>
									<img src="/billing/Crown.svg" alt="Leaderboard" class="h-5 w-5" />
									<span class="text-sm font-bold uppercase">Leaderboard</span>
								</a>
								<a
									href="/"
									class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors"
								>
									<img src="/billing/Users.svg" alt="Friends" class="h-5 w-5" />
									<span class="text-sm font-bold uppercase">Friends</span>
								</a>
								<a
									href="/"
									class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors"
								>
									<img src="/billing/fi_6557720.svg" alt="Clients" class="h-5 w-5" />
									<span class="text-sm font-bold uppercase">Clients</span>
								</a>
								<a
									href="/"
									class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors"
								>
									<img src="/billing/PencilSimple.svg" alt="Edit" class="h-5 w-5" />
									<span class="text-sm font-bold uppercase">Edit Profile</span>
								</a>
								<a
									href="/"
									class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors"
								>
									<img src="/billing/Cube.svg" alt="Subscriptions" class="h-5 w-5" />
									<span class="text-sm font-bold uppercase">Subscriptions</span>
								</a>
								<a
									href="/"
									class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors"
								>
									<img src="/billing/Cube.svg" alt="Transactions" class="h-5 w-5" />
									<span class="text-sm font-bold uppercase">Transactions</span>
								</a>
								<a
									href="/billing"
									class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 transition-colors"
								>
									<img src="/billing/fi_9554529.svg" alt="Billing" class="h-5 w-5" />
									<span class="text-sm font-bold uppercase">Billing</span>
								</a>
							</div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="relative z-[60] flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-colors hover:bg-white/10 xl:hidden"
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				{#if !isMobileMenuOpen}
					<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{:else}
					<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</nav>

	<!-- Mobile Menu Overlay -->
	{#if isMobileMenuOpen}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->

		<div
			class="fixed inset-0 z-40 xl:hidden"
			on:click={closeMobileMenu}
			transition:fade={{ duration: 250 }}
		/>

		<!-- Mobile Menu Content -->
		<div
			class="fixed left-4 font-inter right-4 top-[15%] z-50 max-h-[calc(100vh-120px)] overflow-y-auto rounded-2xl border border-white/20 xl:hidden bg-background"
			transition:slide={{ duration: 300 }}
		>
			<!-- Navigation Links -->
			<div class="space-y-2">
				{#each [{ href: '/get-started', label: 'Get started' }, { href: '/about', label: 'About us' }, { href: '/news', label: 'Partners' }, { href: '/contacts', label: 'Contacts' }] as link}
					<a href={link.href} on:click={closeMobileMenu} class="block">
						<div class="mobile-menu-item">
							<span class="text-base font-sm sm:font-medium">{link.label}</span>
						</div>
					</a>
				{/each}
			</div>

			<!-- Action Items -->
			<div class="mt-2 sm:space-y-2">
				{#each [{ href: '/subscription', label: 'Subscription', icon: Star }, { href: '/servers', label: 'Servers', icon: Data, special: true }, { href: '/download', label: 'Download launcher', icon: File }] as action}
					<a href={action.href} on:click={closeMobileMenu} class="block">
						<div class="mobile-menu-item {action.special ? 'bg-[#252327]' : ''}">
							<img src={action.icon} alt={action.label} class="h-5 w-5 flex-shrink-0" />
							<span class="text-base font-medium">{action.label}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Navigation button styles */
	.nav-button {
		height: 2.25rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: white;
		transition: all 0.2s ease;
		white-space: nowrap;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	/* Action button styles */

	.action-text {
		font-size: 0.875rem;
		font-weight: 500;
		white-space: nowrap;
	}

	/* Mobile menu item styles */
	.mobile-menu-item {
		display: flex;
		width: 100%;
		align-items: center;
		gap: 4px;
		border-radius: 0.5rem;
		padding: 4px 8px;
		color: white;
		transition: all 0.2s ease;
		text-decoration: none;

		@media (max-width: 640px) {
			padding: 8px 12px;
		}
	}

	/* Smooth transitions */
	* {
		transition-property: background-color, border-color, color, transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
	}

	/* Custom scrollbar for mobile menu */
	.overflow-y-auto::-webkit-scrollbar {
		width: 4px;
	}

	.overflow-y-auto::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 2px;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 2px;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	/* Ensure proper text contrast */
	.text-white {
		color: #ffffff;
	}

	/* Remove default button styles */
	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		font: inherit;
		cursor: pointer;
	}

	/* Glass effect enhancement */
	nav {
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	/* Prevent horizontal scroll */
	.nav-container {
		max-width: min(1500px, calc(100vw - 3rem));
	}

	@media (max-width: 640px) {
		.nav-container {
			max-width: calc(100vw - 1rem);
		}
	}
</style>
