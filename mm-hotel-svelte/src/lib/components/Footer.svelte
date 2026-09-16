<script>
	import { onMount } from 'svelte';

	let showTop = $state(false);

	function handleScroll() {
		showTop = window.scrollY > 100;
	}

	function scrollTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<footer>
	<div class="sec footer_container">
		<div class="footer_col">
			<div class="footer_logo logo">
				<img src="/img/finallogo.webp" alt="" />
				<span>M'M Hotel</span>
			</div>
			<p class="footer_text">
				Your comfort and satisfaction are our priority. Experience the best hotel stay with us.
			</p>
			<ul class="footer_socials">
				<a
					aria-label="Email M'M Hotel"
					href="https://mail.google.com/mail/?view=cm&fs=1&to=mmreservationtandag@gmail.com&su=Room%20Booking%20Inquiry&body=Hello%2C%0D%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20room.%0D%0A%0D%0AThank%20you."
					target="_blank"><i class="ri-google-fill"></i
				></a>
				<a aria-label="M'M Hotel on Facebook" href="https://www.facebook.com/profile.php?id=61583191125175" target="_blank"><i class="ri-facebook-fill"></i></a>
				<a aria-label="M'M Hotel on YouTube" href="https://www.youtube.com/channel/UCSoSPDPvNb0YNoCu97cBq7A" target="_blank"><i class="ri-youtube-fill"></i></a>
				<a aria-label="M'M Hotel on Instagram" href="https://www.instagram.com/mmgroupcompanies/" target="_blank"><i class="ri-instagram-fill"></i></a>
				<a aria-label="M'M Hotel on TikTok" href="https://www.tiktok.com/@johnmer.marketing?is_from_webapp=1&sender_device=pc" target="_blank">
					<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="vertical-align: middle;">
						<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.38-6.22V9.4a8.16 8.16 0 0 0 4.84 1.58V7.53a4.85 4.85 0 0 1-1-.84z"/>
					</svg>
				</a>
			</ul>
		</div>

		<div class="footer_col">
			<h4>About</h4>
			<ul class="footer_links">
				<li><a href="#about" onclick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>About Us</a></li>
				<li><a href="#amenities" onclick={(e) => { e.preventDefault(); document.querySelector('#amenities')?.scrollIntoView({ behavior: 'smooth' }); }}>Features</a></li>
				<li><a href="#rooms" onclick={(e) => { e.preventDefault(); document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' }); }}>Rooms</a></li>
			</ul>
		</div>

		<div class="footer_col">
			<h4>Company</h4>
			<ul class="footer_links">
				<li><a href="https://mmgroupcompanies.com/" target="_blank">Partners</a></li>
				<li><a href="https://www.facebook.com/profile.php?id=61583191125175" target="_blank">FAQ</a></li>
				<li><a href="https://www.facebook.com/profile.php?id=61583191125175" target="_blank">Blog</a></li>
			</ul>
		</div>

		<div class="footer_col">
			<h4>Support</h4>
			<ul class="footer_links">
				<li><a href="https://www.facebook.com/profile.php?id=61583191125175" target="_blank">Help Center</a></li>
				<li><a href="https://www.facebook.com/profile.php?id=61583191125175" target="_blank">Feedback</a></li>
				<li><a href="https://www.facebook.com/profile.php?id=61583191125175" target="_blank">Contact Us</a></li>
			</ul>
		</div>
	</div>

	<div class="footer_bar">© 2025 M'M Hotel. All rights reserved.</div>
</footer>

<span class="top" class:show={showTop} role="button" tabindex="0" aria-label="Scroll to top" onclick={scrollTop} onkeydown={(e) => e.key === 'Enter' && scrollTop()}><i class="ri-arrow-up-circle-line"></i></span>
