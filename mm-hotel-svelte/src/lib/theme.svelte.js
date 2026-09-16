let theme = $state('light');

export function getTheme() {
	return theme;
}

export function toggleTheme() {
	theme = theme === 'light' ? 'dark' : 'light';
	if (typeof document !== 'undefined') {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('mm-hotel-theme', theme);
	}
}

export function initTheme() {
	if (typeof document === 'undefined') return;
	const stored = localStorage.getItem('mm-hotel-theme');
	if (stored) {
		theme = stored;
	} else {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme = prefersDark ? 'dark' : 'light';
	}
	document.documentElement.setAttribute('data-theme', theme);
}
