<script>
	import DiningMenu from './DiningMenu.svelte';

	let menuOpen = $state(false);
</script>

<section class="restaurant-single" id="dining">
	<div class="single-layout">
		<div class="restaurant-text">
			<span class="section-tag">Dining Experience</span>
			<h2>Discover Our Dining Venues</h2>
			<p class="description">
				Indulge in exceptional dining at M'M Hotel. Whether you're craving a freshly brewed coffee,
				a delightful meal, handcrafted cocktails, or a relaxing shisha experience, we offer the
				perfect destination for every occasion.
			</p>
			<ul class="features">
				<li>Premium Coffee & Signature Beverages</li>
				<li>Local & International Cuisine</li>
				<li>Cocktails, Mocktails & Fine Spirits</li>
				<li>Premium Shisha Lounge Experience</li>
			</ul>
			<button class="btn" onclick={() => (menuOpen = true)}>View Menu</button>
		</div>

		<div class="restaurant-image">
			<div class="restaurant-card">
				<img src="/img/Coffee.webp" alt="Coffee Lounge" />
				<h3>Coffee Shop</h3>
				<p>
					Enjoy freshly brewed coffee, signature drinks, and refreshing frappes in a cozy atmosphere.
				</p>
			</div>
			<div class="restaurant-card">
				<img src="/img/restau.webp" alt="Restaurant" />
				<h3>Restaurant</h3>
				<p>
					Experience delicious local and international dishes prepared with quality ingredients.
				</p>
			</div>
			<div class="restaurant-card">
				<img src="/img/bar.webp" alt="Bar" />
				<h3>Bar</h3>
				<p>
					Unwind with handcrafted cocktails, refreshing drinks, tower drinks, and a vibrant atmosphere.
				</p>
			</div>
			<div class="restaurant-card">
				<img src="/img/shisha.jpeg" alt="Shisha Lounge" />
				<h3>Shisha Lounge</h3>
				<p>
					Relax and enjoy a premium shisha experience in a comfortable and stylish lounge setting.
				</p>
			</div>
		</div>
	</div>
</section>

{#if menuOpen}
	<DiningMenu onclose={() => (menuOpen = false)} />
{/if}
