export function scroll() {
	document.querySelectorAll('a[href^="/#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			const isHome = window.location.pathname === '/';
			if (!isHome) {
				return;
			}
			e.preventDefault();
			const href = anchor.getAttribute('href');
			if (!href) {
				return;
			}
			if (href === '#' || href === '/#') {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
				return;
			}
			const target = document.querySelector(href.replace('/#', '#'));
			if (!target) {
				return;
			}
			const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
			const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		});
	});
}
