<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { initTheme } from '$lib/theme.svelte';
	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="M'M Hotel — Modern minimalist luxury hotel in Tandag City, Surigao del Sur, Philippines. Affordable rooms, function hall, dining, and warm Filipino hospitality. Book your stay today." />
	<meta name="keywords" content="M'M Hotel, M'M Hotel Tandag, Hotel in Tandag, Tandag city hotel, hotel in Tandag city, Tandag hotel, hotels in Tandag Surigao del Sur, Tandag City hotel, best hotel in Tandag, affordable hotel Tandag, luxury hotel Tandag, Tandag accommodation, book hotel Tandag, staycation Tandag, place to stay in Tandag, hotel near Tandag plaza, Tandag City accommodation, Tandag City travel, laundry shop in Tandag, laundry services Tandag, laundromat Tandag, laundry shop near me Tandag, coffee shop in Tandag, cafe Tandag, coffee shop near me Tandag, best coffee Tandag, restaurant in Tandag, restaurant near Tandag, eat in Tandag, dining Tandag, resto Tandag City, function hall Tandag, banquet hall Tandag, wedding venue Tandag, event venue Tandag, seminar venue Tandag, hotel with function hall Tandag, hotel Surigao del Sur, Surigao del Sur accommodation, hotel Mindanao, affordable hotel, luxury hotel, accommodation, book hotel, staycation, restaurant, dining, Tandag City, hotel in Tandag city" />
	<meta name="author" content="M'M Hotel" />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="M'M Hotel — Redefining Comfort the M'M Way" />
	<meta property="og:description" content="Modern minimalist luxury meets warm Filipino hospitality. Affordable rooms, function hall, dining, and more." />
	<meta property="og:image" content="/img/mmbg.webp" />
	<meta property="og:locale" content="en_PH" />
	<meta property="og:site_name" content="M'M Hotel" />
	<meta property="og:latitude" content="9.0783" />
	<meta property="og:longitude" content="126.1936" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="M'M Hotel — Redefining Comfort the M'M Way" />
	<meta name="twitter:description" content="Modern minimalist luxury meets warm Filipino hospitality. Affordable rooms, function hall, dining, and more." />
	<meta name="twitter:image" content="/img/mmbg.webp" />

	<!-- Geo -->
	<meta name="geo.region" content="PH-16" />
	<meta name="geo.placename" content="Tandag City, Surigao del Sur" />

	<link rel="canonical" href="https://mmhotel.ph/" />
</svelte:head>

{@render children()}
