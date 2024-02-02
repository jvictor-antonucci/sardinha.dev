<script>
	import '../app.css';
</script>

<header class="p-4 flex flex-row">
	<nav class="navbar basis-11/12 bg-card-color rounded-lg">
		<div class="navbar-start flex-1">
			<a href="/" class="menu menu-sm text-xl font-work">sardinha.dev</a>
		</div>
		<div class="navbar-end flex-none">
			<ul class="menu menu-horizontal">
				<li><a class="text-lg font-work" href="/projects">Projects</a></li>
			</ul>
		</div>
	</nav>
	<nav class="navbar bg-card-color basis-1/12 ml-4 rounded-lg">
		<ul class="menu menu-horizontal flex-row flex-nowrap justify-evenly">
			<li>
				<div role="button" class="btn btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
						/>
					</svg>
				</div>
			</li>
			<li>
				<details class="dropdown dropdown-end">
					<summary class="btn btn-ghost "
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
							/>
						</svg></summary
					>
					<ul class="dropdown-content bg-card-color p-1 menu menu-sm gap-1">
						<li><button class=""><span class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">PT</span> <span class="font-[sans-serif]">Português</span> </button></li>
						<li><button class=""><span class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">EN</span> <span class="font-[sans-serif]">Inglês</span> </button></li>
						<li><button class=""><span class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">ES</span> <span class="font-[sans-serif]">Espanhol</span> </button></li>
					</ul>
				</details>
			</li>
		</ul>
	</nav>
</header>

<slot />
