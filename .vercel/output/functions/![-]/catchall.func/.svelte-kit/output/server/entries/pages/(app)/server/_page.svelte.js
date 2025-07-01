import { c as create_ssr_component, a as add_attribute, e as escape, b as each } from "../../../../chunks/ssr2.js";
const totalSeconds = 60;
const totalPages = 6;
const radius = 16;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let seconds = 60;
  let currentPage = 1;
  const circumference = 2 * Math.PI * radius;
  let cards = [
    {
      thumbnail: "/Rectangle 115.png",
      title: "Heavy Traffic I Public I NO DLC 2",
      badge: { icon: "/bjli.svg", label: "Featured" },
      tier: { icon: "Vector (1).svg", label: "Public" },
      bg: "bg-[rgba(255,255,255,0.1)]",
      dp: "",
      country: { icon: "/flag.svg", name: "Australia" },
      players: { icon: "/Vector (3).svg", count: "18/32" },
      traffic: { icon: "/grr.svg", level: "Light Traffic" },
      location: {
        icon: "/fi_12123759.svg",
        name: "Barcelona"
      },
      city: {
        icon: "/fi_12123759.svg",
        name: "Barcelona"
      },
      rating: {
        svg: {
          path: "polygon",
          points: [
            "12 2",
            "15.09 8.26",
            "22 9.27",
            "17 14.14",
            "18.18 21.02",
            "12 17.77",
            "5.82 21.02",
            "7 14.14",
            "2 9.27",
            "8.91 8.26",
            "12 2"
          ],
          style: {
            fill: "transparent",
            stroke: "#5B5B5B",
            strokeWidth: 2
          }
        },
        image: "/Polygon 1.svg"
      }
    },
    {
      thumbnail: "/Rectangle 115.png",
      title: "No Rules Server | Europe ",
      badge: { icon: "/bjli.svg", label: "Popular" },
      tier: { icon: "Vector (1).svg", label: "Tier 1" },
      bg: "bg-[rgba(255,255,255,0.1)]",
      dp: "drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]",
      country: { icon: "/flag.png", name: "Germany" },
      players: { icon: "/Vector (3).svg", count: "27/32" },
      traffic: { icon: "/grr.svg", level: "Heavey Trffic" },
      location: { icon: "/fi_12123759.svg", name: "Rome" },
      rating: {
        svg: {
          path: "polygon",
          points: [
            "12 2",
            "15.09 8.26",
            "22 9.27",
            "17 14.14",
            "18.18 21.02",
            "12 17.77",
            "5.82 21.02",
            "7 14.14",
            "2 9.27",
            "8.91 8.26",
            "12 2"
          ],
          style: {
            fill: "transparent",
            stroke: "#5B5B5B",
            strokeWidth: 2
          }
        },
        image: "/Polygon 1.svg"
      }
    },
    {
      thumbnail: "/Rectangle 115.png",
      title: "Simulation Only | Strict Rules",
      badge: { icon: "/bjli.svg", label: "New" },
      tier: { icon: "ortire.svg", label: "Tier 2" },
      dp: "drop-shadow-[0_0_20px_rgba(255,129,38,0.7)] ",
      bg: "bg-[rgba(175,74,0,0.2)]",
      country: {
        icon: "/NL - Netherlands.svg",
        name: "United Kingdom"
      },
      players: { icon: "/Vector (3).svg", count: "12/32" },
      traffic: { icon: "/grr.svg", level: "Light Traffic" },
      location: { icon: "/fi_12123759.svg", name: "London" },
      rating: {
        svg: {
          path: "polygon",
          points: [
            "12 2",
            "15.09 8.26",
            "22 9.27",
            "17 14.14",
            "18.18 21.02",
            "12 17.77",
            "5.82 21.02",
            "7 14.14",
            "2 9.27",
            "8.91 8.26",
            "12 2"
          ],
          style: {
            fill: "transparent",
            stroke: "#5B5B5B",
            strokeWidth: 2
          }
        },
        image: "/Polygon 1.svg"
      }
    },
    {
      thumbnail: "/Rectangle 115.png",
      title: "Chill Convoy | Voice Chat Enabled",
      badge: { icon: "/bjli.svg", label: "Featured" },
      tier: { icon: "3itir.svg", label: "Tier 3" },
      bg: "bg-[rgba(155,0,58,0.2)]",
      dp: "drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]",
      country: {
        icon: "/NL - Netherlands.svg",
        name: "France"
      },
      players: { icon: "/Vector (3).svg", count: "5/20" },
      traffic: {
        icon: "/grr.svg",
        level: "Realistic Traffic"
      },
      location: { icon: "/fi_12123759.svg", name: "Paris" },
      rating: {
        svg: {
          path: "polygon",
          points: [
            "12 2",
            "15.09 8.26",
            "22 9.27",
            "17 14.14",
            "18.18 21.02",
            "12 17.77",
            "5.82 21.02",
            "7 14.14",
            "2 9.27",
            "8.91 8.26",
            "12 2"
          ],
          style: {
            fill: "transparent",
            stroke: "#5B5B5B",
            strokeWidth: 2
          }
        },
        image: "/Polygon 1.svg"
      }
    }
  ];
  offset = circumference * seconds / totalSeconds;
  return `<div class="mt-[136px] w-full px-2 sm:px-6 lg:px-9 "><h1 class="text-[39px] font-semibold font-inter text-[#eeedee] sm:text-4xl" data-svelte-h="svelte-124h8xs">Servers</h1> <div class="mt-5 rounded-2xl border border-border-light p-2" data-svelte-h="svelte-8gxdh"><div class="flex flex-col gap-2 lg:flex-row"><div class="h-[240px] w-full rounded-xl bg-gradient-to-br from-[#B451FF] to-[#3B105C] lg:max-w-[388px]"><div class="m-4 inline-flex items-center gap-2 rounded-2xl bg-[#FFFFFF] px-3 py-1 shadow-sm"> <img src="/str.svg" alt="Feature Icon" class="h-3 w-3"> <span class="text-sm font-semibold font-inter text-[#8A06EF]">Brand new feature</span></div> <div class="mt-20 px-6 pb-6 text-[#FFFFFF] font-inter leading-1 "><p class="text-lg font-medium sm:text-xl md:text-2xl lg:text-[29px]">You can now <span class="font-bold">host your own servers</span> and
						<span class="underline">it’s free!</span></p></div></div> <div class="w-full rounded-xl bg-cover bg-center bg-no-repeat sm:h-[240px] md:h-[280px] lg:h-[240px]" style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), radial-gradient(36.24% 104.38% at 40.01% 64.79%, rgba(156, 53, 234, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */; "><img src="/Frame 2735.png" class="sm:h-[240px] md:h-[280px] lg:h-[240px] lg:w-full" alt=""> </div></div></div> <div class="mt-6 h-[36px]"><div class="flex flex-wrap items-center justify-between gap-3"><div class="font-inter-tight rounded-2xl text-[#EEEDEEAD]" data-svelte-h="svelte-175b0jr"><div class="flex w-full flex-wrap items-center font-inter justify-start gap-3 sm:w-auto"><div class="relative"><input type="text" placeholder="Search" class="h-[36px] w-[256px] rounded-md border border-border-light bg-[#161416] pl-9 pr-3 text-sm placeholder-white/50 focus:outline-none"> <img src="/Search.png" alt="Search" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50"></div> <button class="flex h-[36px] items-center gap-2 rounded-md border bg-border px-2 py-1 border-border-light text-sm transition hover:bg-white/10"><img src="/Car.png" alt="Cars" class="h-[10px] w-[18px] opacity-60"> <span class="text-[14px] font-normal">Cars</span> <span class="ml-1 rounded border border-border-light px-2 py-[4px] text-[12px] bg-border-light font-medium">Selected Cars <span class="bg-white/6 ml-1 rounded-sm py-[2px] px-1 text-[12px] bg-border-light font-medium">10</span></span></button> <div class="flex h-[36px] items-center gap-1 rounded-md border border-border bg-border px-1 py-1 text-sm transition hover:bg-white/10 sm:gap-2 sm:px-2"><img src="/Funnel.png" alt="Filter" class="h-4.2 w-4.2 opacity-60"> <span class="whitespace-nowrap text-[14px] font-normal">Filter By</span> <div class="ml-2 flex h-full items-center gap-1"><span class="rounded border border-border-light bg-border-light px-0.5 py-[4px] text-[12px] font-medium sm:px-2">Europe</span> <span class="whitespace-nowrap border border-border-light rounded bg-border-light px-1 py-[4px] text-[12px] font-medium sm:px-2">Traffic Density <span class="ml-1 bg-border-light px-1 rounded-sm py-[2px]">2</span></span> <span class="whitespace-nowrap border border-border-light rounded bg-border-light px-1 py-[4px] text-[12px] font-medium sm:px-2">Tier <span class="ml-1 bg-border-light px-1 py-0.5 rounded-sm">2</span></span></div></div> <button class="flex h-[36px] items-center gap-2 rounded-md border border-border-light bg-[#161416] px-2 py-1 text-sm transition hover:bg-white/10"><img src="/Server-button.png" alt="Favourite" class="h-5 w-5 opacity-60"> <span class="text-[14px] font-normal">Favourite Servers</span> <span class="ml-1 rounded-sm bg-border-light px-1 text-[12px] font-medium ">2</span></button> <button class="h-[36px] rounded-md bg-border-light px-4 py-1.5 text-[13px] font-medium transition hover:bg-white/20">Reset Filters</button></div></div> <div class="relative h-[26px] w-[26px] flex justify-end text-[#EEEDEEAD]"> <svg class="h-full w-full rotate-[-90deg]" viewBox="0 0 40 40"><circle cx="20" cy="20"${add_attribute("r", radius, 0)} stroke="#2d2d2d" stroke-width="4" fill="none"></circle><circle cx="20" cy="20"${add_attribute("r", radius, 0)} stroke="white" stroke-width="4" fill="none"${add_attribute("stroke-dasharray", circumference, 0)}${add_attribute("stroke-dashoffset", offset, 0)}${add_attribute("class", "transition-fast", 0)}></circle></svg>  <div class="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-[#ewewrew]">${escape(seconds)}</div></div></div></div> ${`<div class="mt-60 sm:mt-26 md:mt:30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">${each(cards, (card) => {
    return ` <div class="group flex cursor-pointer flex-col rounded-2xl border border-border text-[#EEEDEEAD] bg-border font-inter p-4 shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,129,38,0.2)] sm:p-5 lg:p-6"> <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">  <div class="flex items-center justify-between w-full"><div class="flex w-full items-center gap-1.5 bg-background-light text-sm"><div class="${"flex h-[36px] w-[90px] items-center justify-center gap-1 rounded-2xl px-1 py-2 font-medium " + escape(card.bg, true) + " " + escape(card.dp, true)}"><img${add_attribute("src", card.tier.icon, 0)} class="${"h-[15px] w-[15px] rounded-2xl " + escape(card.dp, true)}" alt="tier"> <span class="whitespace-nowrap py-2 text-[15px] font-medium">${escape(card.tier.label)}</span> </div></div> <div class="flex w-[72px] items-center gap-3 bg-background-light px-1 py-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-[20px] w-[20px] fill-transparent stroke-[#5B5B5B] stroke-2 transition hover:fill-[#5B5B5B]"><polygon${add_attribute("points", card.rating.svg.points.join(" "), 0)}></polygon></svg> <img${add_attribute("src", card.rating.image, 0)} class="h-[20px] w-[20px]" alt="rating"> </div></div> </div>  <div class="mt-4 flex flex-col gap-5"> <div class="items-center gap-3"><img${add_attribute("src", card.country.icon, 0)} alt="flag" class="h-[18px] w-6"> <h5 class="mt-4 text-[18px] font-semibold text-white sm:text-[22px] lg:text-[26px]">${escape(card.title)} </h5></div>  <div class="flex flex-wrap items-start gap-4 text-sm text-white/70"><div class="flex items-center gap-2"><img${add_attribute("src", card.players.icon, 0)} alt="players" class="h-4 w-4"> <span>${escape(card.players.count)}</span></div> <div class="flex items-center gap-2"><img${add_attribute("src", card.traffic.icon, 0)} alt="traffic" class="h-4 w-4"> <span>${escape(card.traffic.level)}</span></div> <div class="flex items-center gap-2"><img${add_attribute("src", card.location.icon, 0)} alt="location" class="h-4 w-4"> <span>${escape(card.location.name)}</span></div> </div></div> </div>`;
  })}</div>`} <div class="flex items-center justify-center gap-2 p-4 mt-12 font-inter"> <button class="w-12 h-12 flex items-center justify-center rounded-lg border border-border-light bg-border text-[#FFFFFF] disabled:opacity-30" ${"disabled"}><img src="CaretLeft (3).svg" alt=""></button>  ${each(Array(totalPages).fill(0).map((_, i) => i + 1), (page) => {
    return `${page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1 ? `<button${add_attribute(
      "class",
      `w-12 h-12 flex items-center justify-center rounded-lg border  text-[16px]
					${currentPage === page ? "bg-[#FFFFFF] text-black border-white" : "border-background-light text-[#FFFFFFFF] hover:bg-white/10 transition"}`,
      0
    )}>${escape(page)} </button>` : `${page === currentPage - 2 || page === currentPage + 2 ? `<span class="w-12 h-12 flex items-center bg-background-light border rounded-md text-[#FFFFFF] border-[#FFFFFF] justify-center text-white" data-svelte-h="svelte-1qz6zqz">...</span>` : ``}`}`;
  })}  <button class="w-12 h-12 flex items-center justify-center rounded-lg border border-background-light text-[#FFFFFF] text-white disabled:opacity-30" ${""}><img src="CaretLeft (2).svg" alt=""></button></div></div>`;
});
export {
  Page as default
};
