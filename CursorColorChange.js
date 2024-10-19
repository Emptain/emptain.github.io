const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-dot-outline');
	const zones = document.querySelectorAll('.special-zone');

	zones.forEach(zone => {
		zone.addEventListener('mouseenter', () => {
			document.body.classList.add('zone-active');
		});
	
		zone.addEventListener('mouseleave', () => {
			document.body.classList.remove('zone-active');
		});
	});