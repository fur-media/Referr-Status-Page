<script lang="ts">
	import Badge from '$lib/ui/Badge.svelte';
	import Surface from '$lib/ui/Surface.svelte';
	import { formatDay } from '$lib/format';
	import { shownName } from '$lib/services';
	import { StatusCode, type Status } from '$lib/types';
	import { cx } from '$lib/ui/cx';

	/** One service: how it's doing now, and a bar for each day it was checked. */
	export let name: string;
	export let statuses: Status[];

	const DAY_MS = 24 * 60 * 60 * 1000;
	const latest = statuses.at(-1);
	const days = latest ? Math.ceil(Math.abs(+statuses[0].date - +latest.date) / DAY_MS) + 1 : 0;
	const up = statuses.length
		? Math.floor(
				(statuses.filter((status) => status.status === StatusCode.OK).length / statuses.length) *
					100
			)
		: 0;

	const now = {
		[StatusCode.OK]: { dot: 'success', words: 'Operational' },
		[StatusCode.UNSTABLE]: { dot: 'warning', words: 'Recovered' },
		[StatusCode.ERROR]: { dot: 'error', words: 'Down' }
	} as const;
	const bar = {
		[StatusCode.OK]: 'bg-kumo-success',
		[StatusCode.UNSTABLE]: 'bg-kumo-warning',
		[StatusCode.ERROR]: 'bg-kumo-danger'
	};
	const said = {
		[StatusCode.OK]: 'working',
		[StatusCode.UNSTABLE]: 'down for part of the day',
		[StatusCode.ERROR]: 'down'
	};
	const state = latest?.status ?? StatusCode.ERROR;
</script>

<Surface as="section" pad="lg" class="flex flex-col gap-4">
	<div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
		<div class="flex items-center gap-2.5">
			<h2 class="m-0 text-base font-semibold">{shownName(name)}</h2>
			<Badge dot={now[state].dot}>{now[state].words}</Badge>
		</div>
		<p class="m-0 text-sm text-kumo-subtle">
			{statuses.length
				? `${up}% up over the last ${days} ${days === 1 ? 'day' : 'days'}`
				: 'No checks yet'}
		</p>
	</div>

	{#if statuses.length}
		<div class="flex flex-col gap-1.5">
			<ol class="m-0 flex h-8 list-none gap-0.5 p-0" aria-label={`${shownName(name)}, day by day`}>
				{#each statuses as { status, date }}
					<li
						class={cx(
							'min-w-0 flex-1 rounded-xs first:rounded-l-md last:rounded-r-md',
							bar[status]
						)}
						title={`${formatDay(date)}: ${said[status]}`}
						aria-label={`${formatDay(date)}: ${said[status]}`}
					></li>
				{/each}
			</ol>
			<div class="flex justify-between text-xs text-kumo-subtle" aria-hidden="true">
				<span>{days === 1 ? 'Today' : `${days} days ago`}</span>
				<span>Today</span>
			</div>
		</div>
	{/if}
</Surface>
