<script>
	//   import car1 from '$lib/assets/car1.jpg';
	//   import car2 from '$lib/assets/car2.jpg';
	//   import car3 from '$lib/assets/car3.jpg';


   let updates = [
    {
      id: 1,
      date: "June 13, 2025",
      title: "The beautiful range of Apple Naturale that has an exciting mix of natural ingredients.",
      description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      tag: "General Bug Fixes",
      image: "/blog/ANIMATION (1).svg"
    },
    {
      id: 2,
      date: "June 13, 2025", 
      title: "The beautiful range of Apple Naturale that has an exciting mix of natural ingredients.",
      description: "",
      tag: "",
      image: "/blog/ANIMATION (1).svg"
    },
    {
      id: 3,
      date: "June 13, 2025",
      title: "The beautiful range of Apple Naturale that has an exciting mix of natural ingredients.", 
      description: "",
      tag: "",
      image: "/blog/ANIMATION (1).svg"
    },
    {
      id: 4,
      date: "June 13, 2025",
      title: "The beautiful range of Apple Naturale that has an exciting mix of natural ingredients.",
      description: "",
      tag: "",
      image: "/blog/ANIMATION (1).svg"
    }
  ];
</script>

<div class="container flex flex-col gap-16">
	<!-- Hero Section -->
	<div class="relative h-[420px] w-full overflow-hidden border border-background-light">
		<img
			src="/blog/ANIMATION (1).svg"
			alt="Background"
			class="absolute inset-0 w-full h-full object-cover -z-10"
		/>

		<div class="absolute inset-0 bg-[rgba(8,6,10,0.3)] backdrop-blur-[50px] z-0" />

		<section
			class="relative z-10 font-inter flex flex-col items-center justify-end h-full text-[#ffffff] text-center"
		>
			<h1 class="text-[39px] text-[#EEEDEE] md:text-5xl font-bold">No Hesi is always evolving</h1>
			<p class="mt-4 max-w-2xl text-sm md:text-base">
				Our evolution is community-led, and VIPs direct the future. The Garage is where you'll find
				every update: cars, maps, devlogs, and everything else we're working on…
			</p>
			<div class="mt-6 flex flex-col md:flex-row justify-center gap-4">
				<button class="bg-border font-medium py-[14px] px-6 rounded-full">See What’s New</button>
				<button
					class="bg-[#ffffff] text-black font-medium py-[14px] px-6 border border-white/30 rounded-full"
				>
					VIPs Get First Access
				</button>
			</div>
		</section>
	</div>

<section class=" text-white px-9 text-[#EEEDEE] font-inter">
		<h2 class="text-[30px] font-semibold mb-[16px]">Announcements</h2>

		<div class="grid lg:grid-cols-2 gap-3">
			<!-- First Left Card -->
			<div class="bg-border rounded-3xl h-[548px] p-2 overflow-hidden shadow-md relative">
				<img src="/blog/car1.svg" alt="car1" class="h-[320px] relative object-cover w-full" />
				<span class="w-[188px] h-13 absolute top-10 bg-border">Collabs</span>
				<div class="py-6 pl-6 pr-[58px]">
					<p class="text-[18px] font-inter mt-2">June 13, 2025</p>
					<h3 class="mt-4 text-[30px] font-inter font-semibold">
						Ergonomic executive chair upholstered in bonded black leather and PVC
					</h3>
				</div>
				<button
					class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#ffffff] text-black rounded-full"
				>
					<span class="text-xl">↗</span>
				</button>
			</div>

			<!-- Right Column (Two Cards Styled Like First) -->
			<div class="flex flex-col gap-3">
				<!-- Card 2 -->
				<div class="bg-border rounded-3xl h-[270px] p-2 overflow-hidden shadow-md relative flex">
					<img src="/blog/car2.svg" alt="Car" class="h-full w-[45%] object-cover rounded-l-2xl" />
					<span
						class="absolute bottom-[10px] h-13 text-center w-[198px] z-10 p-4 text-sm font-medium text-white rounded-full backdrop-blur-[24px] bg-[rgba(255,255,255,0.1)]"
					>
						Collabs
					</span>
					<div class="flex flex-col justify-between p-4 w-full">
						<div>
							<p class="text-[16px]  text-white/70">June 13, 2025</p>

							<h3 class="text-[20px] mt-4 font-semibold leading-snug">
								Andy shoes are designed to keeping in mind durability as well as trends, the most
								stylish range of shoes & sandals
							</h3>
						</div>
						<button
							class="w-10 h-10 mt-4 self-end flex items-center justify-center bg-[#ffffff] text-black rounded-full"
						>
							<span class="text-xl">↗</span>
						</button>
					</div>
				</div>

				<!-- Card 3 -->
				<div class="bg-border rounded-3xl h-[270px] p-2 overflow-hidden shadow-md relative flex">
					<img src="/blog/car3.svg" alt="Car" class="h-full w-[45%] object-cover rounded-l-2xl" />
					<span
						class="absolute text-center bottom-[10px] h-13 w-[198px] z-10 p-4 text-sm font-medium text-white rounded-full backdrop-blur-[24px] bg-[rgba(255,255,255,0.1)]"
					>
						Exclusive Giveaways
					</span>
					<div class="flex flex-col justify-between p-4 w-full">
						<div>
							<p class="text-[16px] text-white/70">June 13, 2025</p>
							
							<h3 class="text-[20px] mt-4 font-semibold leading-snug">
								The beautiful range of Apple Naturalé that has an exciting mix of natural
								ingredients.
							</h3>
						</div>
						<button
							class="w-10 h-10 mt-4 self-end flex items-center justify-center bg-[#ffffff] text-black rounded-full"
						>
							<span class="text-xl">↗</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>	


  <!-- Public Updates Section -->
<section class=" px-9  bg-border">
  <h2 class="text-white text-xl md:text-2xl font-semibold mb-6">Public Updates</h2>

  <div class="flex gap-4 overflow-x-auto no-scrollbar">
    <!-- Card 1 -->
    <div class="bg-border min-w-[320px] max-w-[340px] h-[370px] rounded-2xl shadow-md p-4 flex flex-col justify-between">
      <!-- Image Placeholder -->
      <div class="bg-white/10 rounded-xl h-[180px] w-full mb-4 flex items-center justify-center text-white text-sm">
        Image Placeholder
      </div>

      <span class="text-xs bg-white/10 text-white px-3 py-1 rounded-full w-max mb-2">Public Car Releases</span>

      <p class="text-xs text-white/60">June 13, 2025</p>
      <h3 class="text-sm text-white font-medium mt-1">
        The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients.
      </h3>
    </div>

    <!-- Card 2 (Detailed Style) -->
    <div class="bg-border min-w-[340px] max-w-[360px] h-[370px] rounded-2xl shadow-md p-4 flex flex-col justify-between">
      <p class="text-xs text-white/60 mb-1">June 13, 2025</p>
      <h3 class="text-[17px] text-white font-semibold leading-snug mb-2">
        The beautiful range of Apple Naturalé that has an exciting mix of
        <br />
        <span class="font-normal text-sm">
          Andy shoes are designed to keeping in mind durability as well as trends,
          the most stylish range of shoes & sandals
        </span>
      </h3>

      <button class="mt-auto bg-white/10 text-white text-xs px-4 py-1 rounded-full w-max">
        General Bug Fixes
      </button>
    </div>

    <!-- Card 3 (Same as 1) -->
    <div class="bg-border min-w-[320px] max-w-[340px] h-[370px] rounded-2xl shadow-md p-4 flex flex-col justify-between">
      <!-- Image Placeholder -->
      <div class="bg-white/10 rounded-xl h-[180px] w-full mb-4 flex items-center justify-center text-white text-sm">
        Image Placeholder
      </div>

      <span class="text-xs bg-white/10 text-white px-3 py-1 rounded-full w-max mb-2">Public Car Releases</span>

      <p class="text-xs text-white/60">June 13, 2025</p>
      <h3 class="text-sm text-white font-medium mt-1">
        The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients.
      </h3>
    </div>
  </div>

  <!-- Dots Navigation (Optional) -->
  <div class="flex justify-center mt-4 space-x-1">
    <span class="w-2 h-2 bg-white/40 rounded-full"></span>
    <span class="w-2 h-2 bg-white/80 rounded-full"></span>
    <span class="w-2 h-2 bg-white/40 rounded-full"></span>
    <span class="w-2 h-2 bg-white/40 rounded-full"></span>
  </div>
</section>



</div>
