<script lang="ts">
	import Banner from '$lib/ui/Banner.svelte';
	import { formatMoment } from '$lib/format';
	import { StatusCode, type Status } from '$lib/types';

	/** How everything is doing now, from each service's latest day. */
	export let systems: Array<[string, Status[]]>;

	const latest = systems.map(([, statuses]) => statuses.at(-1));
	const state = latest.every((status) => status?.status === StatusCode.OK)
		? StatusCode.OK
		: latest.every((status) => status?.status === StatusCode.ERROR)
			? StatusCode.ERROR
			: StatusCode.UNSTABLE;

	const shown = {
		[StatusCode.OK]: { variant: 'success', title: 'All systems operational' },
		[StatusCode.UNSTABLE]: { variant: 'alert', title: 'Partial outage' },
		[StatusCode.ERROR]: { variant: 'error', title: 'Total outage' }
	} as const;

	const checkedAt = latest
		.map((status) => status?.date)
		.filter((date): date is Date => date instanceof Date)
		.sort((a, b) => +b - +a)[0];
</script>

<div class="flex flex-col gap-2">
	<Banner variant={shown[state].variant} title={shown[state].title}>
		{#if state !== StatusCode.OK}
			Something wrong? Ask in <a href="https://discord.gg/cwpF9ZwzGh" class="text-current underline"
				>Referr's Discord server</a
			>.
		{/if}
	</Banner>
	{#if checkedAt}
		<p class="m-0 text-sm text-kumo-subtle">Last checked {formatMoment(checkedAt)}</p>
	{/if}
</div>
