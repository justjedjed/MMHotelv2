<script>
	let lightboxSrc = $state(null);
	let activeRoom = $state(null);

	const standard = {
		title: 'STANDARD STUDIO',
		image: '/rooms/R1.webp',
		thumbnails: ['/rooms/R1.webp', '/rooms/R17.jfif', '/rooms/R4.webp', '/rooms/R16.jfif'],
		rates: [
			{ guests: 'Good for 2 Guests', withB: '₱2,399 / Night', withoutB: '₱2,199 / Night' },
			{ guests: 'Good for 1 Guest', withB: '₱1,899 / Night', withoutB: '₱1,699 / Night' }
		],
		amenities: ['Comfortable Bed', 'Air-Conditioned Room', 'Smart TV', 'Private Bathroom', 'Free WiFi'],
		description:
			'A spacious and comfortable room designed for a relaxing stay. Perfect for guests looking for an affordable yet convenient accommodation experience.'
	};

	const deluxe = {
		title: 'DELUXE STUDIO',
		image: '/gallery/r4.webp',
		thumbnails: ['/gallery/r4.webp', '/rooms/R6.webp', '/rooms/R6_1.webp', '/img/R5.webp'],
		rates: [
			{ guests: 'Good for 2 Guests', withB: '₱2,599 / Night', withoutB: '₱2,299 / Night' },
			{ guests: 'Good for 1 Guest', withB: '₱2,099 / Night', withoutB: '₱1,999 / Night' }
		],
		amenities: [
			'Comfortable Bed',
			'Air-Conditioned Room',
			'Smart TV',
			'Private Bathroom',
			'Free WiFi',
			'Sink'
		],
		description:
			'A spacious and elegant room designed for ultimate comfort. Perfect for couples, families, and business travelers seeking extra comfort with modern amenities.'
	};

	let currentRoom = $state(null);
	let mainImage = $state('');

	function openRoomModal(room) {
		currentRoom = room;
		mainImage = room.image;
	}

	function closeRoomModal() {
		currentRoom = null;
	}

	function changeImage(src) {
		mainImage = src;
	}

	function openImage(src) {
		lightboxSrc = src;
	}
</script>

<section class="sec rooms" id="rooms">
	<div class="rooms-head">
		<p class="section-tag">Stay With Us</p>
		<h2>Featured Rooms</h2>
	</div>
	<div class="room-items">
		<div class="room-item">
			<div class="room-img">
				<img src="/rooms/R1.webp" alt="Standard Studio room" role="button" tabindex="0" onclick={() => openImage('/rooms/R1.webp')} onkeydown={(e) => e.key === 'Enter' && openImage('/rooms/R1.webp')} />
			</div>
			<p class="room-name">Standard Studio</p>
			<p class="room-desc">
				A comfortable and well-appointed room designed for guests seeking a relaxing and affordable stay.
			</p>
			<p class="room-status">2 Guests • 1 Bed</p>
			<div class="room-info">
				<p>Per Night</p>
				<p class="room-price">₱2,199</p>
			</div>
			<button class="details-btn" onclick={() => openRoomModal(standard)}>View Room Details</button>
		</div>

		<div class="room-item">
			<div class="room-img">
				<img src="/gallery/r4.webp" alt="Deluxe Studio room" role="button" tabindex="0" onclick={() => openImage('/gallery/r4.webp')} onkeydown={(e) => e.key === 'Enter' && openImage('/gallery/r4.webp')} />
			</div>
			<p class="room-name">Deluxe Studio</p>
			<p class="room-desc">
				A spacious and elegant room designed for ultimate comfort, featuring modern amenities and a serene atmosphere.
			</p>
			<p class="room-status">2 Guests • 1 Bed</p>
			<div class="room-info">
				<p>Per Night</p>
				<p class="room-price">₱2,299</p>
			</div>
			<button class="details-btn" onclick={() => openRoomModal(deluxe)}>View Room Details</button>
		</div>
	</div>
</section>

{#if lightboxSrc}
	<div id="imageModal" class="image-modal" role="dialog" aria-modal="true" onclick={() => (lightboxSrc = null)}>
		<span class="close" role="button" tabindex="0" onclick={() => (lightboxSrc = null)} onkeydown={(e) => e.key === 'Enter' && (lightboxSrc = null)}>&times;</span>
		<img class="modal-content" src={lightboxSrc} alt="Room photo" />
	</div>
{/if}

{#if currentRoom}
	<div id="roomModal" class="modal" style="display:block" role="dialog" aria-modal="true" onclick={closeRoomModal}>
		<div class="modal-content" role="document" onclick={(e) => e.stopPropagation()}>
			<span class="close" role="button" tabindex="0" onclick={closeRoomModal} onkeydown={(e) => e.key === 'Enter' && closeRoomModal()}>&times;</span>
			<div class="room-container">
				<div class="room-image">
					<img id="mainImage" src={mainImage} alt={currentRoom.title} />
					<div class="thumbnail-container">
						{#each currentRoom.thumbnails as thumb, i}
							<img
								class="thumbnail"
								class:active={mainImage === thumb}
								src={thumb}
								alt={`${currentRoom.title} thumbnail ${i + 1}`}
								role="button"
								tabindex="0"
								onclick={() => changeImage(thumb)}
								onkeydown={(e) => e.key === 'Enter' && changeImage(thumb)}
							/>
						{/each}
					</div>
				</div>
				<div class="room-details">
					<h2>{currentRoom.title}</h2>
					{#each currentRoom.rates as rate}
						<div class="guest-rate">
							<h4>{rate.guests}</h4>
							<p>With Breakfast — {rate.withB}</p>
							<p>Without Breakfast — {rate.withoutB}</p>
						</div>
					{/each}
					<div class="amenities-box">
						<h3>Amenities</h3>
						<ul class="amenities-list">
							{#each currentRoom.amenities as a}
								<li>{a}</li>
							{/each}
						</ul>
					</div>
					<p class="room-description">{currentRoom.description}</p>
				</div>
			</div>
		</div>
	</div>
{/if}
