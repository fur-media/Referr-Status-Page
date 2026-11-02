<script lang="ts">
	import { cx } from './cx';

	/** Kumo's Surface, as referr.fyi draws it: a plain base card with a hairline ring. */
	export let as: 'div' | 'section' | 'ul' = 'div';
	export let pad: 'none' | 'base' | 'lg' = 'base';
	let extra = '';
	export { extra as class };

	const pads = { none: '', base: 'px-4 py-3', lg: 'px-6 py-5 max-sm:px-4 max-sm:py-3' };
</script>

<svelte:element
	this={as}
	class={cx('rounded-lg bg-kumo-base shadow-xs ring ring-kumo-line', pads[pad], extra)}
	{...$$restProps}
>
	<slot />
</svelte:element>
