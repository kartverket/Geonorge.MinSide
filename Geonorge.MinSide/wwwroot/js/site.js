// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Sender en hendelse til PostHog hvis PostHog er lastet. PostHog lastes bare i produksjon,
// og bare når det er satt en ApiKey i appsettings, så window.posthog finnes ikke i dev og test.
// Ingen personopplysninger skal sendes med, bare koder og antall.
function trackEvent(eventName, properties) {
	if (window.posthog && typeof window.posthog.capture === 'function') {
		window.posthog.capture(eventName, properties);
	}
};

function debounce(func, wait, immediate) {
	var timeout;

	return function () {
		var context = this;
		var args = arguments;

		var later = function () {
			timeout = null;

			if (!immediate) {
				func.apply(context, args);
            }
		};

		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			func.apply(context, args);
        }
	};
};