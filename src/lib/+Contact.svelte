<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import InputField from '../lib/+Input.svelte';

	// Form schema using Svelte's reactive declarations
	let name = '';
	let email = '';
	let question = '';

	let success = writable<string | null>(null);
	let serverError = writable<string | null>(null);
	let isPending = writable(false);

	// Character counter
	$: questionLength = question.length;

	// Validation functions
	const validateName = () => {
		if (!name) return 'Name is required';
		return '';
	};

	const validateEmail = () => {
		if (!email) return 'Email is required';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email address';
		return '';
	};

	const validateQuestion = () => {
		if (!question) return 'Question is required';
		if (question.length > 400) return 'Question must be less than 400 characters';
		return '';
	};

	// Combined validation
	$: nameError = validateName();
	$: emailError = validateEmail();
	$: questionError = validateQuestion();
	$: formValid = !nameError && !emailError && !questionError;

	async function handleSubmit() {
		$isPending = true;
		$serverError = null;
		$success = null;

		try {
			const res = await fetch('/api/contactForm', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, question })
			});

			if (!res.ok) {
				const errorData = await res.json();
				throw errorData;
			}

			$success = 'Your question has been submitted!';
			name = '';
			email = '';
			question = '';
		} catch (error: any) {
			const errObj =
				typeof error === 'object' && error !== null ? (error as Record<string, any>) : {};
			$serverError =
				errObj.error?.name?.[0] ||
				errObj.error?.email?.[0] ||
				errObj.error?.question?.[0] ||
				'Something went wrong.';
		} finally {
			$isPending = false;
		}
	}
</script>

<div class="  my-[100px] px-2 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class=" max-w-full grid  sm:grid-cols-2 items-start  gap-7 lg:flex-row">
		<div class="flex flex-col gap-10 items-start title-gradient text-left">
			
			<h1
				class="bg-gradient-to-r from-[#FFFFFF] to-[#8c8f93] bg-clip-text text-transparent  uppercase text-xl sm:text-3xl md:text-5xl font-roboto  lg:text-[64px] lg:leading-7    "
			>
				Questions?<br> No problem, <br>we have the <br> answers
			</h1>
			

			<div
				class=" text-[rgba(238,237,238,0.87)]   font-inter flex  flex-col md:gap-6 text-[25px] md:text-[31px] max-w-[440px] font-light md:font-semibold md:leading-4 "
			>
				<p class="text-[rgba(238,237,238,0.87)] ">Just ping us, feel free!</p>
				<p>...</p>
				<p class="text-[rgba(238,237,238,0.97)]">Or read our FAQ. Who knows, maybe you can find answer by yourself</p>
			</div>

			<button class="px-7 py-4 items-start border border-[#FFFFFF] rounded-md">
				<div
					class="text-[#EEEDEE] font-semibold text-[16px] italic leading-1 font-inter"
				>
					GO TO FAQ
				</div>
			</button>
		</div>

		<form
			use:enhance={handleSubmit}
			class="w-full text-[#EEEDEE] flex flex-col gap-5  justify-between h-full rounded-xl border border-border-light bg-[#0D0B0F] px-2 py-5 sm:px-4"
		>
			<!-- <div class="text-md rounded border border-yellow-500 bg-yellow-500/20 p-1 text-yellow-400">
				⚠️ We may take up to 24–78 hours to reply
			</div> -->

			<div class="flex flex-col gap-5">
				<p
					class="bg-gradient-to-r from-[#FFFFFF] to-[#8c8f93] bg-clip-text text-transparent text-3xl py-2 leading-[56px] font-semibold md:text-5xl lg:text-[64px]"
				>
					Contact us
				</p>
				<div>
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="mb-1 block text-sm">Name</label>
					<div class="align-center relative flex justify-center">
						<span class="absolute left-3 top-2">
							<img src="/Envelope.png" alt="icon" class="icon-img" />
						</span>
						<input
							type="text"
							bind:value={name}
							placeholder="John Doe"
							class="bg-top-light-2 w-full rounded border border-border-light py-3 pl-11 text-sm focus:outline-none placeholder-[gray]"
						/>
					</div>
				</div>
				<div>
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="mb-1 block text-sm ">Discord Username</label>
					<div class="align-center relative flex justify-center">
						<span class="absolute left-3 top-2">
							<img src="/DiscordLogo.svg" alt="icon" class="icon-img" />
						</span>
						<input
							type="text"
							bind:value={email}
							placeholder="@ffuffymonkey"
							class="bg-top-light-2 w-full rounded border border-border-light py-3 pl-11 text-sm focus:outline-none placeholder-[gray]"
						/>
					</div>
				</div>
				<div>
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="mb-1 block text-[#EEEDEE] text-sm">Your question</label>
					<div class="align-center relative flex justify-center">
						<span class="absolute left-3 top-2">
							<img src="/Mesaage.png" alt="icon" class="icon-img" />
						</span>
						<!-- svelte-ignore element_invalid_self_closing_tag -->
						<div class=" relative flex w-full items-center flex-col">
							<textarea
								maxlength={400}
								bind:value={question}
								placeholder="Drop some lines here"
								class=" bg-top-light-2 h-50 flex w-full min-h-[150px] rounded border border-border-light py-2 px-11 text-sm focus:outline-none placeholder-[gray]"
							/>
						</div>
						<div class="absolute bottom-2 right-3 text-xs text-[#484848]">{questionLength}/400</div>
					</div>
				</div>
			</div>

			<button
				type="submit"
				disabled={!formValid || $isPending}
				class=" w-full rounded-md py-4 px-7 font-bold uppercase tracking-wide text-white bg-[#8800F0] shadow-[0px_4px_12px_4px_rgba(136,0,240,0.2)] transition"
				
			>
				{$isPending ? 'Sending...' : 'Send'}
			</button>
		</form>
	</div>
</div>

