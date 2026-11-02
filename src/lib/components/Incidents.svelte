<script lang="ts">
	import Badge from '$lib/ui/Badge.svelte';
	import Surface from '$lib/ui/Surface.svelte';
	import { formatDay } from '$lib/format';
	import type { ReportFile } from '$lib/types';

	/** Incidents, from the repository's issues labelled "incident", newest first. */
	export let incidents: ReportFile['incidents'];

	$: newestFirst = [...incidents].sort((a, b) => b.date - a.date);
</script>

<section class="flex flex-col gap-3" aria-labelledby="incidents">
	<h2 id="incidents" class="m-0 text-lg font-semibold">Recent incidents</h2>
	<Surface as="ul" pad="none" class="m-0 list-none divide-y divide-kumo-hairline p-0">
		{#each newestFirst as incident}
			<li class="flex items-center justify-between gap-4 px-4 py-3">
				<div class="flex min-w-0 flex-col gap-0.5">
					<p class="m-0 font-medium text-kumo-default">{incident.title}</p>
					<p class="m-0 text-sm text-kumo-subtle">{formatDay(new Date(incident.date * 1000))}</p>
				</div>
				<Badge variant={incident.open ? 'warning' : 'success'}
					>{incident.open ? 'Open' : 'Resolved'}</Badge
				>
			</li>
		{/each}
	</Surface>
</section>
