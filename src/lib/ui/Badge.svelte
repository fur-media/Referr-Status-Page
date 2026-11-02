<script lang="ts">
	import { cx } from './cx';

	/**
	 * Kumo's Badge, as referr.fyi draws it (components/ui/Badge.astro): a
	 * small rounded label, tinted for a status, or `dot` for a status as a
	 * coloured dot on an outline.
	 */
	export let variant: 'secondary' | 'success' | 'warning' | 'error' = 'secondary';
	export let dot: 'success' | 'warning' | 'error' | 'neutral' | undefined = undefined;
	let extra = '';
	export { extra as class };

	const variants = {
		secondary: 'bg-kumo-fill text-kumo-badge-neutral-subtle',
		success: 'bg-kumo-success-tint text-kumo-success',
		warning: 'bg-kumo-warning-tint text-kumo-warning',
		error: 'bg-kumo-danger-tint text-kumo-danger'
	};
	const dots = {
		success: 'bg-kumo-success',
		warning: 'bg-kumo-badge-orange',
		error: 'bg-kumo-badge-red',
		neutral: 'bg-kumo-badge-neutral'
	};
</script>

<span
	class={cx(
		'inline-flex w-fit flex-none shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap',
		dot ? 'gap-1.5 bg-transparent text-kumo-default ring ring-kumo-hairline' : variants[variant],
		extra
	)}
>
	{#if dot}<span class={cx('size-1.75 shrink-0 rounded-full', dots[dot])} aria-hidden="true"
		></span>{/if}
	<slot />
</span>
