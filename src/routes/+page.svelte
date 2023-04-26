<script lang="ts">
	import { onMount } from 'svelte';
	import MetaButtons from '../components/MetaButtons.svelte';

	let words: string[];
	let bottomText = 'Welcome to NetSu';
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%$#';

	onMount(async () => {
		try {
			const req = await fetch('/words.txt');

			if (!req) {
				throw null;
			}

			const text = await req.text();
			words = text.split('\n');
		} catch {
			throw null;
		}

		const newIndex = Math.floor(Math.random() * words.length);
		const newWord = words[newIndex];

		const elem = document.getElementById('owo')!;
		const gl = document.getElementById('glitch')!;

		gl.onmouseover = () => {
			let iters = 0;

			const interval = setInterval(() => {
				gl.innerText = gl.innerText
					.split('')
					.map((_letter, index) => {
						if (index < iters) {
							return (gl.dataset as any).value[index];
						}
						return alphabet[Math.floor(Math.random() * alphabet.length)];
					})
					.join('');

				if (iters > 7) clearInterval(interval);

				iters += 1;
			}, 50);
		};
		elem.style.opacity = '0';
		elem.textContent = newWord;
		elem.style.opacity = '1';
	});
</script>

<main>
	<div class="flex flex-col items-center justify-center h-screen">
		<h1>NetSu.<span class="network" id="glitch" data-value='NETWORK'>NETWORK</span></h1>
		<MetaButtons />
		<div class="grid grid-flow-row-dense text-sm lg:text-lg">
			<h2 id="owo" style="opacity: 0;">{bottomText}</h2>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		@apply h-screen w-screen;
	}

	span {
		&.network {
			@apply text-lg font-bold;
		}
	}

	h1 {
		background: linear-gradient(to right, #b4d9ef, #f8c57c, #f8c57c);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		margin: 0;

		@apply text-8xl;
	}

	h2 {
		color: white;

		opacity: 1;
		transition: opacity 2s ease-in-out;
	}
</style>
