<script lang="ts">
	import Incidents from '$lib/components/Incidents.svelte';
	import Status from '$lib/components/Status.svelte';
	import System from '$lib/components/System.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col gap-2">
		<h1 class="m-0 text-3xl leading-tight font-semibold max-sm:text-2xl">Status</h1>
		<p class="m-0 text-base text-kumo-subtle">
			Whether Referr's dashboard, links and Discord connection are working, checked every two hours.
		</p>
	</div>

	<System systems={data.statusLog} />

	<div class="flex flex-col gap-3">
		{#each data.statusLog as [name, statuses]}
			<Status {name} {statuses} />
		{/each}
	</div>

	{#if data.incidents?.length > 0}
		<Incidents incidents={data.incidents} />
	{/if}
</div>
