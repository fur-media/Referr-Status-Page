<script lang="ts">
	/** Kumo's secondary Button, as referr.fyi draws it (components/ui/Button.astro), as a link. */
	export let href: string;
</script>

<a
	{href}
	class="ml-1.5 inline-flex h-8 w-max shrink-0 items-center justify-center gap-1 rounded-md bg-kumo-base px-3 text-sm font-medium whitespace-nowrap !text-kumo-default shadow-xs ring ring-kumo-line select-none hover:bg-kumo-tint hover:no-underline focus-visible:ring-2 focus-visible:ring-kumo-brand focus-visible:outline-none"
	><slot /></a
>
