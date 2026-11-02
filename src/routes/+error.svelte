<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col gap-2">
	<h1 class="m-0 text-3xl leading-tight font-semibold max-sm:text-2xl">
		Status isn't available right now
	</h1>
	<p class="m-0 text-base text-kumo-subtle" data-prose>
		{$page.error?.message ?? 'Something went wrong.'} See
		<a href="https://referr.fyi/status">referr.fyi/status</a> for the Discord connection.
	</p>
</div>
