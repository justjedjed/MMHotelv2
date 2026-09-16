<script>
	const aboutImages = [
		{ src: '/gallery/r2.webp', text: 'Clean and cozy rooms designed for your comfort.' },
		{ src: '/img/hotel2.webp', text: 'Modern facilities and relaxing environment.' },
		{ src: '/gallery/h9.webp', text: 'Finest hospitality from our professional staff.' },
		{ src: '/gallery/function.webp', text: 'Elegant function hall for weddings and events.' }
	];

	const chooseItems = [
		{ title: 'Modern Comfort', desc: 'Spacious loft rooms with warm minimalist interiors.' },
		{ title: 'Warm Hospitality', desc: 'Friendly, attentive, and personalized customer service.' },
		{ title: 'Prime Location', desc: 'Convenient access to lifestyle spots and essential areas.' },
		{ title: 'Café Lounge & Bar', desc: 'Handcrafted coffee, pastries, cocktails, and more.' }
	];
</script>

<section class="sec about" id="about">
	<div class="about_container">
		<div class="about_heading">
			<div>
				<p class="section-tag">About Us</p>
				<h3 class="heading_1">Discover M’M Hotel</h3>
				<h1 class="heading">Redefining Comfort the <span> M'M Way</span></h1>
			</div>

			<p class="para">
				Welcome to M'M Hotel, where modern minimalist luxury meets warm Filipino hospitality. Guided by our
				promise of "Redefining comfort the M'M way," we create spaces that feel refreshing, relaxing, and
				thoughtfully designed. Our signature loft-type rooms offer a unique and spacious stay, blending
				elegant interiors with functional comfort. Clean lines, warm tones, and curated details come together
				to create a serene atmosphere perfect for both leisure and business travelers.
				<br /><br />
				Experience more than just a stay — unwind at our Café Lounge & Bar, where you can enjoy handcrafted
				coffee, gourmet beverages, signature cocktails, and freshly made pastries crafted by our talented chef
				and pastry chef. It's the ideal spot to relax, connect, or savor a quiet moment. At M'M Hotel, we are
				committed to delivering personalized and reliable service that elevates your stay from the moment you
				arrive. With convenient access to essential destinations and lifestyle spots, everything you need is
				always within reach. Stay with us and discover how we are truly redefining comfort the M'M way.
			</p>
		</div>

		<div class="about_box">
			{#each aboutImages as img}
				<div class="box1">
					<img src={img.src} alt="" />
					<div class="box1_text">
						<p class="para1">{img.text}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="divider_line"></div>

		<div class="choose_section">
			<p class="section-tag">Why Us</p>
			<h3 class="heading_1">Why Choose M’M Hotel?</h3>
			<h2 class="heading-2">Experience Comfort, Style & Exceptional Service</h2>

			<p class="para" style="text-align:center; max-width:700px; margin:16px auto 48px;">
				At M'M Hotel, every stay is designed with your comfort in mind. Our loft rooms, inviting spaces, and
				reliable service create an experience that feels effortless and refreshing.
			</p>

			<div class="choose_items">
				{#each chooseItems as item}
					<div class="choose_item">
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
