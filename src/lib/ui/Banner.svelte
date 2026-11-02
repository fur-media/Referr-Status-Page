<script lang="ts">
	import Icon from './Icon.svelte';
	import { cx } from './cx';

	/**
	 * Kumo's Banner, as referr.fyi draws it (components/ui/Banner.astro): a
	 * tinted strip with a title and a line under it.
	 */
	export let variant: 'success' | 'alert' | 'error' | 'secondary' = 'secondary';
	export let title: string;

	const variants = {
		alert: 'bg-kumo-warning-tint text-kumo-warning',
		error: 'bg-kumo-danger-tint text-kumo-danger',
		success: 'bg-kumo-success-tint text-kumo-success',
		secondary: 'bg-kumo-contrast/5 text-kumo-default/70'
	};
	const icons = {
		alert: 'warning',
		error: 'warning-circle',
		success: 'check-circle',
		secondary: 'info'
	} as const;
</script>

<div
	role="status"
	class={cx('flex w-full items-start gap-3 rounded-lg px-4 py-3 text-base', variants[variant])}
>
	<span class="flex h-[1.375em] shrink-0 items-center"><Icon name={icons[variant]} /></span>
	<div class="flex min-w-0 flex-col gap-0.5">
		<p class="m-0 leading-snug font-medium">{title}</p>
		{#if $$slots.default}<div class="leading-snug"><slot /></div>{/if}
	</div>
</div>
