<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Rooms from '$lib/components/Rooms.svelte';
	import Amenities from '$lib/components/Amenities.svelte';
	import Dining from '$lib/components/Dining.svelte';
	import FunctionHall from '$lib/components/FunctionHall.svelte';
	import About from '$lib/components/About.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>M'M Hotel — Redefining Comfort the M'M Way</title>
	<meta name="description" content="M'M Hotel in Tandag City, Surigao del Sur — modern minimalist luxury rooms, function hall for weddings and events, fine dining, and warm Filipino hospitality. Book your stay today." />
	<link rel="canonical" href="https://mmhotel.ph/" />
</svelte:head>

<Navbar />
<Hero />
<Rooms />
<Amenities />
<Dining />
<FunctionHall />
<About />
<Reviews />
<Gallery />
<Contact />
<Footer />
