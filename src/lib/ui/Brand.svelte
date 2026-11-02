<script lang="ts">
	import { cx } from './cx';

	/**
	 * The wordmark, in its own face, as on referr.fyi (components/layout/Brand.astro).
	 * Its box is wider than the word in Anta or any fallback, so nothing beside
	 * it moves when the font arrives.
	 */
	export let href = 'https://referr.fyi/';
	let extra = '';
	export { extra as class };
</script>

<a
	{href}
	class={cx(
		'inline-flex h-8 w-14 shrink-0 items-center font-brand text-base font-semibold text-kumo-default hover:no-underline',
		extra
	)}>Referr</a
>
