/** A day as people read it: "2 November 2026". */
export const formatDay = (date: Date): string =>
	date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

/** A moment, to the minute, in UTC: "2 November 2026, 08:33 UTC". */
export const formatMoment = (date: Date): string =>
	`${date.toLocaleString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'UTC'
	})} UTC`;
