<script>
	import { onMount } from 'svelte';

	let form = $state({
		name: '',
		email: '',
		phone: '',
		room: 'Standard Studio',
		checkIn: '',
		checkOut: '',
		guests: '2',
		breakfast: 'no',
		payment: 'gcash'
	});

	let submitted = $state(false);

	const rooms = {
		'Standard Studio': { price: 2199, pax: 2 },
		'Deluxe Studio': { price: 2299, pax: 2 }
	};

	const transactions = {
		gcash: {
			label: 'GCash',
			account: '0907 887 4262',
			name: 'M\'M Hotel',
			details: 'Send payment to the GCash number above, then attach the reference number in your booking email.'
		},
		bdo: {
			label: 'BDO',
			account: '1234 5678 90',
			name: 'M\'M Hotel',
			details: 'Deposit to the BDO account above, then attach the deposit slip / reference in your booking email.'
		},
		bpi: {
			label: 'BPI',
			account: '9876 5432 10',
			name: 'M\'M Hotel',
			details: 'Deposit to the BPI account above, then attach the deposit slip / reference in your booking email.'
		},
		landbank: {
			label: 'LandBank',
			account: '0000 1234 5678',
			name: 'M\'M Hotel',
			details: 'Deposit to the LandBank account above, then attach the deposit slip / reference in your booking email.'
		}
	};

	let today = $state('');
	onMount(() => {
		today = new Date().toISOString().split('T')[0];
	});

	function selectedTrans() {
		return transactions[form.payment];
	}

	function nights() {
		if (!form.checkIn || !form.checkOut) return 1;
		const start = new Date(form.checkIn);
		const end = new Date(form.checkOut);
		const diff = Math.floor((end - start) / 86400000);
		return diff > 0 ? diff : 1;
	}

	function roomTotal() {
		const base = rooms[form.room].price;
		return base * nights();
	}

	function totalAmount() {
		let total = roomTotal();
		if (form.breakfast === 'yes') total += 100 * nights() * parseInt(form.guests || '1', 10);
		return total;
	}

	function fmt(n) {
		return '₱' + n.toLocaleString('en-PH');
	}

	function reserve() {
		const trans = selectedTrans();
		const subject = `Room Booking Inquiry - ${form.room} (${form.name})`;
		const body =
			`Hello M'M Hotel,%0D%0A%0D%0A` +
			`I would like to book a room.%0D%0A%0D%0A` +
			`Name: ${encodeURIComponent(form.name)}%0D%0A` +
			`Email: ${encodeURIComponent(form.email)}%0D%0A` +
			`Phone: ${encodeURIComponent(form.phone)}%0D%0A` +
			`Room: ${encodeURIComponent(form.room)}%0D%0A` +
			`Check-in: ${encodeURIComponent(form.checkIn)}%0D%0A` +
			`Check-out: ${encodeURIComponent(form.checkOut)}%0D%0A` +
			`Guests: ${encodeURIComponent(form.guests)}%0D%0A` +
			`Breakfast: ${form.breakfast === 'yes' ? 'Yes' : 'No'}%0D%0A` +
			`Payment method: ${encodeURIComponent(trans.label)}%0D%0A` +
			`Payment account: ${encodeURIComponent(trans.account)}%0D%0A` +
			`Total: ${encodeURIComponent(fmt(totalAmount()))}%0D%0A%0D%0A` +
			`Please confirm my reservation. Thank you!`;
		window.open(
			`mailto:mmreservationtandag@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`,
			'_blank'
		);
		submitted = true;
	}

	function messenger() {
		window.open('https://www.facebook.com/profile.php?id=61583191125175', '_blank');
	}
</script>

<section class="sec booking" id="booking">
	<div class="booking-head">
		<p class="section-tag">Reservations</p>
		<h2 class="heading-1">Book Your Stay</h2>
		<p class="booking-sub">Complete the form below to reserve your room. We accept GCash and bank payments.</p>
	</div>

	{#if submitted}
		<div class="booking-confirm">
			<div class="confirm-icon">&#10003;</div>
			<h3 class="heading-3">Booking Request Sent!</h3>
			<p>
				Thank you, <strong>{form.name}</strong>! Your booking request has been prepared. Please send the
				email we just opened to confirm your reservation.
			</p>
			<p class="confirm-details">
				<strong>{form.room}</strong> &middot; {form.checkIn} to {form.checkOut} &middot;
				<b>{fmt(totalAmount())}</b>
			</p>
			<p style="color: var(--color-slate);">
				Payment via <strong>{selectedTrans().label}</strong> — account <strong>{selectedTrans().account}</strong>. You can also message us directly:
			</p>
			<div class="confirm-actions">
				<button class="btn" onclick={messenger}>Message on Facebook</button>
				<button
					class="btn-secondary"
					onclick={() => {
						submitted = false;
					}}>New Booking</button
				>
			</div>
		</div>
	{:else}
		<div class="booking-layout">
			<form class="booking-form" onsubmit={(e) => e.preventDefault()}>
				<div class="form-row">
					<div class="form-field">
						<label for="bk-name">Full Name</label>
						<input id="bk-name" type="text" bind:value={form.name} placeholder="Juan Dela Cruz" required />
					</div>
				</div>

				<div class="form-row">
					<div class="form-field">
						<label for="bk-email">Email</label>
						<input id="bk-email" type="email" bind:value={form.email} placeholder="you@email.com" required />
					</div>
					<div class="form-field">
						<label for="bk-phone">Phone / Mobile</label>
						<input id="bk-phone" type="tel" bind:value={form.phone} placeholder="09XX XXX XXXX" required />
					</div>
				</div>

				<div class="form-row">
					<div class="form-field">
						<label for="bk-room">Room Type</label>
						<select id="bk-room" bind:value={form.room}>
							<option>Standard Studio</option>
							<option>Deluxe Studio</option>
						</select>
					</div>
					<div class="form-field">
						<label for="bk-guests">Guests</label>
						<select id="bk-guests" bind:value={form.guests}>
							<option value="1">1 Guest</option>
							<option value="2">2 Guests</option>
						</select>
					</div>
				</div>

				<div class="form-row">
					<div class="form-field">
						<label for="bk-in">Check-in</label>
						<input id="bk-in" type="date" min={today} bind:value={form.checkIn} required />
					</div>
					<div class="form-field">
						<label for="bk-out">Check-out</label>
						<input id="bk-out" type="date" min={form.checkIn} bind:value={form.checkOut} required />
					</div>
				</div>

				<div class="form-row">
					<div class="form-field">
						<span class="form-label">Breakfast</span>
						<div class="radio-group">
							<label class="radio">
								<input type="radio" value="no" bind:group={form.breakfast} />
								<span>Without Breakfast</span>
							</label>
							<label class="radio">
								<input type="radio" value="yes" bind:group={form.breakfast} />
								<span>With Breakfast (+₱100/guest)</span>
							</label>
						</div>
					</div>
				</div>
			</form>

			<aside class="booking-side">
				<div class="payment-box">
					<h3 class="heading-4">Payment Method</h3>
					<div class="payment-options">
						{#each Object.entries(transactions) as [key, t]}
							<label class="payment-option" class:selected={form.payment === key}>
								<input type="radio" name="payment" value={key} bind:group={form.payment} />
								<span class="payment-name">{t.label}</span>
								<span class="payment-account">{t.account}</span>
							</label>
						{/each}
					</div>
				</div>

				<div class="summary-box">
					<h3 class="heading-4">Booking Summary</h3>
					<div class="summary-row"><span>{rooms[form.room].price.toLocaleString('en-PH')} / night</span><span>{nights()} night(s)</span></div>
					<div class="summary-row"><span>Room subtotal</span><span>{fmt(roomTotal())}</span></div>
					{#if form.breakfast === 'yes'}
						<div class="summary-row"><span>Breakfast</span><span>{fmt(100 * parseInt(form.guests, 10) * nights())}</span></div>
					{/if}
					<div class="summary-total"><span>Total</span><span>{fmt(totalAmount())}</span></div>
				</div>

				<div class="payment-instructions">
					<p class="instructions-label"><strong>{selectedTrans().label}</strong></p>
					<p>Account: <strong>{selectedTrans().account}</strong></p>
					<p class="instructions-note">{selectedTrans().details}</p>
				</div>

				<button class="btn booking-submit" onclick={reserve}>Reserve &amp; Pay Later</button>
				<button class="btn-ghost booking-messenger" onclick={messenger}>
					&#128172; Or message us on Facebook
				</button>
			</aside>
		</div>
	{/if}
</section>
