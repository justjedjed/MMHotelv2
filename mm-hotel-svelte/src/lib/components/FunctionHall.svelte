<script>
	let modalOpen = $state(false);
	let lightboxSrc = $state(null);

	const events = ['Weddings', 'Birthdays', 'Corporate Events', 'Seminars', 'Anniversaries', 'Reunions', 'Christenings', 'Meetings'];
	const services = ['Tables', 'Chairs', 'Air-conditioned Venue', 'Basic Sound System', 'Projector', 'Groom & Bride Chairs'];
</script>

{#if lightboxSrc}
	<div class="image-modal" style="display:flex" role="dialog" aria-modal="true" onclick={() => (lightboxSrc = null)}>
		<span class="close" role="button" tabindex="0" onclick={() => (lightboxSrc = null)} onkeydown={(e) => e.key === 'Enter' && (lightboxSrc = null)}>&times;</span>
		<img class="modal-content" src={lightboxSrc} alt="Function Hall photo" />
	</div>
{/if}

<section class="function-section" id="functionHall">
	<div class="function-wrapper">
		<div class="function-image">
			<img src="/gallery/galeri/8.webp" alt="M'M Function Hall" role="button" tabindex="0" onclick={() => (lightboxSrc = '/gallery/galeri/8.webp')} onkeydown={(e) => e.key === 'Enter' && (lightboxSrc = '/gallery/galeri/8.webp')} />
		</div>

		<div class="function-content">
			<span class="section-tag">Celebrate Every Occasion</span>
			<h2>M'M Function Hall</h2>
			<p class="description">
				An elegant venue for weddings, birthdays, corporate events, seminars, reunions, and private
				celebrations, complete with modern amenities and exceptional service.
			</p>
			<div class="event-list">
				{#each events as event}
					<div>{event}</div>
				{/each}
			</div>
			<button onclick={() => (modalOpen = true)}>View Details →</button>
		</div>
	</div>
</section>

{#if modalOpen}
	<div id="functionModal" class="function-modal" style="display:block" role="dialog" aria-modal="true" onclick={() => (modalOpen = false)}>
		<div class="function-modal-content" role="document" onclick={(e) => e.stopPropagation()}>
			<span class="close-modal" role="button" tabindex="0" onclick={() => (modalOpen = false)} onkeydown={(e) => e.key === 'Enter' && (modalOpen = false)}>&times;</span>
			<img src="/gallery/galeri/46.webp" alt="M'M Function Hall" />
			<div class="modal-body">
				<span class="modal-tag">M'M HOTEL</span>
				<h2>Function Hall</h2>
				<p class="modal-description">
					Celebrate unforgettable moments in our elegant, air-conditioned Function Hall. Perfect for
					weddings, birthdays, corporate events, seminars, and other special occasions.
				</p>
				<div class="modal-pricing">
					<div>
						<h4>Rental Price</h4>
						<p>₱ 7,900 <span>/ 4 Hours</span></p>
						<small>Good for 70 Pax</small>
					</div>
					<div>
						<h4>Extension</h4>
						<p>₱ 990 <span>/ Hour</span></p>
					</div>
				</div>
				<h3>Venue Services</h3>
				<div class="modal-list">
					{#each services as s}
						<div>{s}</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
