/** Class names joined, leaving out the empty ones. */
export const cx = (...names: Array<string | false | null | undefined>): string =>
	names.filter(Boolean).join(' ');
