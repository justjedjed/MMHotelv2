<script>
	import { onMount } from 'svelte';
	import { getTheme, toggleTheme } from '$lib/theme.svelte';

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let currentTheme = $state('light');
	let overHero = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
		overHero = isHome() && !scrolled;
	}

	onMount(() => {
		currentTheme = getTheme();
		overHero = isHome();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleToggle() {
		toggleTheme();
		currentTheme = getTheme();
	}

	function closeMenu() {
		menuOpen = false;
	}

	function isHome() {
		return window.location.pathname === '/' || window.location.pathname === '/index.html';
	}

	function scrollToSection(e) {
		e.preventDefault();
		const href = e.currentTarget.getAttribute('href');
		if (isHome()) {
			const target = document.querySelector(href);
			if (target) target.scrollIntoView({ behavior: 'smooth' });
		} else {
			window.location.href = '/' + href;
		}
		closeMenu();
	}
</script>

<nav class="navbar" class:scrolled class:over-hero={overHero}>
	<div class="logo">
		<a href="/#home"><img src="/img/finallogo.webp" alt="M'M Hotel logo" /></a>
	</div>

	<ul class="nav_items" class:open={menuOpen}>
		<div class="item">
			<li><a href="#home" onclick={scrollToSection}>Home</a></li>
			<li><a href="#rooms" onclick={scrollToSection}>Rooms</a></li>
			<li><a href="#amenities" onclick={scrollToSection}>Features</a></li>
			<li><a href="#dining" onclick={scrollToSection}>Dining</a></li>
			<li><a href="#functionHall" onclick={scrollToSection}>Function Hall</a></li>
			<li><a href="#about" onclick={scrollToSection}>About</a></li>
			<li><a href="#reviews" onclick={scrollToSection}>Reviews</a></li>
			<li><a href="#gallery" onclick={scrollToSection}>Gallery</a></li>
			<li><a href="#contact" onclick={scrollToSection}>Contact</a></li>
		</div>
	</ul>

	<div class="nav-right">
		<button
			class="theme-toggle"
			type="button"
			aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			onclick={handleToggle}>
			<i class={currentTheme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}></i>
		</button>

		<button
			class="nav_menu"
			type="button"
			aria-label="Toggle navigation menu"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}>
			<i class={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
		</button>
	</div>
</nav>
