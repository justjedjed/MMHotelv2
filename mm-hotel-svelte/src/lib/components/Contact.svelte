<script>
	let videoOpen = $state(false);

	function openModal() {
		videoOpen = true;
	}

	function closeModal() {
		videoOpen = false;
	}

	function openMessenger() {
		window.open('https://www.facebook.com/profile.php?id=61583191125175', '_blank');
	}
</script>

<section class="sec contact" id="contact">
	<div class="contact_box">
		<div class="left_box">
			<p class="section-tag">Get In Touch</p>
			<h2 class="heading_1">Contact Us</h2>
			<h1 class="heading">Book your stay today!</h1>
			<p class="para1" style="font-size:16px; line-height:1.7; margin-bottom:24px;">
				Have questions or want to make a reservation? We're here to help anytime.
			</p>

			<div class="contact_details">
				<p><strong>📍 Location:</strong> 3rd Street Mabua, Tandag City, Surigao del Sur</p>
				<p>
					<strong>📧 Email:</strong>
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=mmreservationtandag@gmail.com&su=Room%20Booking%20Inquiry&body=Hello%2C%0D%0AI%20would%20like%20to%20inquire%20about%20booking%20a%20room.%0D%0A%0D%0AThank%20you."
						target="_blank">mmreservationtandag@gmail.com</a
					>
				</p>
				<p>
					<strong>📘 Facebook:</strong>
					<a href="https://www.facebook.com/profile.php?id=61583191125175" target="_blank">MM Hotel</a>
				</p>
				<p><strong>📞 Contact No.:</strong> 09078874262</p>
			</div>

			<button class="btn" onclick={openMessenger}>Contact Now</button>
		</div>

		<div class="right_box">
			<div class="img_wrapper" role="button" tabindex="0" onclick={openModal} onkeydown={(e) => e.key === 'Enter' && openModal()}>
				<img src="/img/view1.webp" alt="Hotel video preview" />
				<div class="hover_text">Watch Video</div>
			</div>
		</div>
	</div>
</section>

{#if videoOpen}
	<div id="modal1" class="modal" style="display:flex" role="dialog" aria-modal="true" onclick={closeModal}>
		<div class="modal_content" role="document" onclick={(e) => e.stopPropagation()}>
			<span class="close" role="button" tabindex="0" onclick={closeModal} onkeydown={(e) => e.key === 'Enter' && closeModal()}>&times;</span>
			<video controls autoplay>
				<source src="/vids/guide.mp4" type="video/mp4" />
			</video>
		</div>
	</div>
{/if}
