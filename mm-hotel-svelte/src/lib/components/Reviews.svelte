<script>
	let slider = $state(null);

	const reviews = [
		{
			stars: '★★★★★',
			text: 'Amazing ambiance and excellent service. The food was outstanding and the coffee lounge is very relaxing.',
			name: 'Maria S.'
		},
		{ stars: '★★★★★', text: "It's Nice! it's recommendable, the staff are very professionals.", name: 'Regine S.' },
		{ stars: '★★★★★', text: 'Perfect place for coffee, dinner, and relaxation.', name: 'Aisha R.' },
		{ stars: '★★★★☆', text: 'Excellent service, must be sustained.', name: 'June G.' },
		{ stars: '★★★★★', text: 'Good Services', name: 'Cristy.' }
	];

	function scroll(amount) {
		if (slider) slider.scrollBy({ left: amount, behavior: 'smooth' });
	}
</script>

<section class="reviews-section" id="reviews">
	<div class="container">
		<p class="section-subtitle">Real Experiences</p>
		<h2 class="heading_1">What Our Guests Say</h2>

		<div class="reviews-slider-wrapper">
			<button class="slider-btn prev" onclick={() => scroll(-340)} aria-label="Previous review">&lt;</button>

			<div class="reviews-slider" bind:this={slider}>
				{#each reviews as review}
					<div class="review-card">
						<div class="stars">{review.stars}</div>
						<p class="review-text">"{review.text}"</p>
						<h4 class="review-name"> {review.name}</h4>
					</div>
				{/each}
			</div>

			<button class="slider-btn next" onclick={() => scroll(340)} aria-label="Next review">&gt;</button>
		</div>
	</div>
</section>
