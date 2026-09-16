<script>
	const amenities = [
		{ icon: '/icon/free-wifi.webp', title: 'Free WiFi', desc: 'Stay connected with high-speed internet access throughout the hotel.' },
		{ icon: '/icon/latte-art.webp', title: 'Coffee Shop', desc: 'Relax and enjoy freshly brewed coffee, pastries, and a cozy atmosphere perfect for work or leisure.' },
		{ icon: '/icon/bar.webp', title: 'Restobar', desc: 'Unwind with delicious food, signature drinks, and live ambiance at our stylish restobar.' },
		{ icon: '/icon/hookah.png', title: 'Shisha Lounge', desc: 'Relax in our cozy shisha lounge and enjoy a premium selection of flavorful shisha.' },
		{ icon: '/icon/hall.webp', title: 'Function Hall', desc: 'Host events, meetings, and gatherings in our spacious and fully equipped function hall.' },
		{ icon: '/icon/parking-area.webp', title: 'Parking Area', desc: 'Enjoy convenient and secure parking with ample space for all guests, available 24/7.' },
		{ icon: '/icon/luandry.webp', title: 'Laundry Shop', desc: 'Keep your clothes fresh and clean with our reliable laundry services.' },
		{ icon: '/icon/24-hours-service.webp', title: '24/7 Front Desk', desc: 'Our friendly staff is available around the clock to assist you with check-ins and inquiries.' }
	];

	const pastelClasses = ['card-feature-yellow', 'card-feature-teal', 'card-feature-coral', 'card-feature-rose'];
</script>

<section class="sec amenities" id="amenities">
	<div class="head">
		<p class="section-tag">What We Offer</p>
		<h2 class="heading-1">Amenities & Services</h2>
		<p class="subtitle" style="text-align:center; margin-top:8px;">Comfort • Convenience • Relaxation</p>
	</div>

	<div class="boxes">
		{#each amenities as item, i}
			<div class="box {pastelClasses[i % pastelClasses.length]}">
				<img src={item.icon} alt={item.title} />
				<h4>{item.title}</h4>
				<p>{item.desc}</p>
			</div>
		{/each}
	</div>
</section>
