<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let lightboxSrc = $state(null);
	let currentIndex = $state(0);
	let touchX = 0;

	const images = [
		'gallery/h.webp', 'gallery/galeri/1.webp', 'gallery/galeri/2.webp', 'gallery/galeri/3.webp', 'gallery/galeri/4.webp', 'gallery/galeri/5.webp',
		'gallery/galeri/6.webp', 'gallery/galeri/7.webp', 'gallery/galeri/8.webp', 'gallery/galeri/9.webp', 'gallery/galeri/10.webp', 'gallery/galeri/11.webp',
		'gallery/galeri/12.webp', 'gallery/galeri/13.webp', 'gallery/galeri/14.webp', 'gallery/galeri/15.webp', 'gallery/galeri/16.webp', 'gallery/galeri/17.webp',
		'gallery/galeri/18.webp', 'gallery/galeri/19.webp', 'gallery/galeri/20.webp', 'gallery/galeri/21.webp', 'gallery/galeri/22.webp', 'gallery/galeri/23.webp',
		'gallery/galeri/25.webp', 'gallery/galeri/26.webp', 'gallery/galeri/27.webp', 'gallery/galeri/28.webp', 'gallery/galeri/29.webp', 'gallery/galeri/30.webp',
		'gallery/galeri/31.webp', 'gallery/galeri/32.webp', 'gallery/galeri/33.webp', 'gallery/galeri/34.webp', 'gallery/galeri/35.webp', 'gallery/galeri/36.webp',
		'gallery/galeri/37.webp', 'gallery/galeri/38.webp', 'gallery/galeri/39.webp', 'gallery/galeri/40.webp', 'gallery/galeri/41.webp', 'gallery/galeri/42.webp',
		'gallery/galeri/43.webp', 'gallery/galeri/44.webp', 'gallery/galeri/45.webp', 'gallery/h1.webp', 'gallery/h4.webp', 'gallery/h5.webp',
		'gallery/h6.webp', 'gallery/h7.webp', 'gallery/h9.webp', 'gallery/h10.webp', 'gallery/hh.webp', 'gallery/r1.webp', 'gallery/r2.webp',
		'gallery/r3.webp', 'gallery/r4.webp', 'gallery/g1.webp', 'gallery/g3.webp', 'gallery/g4.webp', 'gallery/g5.webp', 'gallery/g6.webp',
		'gallery/g7.webp', 'gallery/g9.webp', 'gallery/g10.webp', 'gallery/g11.webp', 'gallery/g13.webp', 'gallery/g14.webp', 'gallery/g15.webp',
		'gallery/g16.webp', 'gallery/g17.webp'
	].map((p) => '/' + p);

	function openLightbox(index) {
		currentIndex = index;
		lightboxSrc = images[index];
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		lightboxSrc = images[currentIndex];
	}

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
		lightboxSrc = images[currentIndex];
	}

	function touchStart(e) {
		touchX = e.touches[0].clientX;
	}

	function touchEnd(e) {
		const dx = e.changedTouches[0].clientX - touchX;
		if (Math.abs(dx) > 40) {
			if (dx < 0) next();
			else prev();
		}
	}
</script>

<svelte:head>
	<title>Full Gallery | M'M Hotel</title>
	<meta name="description" content="Browse photos of M'M Hotel rooms, function hall, dining area, and amenities. See what awaits you at M'M Hotel." />
	<link rel="canonical" href="https://mmhotel.ph/gallery" />
</svelte:head>

<div class="gallery-page">
	<Navbar />
	<div class="container">
		<div class="gallery-grid">
			{#each images as src, i}
				<div class="gallery-item">
					<img src={src} alt="Hotel gallery image" loading="lazy" decoding="async" onclick={() => openLightbox(i)} role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && openLightbox(i)} />
				</div>
			{/each}
		</div>
	</div>
	<Footer />
</div>

{#if lightboxSrc}
	<div class="lightbox" style="display:flex" role="dialog" aria-modal="true" onclick={() => (lightboxSrc = null)}>
		<span class="close-lightbox" role="button" tabindex="0" onclick={() => (lightboxSrc = null)} onkeydown={(e) => e.key === 'Enter' && (lightboxSrc = null)}>&times;</span>
		<button class="lightbox-prev" onclick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">&#8249;</button>
		<button class="lightbox-next" onclick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">&#8250;</button>
		<img src={lightboxSrc} alt="Gallery photo" />
		<div class="lightbox-counter">{currentIndex + 1} / {images.length}</div>
	</div>
{/if}

<style>
	.gallery-page {
		padding-top: calc(var(--spacing-section) + 34px);
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--spacing-sm);
		max-width: var(--container-max);
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.gallery-item {
		overflow: hidden;
		border-radius: var(--rounded-xs);
		aspect-ratio: 4 / 3;
	}

	.gallery-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		cursor: pointer;
		transition: transform 0.5s ease, filter 0.3s ease;
	}

	.gallery-item img:hover {
		transform: scale(1.06);
		filter: brightness(0.9);
	}

	.gallery-item:focus-visible {
		outline: 2px solid var(--color-brand-yellow);
		outline-offset: 2px;
	}

	.lightbox {
		display: none;
		position: fixed;
		inset: 0;
		background: rgba(11,11,13,0.9);
		background-image: radial-gradient(ellipse at center, rgba(221,167,79,0.10), transparent 65%);
		justify-content: center;
		align-items: center;
		z-index: 9999;
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
	}

	.lightbox img {
		max-width: 90%;
		max-height: 90%;
		border-radius: var(--rounded-md);
		box-shadow: var(--shadow-4);
		animation: lightboxIn 0.3s ease;
	}

	@keyframes lightboxIn {
		from { opacity: 0; transform: scale(0.94); }
		to { opacity: 1; transform: scale(1); }
	}

	.close-lightbox {
		position: absolute;
		top: 20px; right: 26px;
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26px;
		line-height: 1;
		color: #fff;
		background: rgba(11,11,13,0.5);
		border: 1px solid rgba(255,255,255,0.3);
		border-radius: 50%;
		cursor: pointer;
		transition: color 0.2s ease, transform 0.2s ease, background 0.2s ease;
	}

	.close-lightbox:hover { color: #fff; background: var(--color-brand-yellow); border-color: var(--color-brand-yellow); transform: rotate(90deg); }

	.lightbox-prev, .lightbox-next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 22px;
		color: #fff;
		background: rgba(11,11,13,0.5);
		border: 1px solid rgba(255,255,255,0.3);
		border-radius: 50%;
		cursor: pointer;
		transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
		z-index: 10;
	}

	.lightbox-prev:hover, .lightbox-next:hover {
		background: var(--color-brand-yellow);
		border-color: var(--color-brand-yellow);
		transform: translateY(-50%) scale(1.05);
	}

	.lightbox-prev { left: 20px; }
	.lightbox-next { right: 20px; }

	.lightbox-counter {
		position: absolute;
		top: 18px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 12;
		color: rgba(255, 255, 255, 0.92);
		background: rgba(11, 11, 13, 0.55);
		backdrop-filter: blur(4px);
		padding: 5px 14px;
		border-radius: 999px;
		font: var(--typography-caption-bold);
		letter-spacing: 0.08em;
	}

	@media (max-width: 1023px) {
		.gallery-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: var(--spacing-sm);
		}
	}

	@media (max-width: 640px) {
		.gallery-page {
			padding-top: var(--spacing-section-sm);
		}

		.gallery-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-xs);
			padding: 0 var(--spacing-md);
		}

		.lightbox img {
			max-width: 100%;
			max-height: 70%;
		}

		.lightbox-prev,
		.lightbox-next {
			width: 44px;
			height: 44px;
			font-size: 18px;
		}

		.lightbox-prev {
			left: 8px;
		}

		.lightbox-next {
			right: 8px;
		}

		.close-lightbox {
			top: 12px;
			right: 14px;
			width: 44px;
			height: 44px;
			font-size: 24px;
		}

		.lightbox-counter {
			top: 20px;
		}
	}
</style>