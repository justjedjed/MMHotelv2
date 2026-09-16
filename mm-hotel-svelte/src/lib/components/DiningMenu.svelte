<script>
	let { onclose } = $props();

	let currentIndex = $state(0);
	const menuImages = [
		'/menu/2.png', '/menu/3.png', '/menu/4.png', '/menu/5.png', '/menu/6.png',
		'/menu/7.png', '/menu/8.png', '/menu/9.png', '/menu/10.png', '/menu/11.png', '/menu/12.png'
	];

	const total = menuImages.length;

	function prev() {
		currentIndex = (currentIndex - 1 + total) % total;
	}

	function next() {
		currentIndex = (currentIndex + 1) % total;
	}

	function close() {
		onclose?.();
	}
</script>

<div id="menuModal" class="menu-modal show" role="dialog" aria-modal="true" onclick={close}>
	<div class="menu-modal-content" role="document" onclick={(e) => e.stopPropagation()}>
		<span class="menu-close" role="button" tabindex="0" onclick={close} onkeydown={(e) => e.key === 'Enter' && close()}>&times;</span>
		<div class="menu-slider">
			<button class="menu-arrow prev" onclick={prev}>&#10094;</button>
			<img src={menuImages[currentIndex]} alt={`Menu page ${currentIndex + 1}`} />
			<button class="menu-arrow next" onclick={next}>&#10095;</button>
		</div>
		<div class="menu-dots">
			{#each menuImages as _, i}
				<button
					class="dot"
					class:active={i === currentIndex}
					aria-label={`Go to menu page ${i + 1}`}
					onclick={() => (currentIndex = i)}></button>
			{/each}
		</div>
	</div>
</div>
