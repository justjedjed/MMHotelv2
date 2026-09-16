<script>
	let videoOpen = $state(false);

	function openVideo() {
		videoOpen = true;
	}

	function closeVideo() {
		videoOpen = false;
	}

	function openMessenger() {
		window.open('https://www.facebook.com/profile.php?id=61583191125175', '_blank');
	}
</script>

<header id="home">
	<section class="home">
		<p class="section-tag">Welcome to M'M Hotel</p>
		<h1 class="headinghome">Redefining Comfort<br />the M'M Way</h1>
		<p class="headinghome_1">
			Comfort is more than a promise it's an experience we carefully craft in every stay.
			Our signature blend of modern design, warm hospitality, and thoughtful service ensures
			that every guest feels relaxed, valued, and truly at home.
		</p>
		<div class="main_btn">
			<button class="btn" onclick={openMessenger}>Book Now</button>
			<button class="btn btn2" onclick={openVideo}>
				<i class="ri-play-circle-line"></i> Watch Tour
			</button>
		</div>
	</section>
	<span class="scroll-cue"><i class="ri-arrow-down-s-line"></i>Scroll</span>
</header>

{#if videoOpen}
	<div id="videoModal" class="video-modal show" role="dialog" aria-modal="true" onclick={closeVideo}>
		<div class="video-modal-content" role="document" onclick={(e) => e.stopPropagation()}>
			<span class="close" role="button" tabindex="0" onclick={closeVideo} onkeydown={(e) => e.key === 'Enter' && closeVideo()}>&times;</span>
			<video width="100%" controls autoplay>
				<source src="/vids/hotel.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
{/if}
