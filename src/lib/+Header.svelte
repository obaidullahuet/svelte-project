<script>
	import { fade, slide } from 'svelte/transition';
	import logo from '../lib/assets/NO HESI.svg';
	import logo2 from '../lib/assets/Vector.png';
	import Alert from '../lib/assets/Ellipse 1.png';
	import Star from '../lib/assets/Star.svg';
	import Data from '../lib/assets/Database.png';
	import File from '../lib/assets/FileArrowDown.svg';
	import Bell from '../lib/assets/Bell.png';
	import Avatar from '../lib/assets/9fbd4972fc0c3ffddfc14a8b901a6aa53a99193c.jpg';
	import Arrow from '../lib/assets/Arrow.png';

	let isOpen = false;
	let isMobileMenuOpen = false;

	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	const closeMobileMenu = () => {
	if (window.innerWidth < 1280) {
		isMobileMenuOpen = false;
	}
};
</script>

<div class="flex w-full justify-center px-4 sm:px-6 lg:px-8">
	<nav
		class="nav-container fixed top-5 font-inter z-20 w-full flex h-[68px] items-center justify-between rounded-full border border-[#FFFFFF]/10 px-3 py-3  backdrop-blur-md  sm:px-4"
	>
		<!-- Logo Section -->
		<div class="flex items-center">
			<div
				class="flex h-11 w-32 items-center gap-1 rounded-full bg-border  bg-white/5 sm:w-36 lg:w-42"
			>
				<a href="/" class="flex items-center rounded-2xl px-3 py-2 text-white sm:px-4">
					<img src={logo2} alt="Logo" class="mr-2 h-[28px] w-[17px] flex-shrink-0" />
					<img src={logo} alt="Logo" class="h-6 w-16 flex-shrink-0 sm:h-7 sm:w-20" />
				</a>
			</div>

			<!-- Desktop Navigation Links - Show on large screens -->
			<div class="ml-6 hidden items-center gap-1 xl:flex xl:gap-2">
				<a href="/get-started" class="nav-link">
					<button class="nav-button">Get started</button>
				</a>
				<a href="/shop" class="nav-link">
					<button class="nav-button">Shop</button>
				</a>
				<a href="/about" class="nav-link">
					<button class="nav-button">About us</button>
				</a>
				
				<a href="/contacts" class="nav-link">
					<button class="nav-button">Contacts</button>
				</a>
				
			</div>
		</div>

		<!-- Right Side Actions -->
		<div class="flex items-center gap-2 h-11">
			<!-- Desktop Action Buttons - Progressive display based on screen size -->
			<div class="hidden items-center gap-1 h-11 xl:flex">
			
                <div class="rounded-full border  border-[#ffffff]/10 px-3 text-[#ffffff] flex items-center justify-between gap-2"> 
				<!-- Subscription Button - Show on md+ -->
				<a href="/subscription" class="action-link hidden py-3 xl:block">
					<button class="flex items-center gap-2">
						<img src={Star} alt="Subscription" class="h-[13px] w-[14px] flex-shrink-0" />
						<span class="action-text">Subscription</span>
					</button>
				</a>
				<!-- Servers Button - Show on lg+ -->
				<span class="w-[1px] h-full text-border">|</span>
				<a href="/server" class=" hidden bg-border rounded-full py-1 w-full px-2 xl:block">
					<button class=" flex items-center gap-2 ">
						<img src="/beli.svg" alt="Servers" class="h-[13px] w-3 flex-shrink-0" />
						<span class="action-text">Servers</span>
					</button>
				</a>

				<span class="w-[1px] h-full text-border">|</span>
				<!-- Download Button - Show on xl+ -->
				<a href="/download" class="action-link hidden xl:block">
					<button class="flex items-center gap-2">
						<img src={File} alt="Download" class="h-[13px] w-[11px] flex-shrink-0" />
						<span class="action-text">Download launcher</span>
					</button>
				</a>
				</div>

				<!-- Bell Button - Show on lg+ -->
        <div class="ml-4 flex justify-normal bg-border rounded-full ">
				<a href="/notifications" class="action-link hidden xl:block rounded-full border  border-[#ffffff]/10 ">
					<button class="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 transition-colors hover:bg-white/10">
						<img src="/belo.svg" alt="Notifications" class="h-3 w-[13px] rounded-full " />
					</button>
				</a>

				<!-- User Profile -->
				<div class="   items-center content-center h-11 gap-2 ml-3  rounded-full px-5 hidden xl:flex sm:px-3">
					<!-- <img
						src={Avatar}
						alt="User Avatar"
						class="h-6 w-6 rounded-full border border-white/10 sm:h-7 sm:w-7"
					/> -->
					<span class="hidden text-sm font-medium text-white lg:inline xl:text-base">
						JohnDoe_911
					</span>
					<img src="/downar (1).svg" alt="Dropdown" class="ml-1 hidden h-[6px] w-[11px]  lg:inline" />
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
						></path>
					</svg>
				{:else}
					<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
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
			class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm  xl:hidden"
			on:click={closeMobileMenu}
			transition:fade={{ duration: 250 }}
		></div>
        
	
		<!-- Mobile Menu Content -->
		<div
			class="fixed left-4 font-inter right-4 top-6 z-50 max-h-[calc(100vh-120px)] overflow-y-auto rounded-2xl border border-white/20 bg-[rgba(8,6,10,0.95)] p-2 shadow-2xl backdrop-blur-xl xl:hidden "
			transition:slide={{ duration: 300 }}
		>

		  <div
  class="flex justify-between items-center mb-4"
>
  <!-- Logo -->
  <div class="flex h-11 w-32 items-center gap-1 rounded-full bg-border bg-white/5 sm:w-36 lg:w-42">
    <a href="/" class="flex items-center rounded-2xl px-3 py-2 text-white sm:px-4">
      <img src={logo2} alt="Logo" class="mr-2 h-[28px] w-[17px]" />
      <img src={logo} alt="Logo" class="h-6 w-16 sm:h-7 sm:w-20" />
    </a>
  </div>

  <!-- Close Button -->
  <button
    on:click={closeMobileMenu}
    class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
    aria-label="Close menu"
  >
    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>


			<!-- Navigation Links -->
			<div class="space-y-2">
				{#each [
					{ href: '/get-started', label: 'Get started' },
					{ href: '/about', label: 'About us' },
					{ href: '/news', label: 'Partners' },
					{ href: '/contacts', label: 'Contacts' },
				] as link}
					<a href={link.href} on:click={closeMobileMenu} class="block">
						<div class="mobile-menu-item">
							<span class="text-base font-sm sm:font-medium">{link.label}</span>
						</div>
					</a>
				{/each}
			</div>

			<!-- Action Items -->
			<div class="mt-2 sm:space-y-2 ">
				{#each [
					{ href: '/subscription', label: 'Subscription', icon: Star },
					{ href: '/servers', label: 'Servers', icon: Data, special: true },
					{ href: '/download', label: 'Download launcher', icon: File },
				] as action}
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

	/* .mobile-menu-item:hover,
	.mobile-menu-item:focus {
		background-color: rgba(255, 255, 255, 0.1);
	} */

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

	/* Focus styles for accessibility */
	/* button:focus,
	a:focus {
		outline: 2px solid rgba(255, 255, 255, 0.5);
		outline-offset: 2px;
	} */

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

	/* Mobile menu glass effect */
	.backdrop-blur-xl {
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
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