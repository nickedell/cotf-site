document.addEventListener('DOMContentLoaded', function () {
	const track = document.querySelector('.carousel-track');
	if (!track) return;

	const slides = Array.from(track.children);
	const slideCount = slides.length;
	let currentIndex = 0;

	// Clone first slide and add to the end for seamless looping
	const firstSlideClone = slides[0].cloneNode(true);
	track.appendChild(firstSlideClone);

	setInterval(() => {
		currentIndex++;
		track.style.transition = 'transform 0.5s ease-in-out';
		track.style.transform = `translateX(-${currentIndex * 100}%)`;

		// Reset to the beginning after the cloned slide is shown
		if (currentIndex >= slideCount) {
			setTimeout(() => {
				track.style.transition = 'none';
				currentIndex = 0;
				track.style.transform = `translateX(0%)`;
			}, 500); // This delay should match the transition duration
		}
	}, 3000); // Change slide every 3 seconds
});