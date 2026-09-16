<script>
	let lightboxSrc = $state(null);

	const images = [
		'/gallery/hh.webp', '/gallery/g3.webp', '/gallery/g4.webp', '/gallery/g5.webp',
		'/gallery/h7.webp', '/gallery/g10.webp', '/gallery/g14.webp', '/gallery/r4.webp',
		'/gallery/galeri/46.webp', '/rooms/R1.webp'
	];
</script>

{#if lightboxSrc}
	<div id="lightbox" class="lightbox" style="display:flex" role="dialog" aria-modal="true" onclick={() => (lightboxSrc = null)}>
		<span class="close-lightbox" role="button" tabindex="0" onclick={() => (lightboxSrc = null)} onkeydown={(e) => e.key === 'Enter' && (lightboxSrc = null)}>&times;</span>
		<img src={lightboxSrc} alt="Gallery photo" />
	</div>
{/if}

<section class="gallery" id="gallery">
	<div class="head">
		<p class="section-tag">Our Gallery</p>
		<h2 class="headinghome">Discover the M'M Experience</h2>
	</div>

	<div class="gallery-grid">
		{#each images as src}
			<div class="gallery-item">
				<img src={src} alt="Hotel gallery image" role="button" tabindex="0" onclick={() => (lightboxSrc = src)} onkeydown={(e) => e.key === 'Enter' && (lightboxSrc = src)} />
			</div>
		{/each}
	</div>

	<div class="see-more-container">
		<a href="/gallery" class="see-more-btn">See More Photos</a>
	</div>
</section>