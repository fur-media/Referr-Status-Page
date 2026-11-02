<script lang="ts">
	import '../app.css';
	import Brand from '$lib/ui/Brand.svelte';
	import Button from '$lib/ui/Button.svelte';

	// The same top bar and footer as referr.fyi (components/layout/SiteLayout.astro
	// and SiteFooter.astro), with every link going back there.
	const SITE = 'https://referr.fyi';
	const nav = [
		[`${SITE}/pricing`, 'Pricing'],
		[`${SITE}/help`, 'Help']
	];
	const footer = [
		[`${SITE}/pricing`, 'Pricing'],
		[`${SITE}/help`, 'Help'],
		[`${SITE}/status`, 'Status'],
		[`${SITE}/privacy`, 'Privacy'],
		[`${SITE}/terms`, 'Terms'],
		[`${SITE}/opt-out`, 'Opt out of tracking']
	];
</script>

<div class="flex min-h-screen flex-col">
	<header class="border-b border-kumo-line bg-kumo-base">
		<nav
			aria-label="Referr"
			class="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-3 px-6 max-sm:px-4"
		>
			<Brand href={`${SITE}/`} />
			<div class="flex items-center gap-1">
				{#each nav as [href, label]}
					<a
						{href}
						class="rounded-md px-2.5 py-1.5 font-medium text-kumo-subtle hover:bg-kumo-tint hover:text-kumo-default hover:no-underline max-sm:px-2"
						>{label}</a
					>
				{/each}
				<Button href={`${SITE}/app`}>Sign in</Button>
			</div>
		</nav>
	</header>

	<main
		id="main"
		class="mx-auto w-full max-w-[720px] flex-1 px-6 pt-10 pb-20 max-sm:px-4 max-sm:pt-6 max-sm:pb-14"
	>
		<slot />
	</main>

	<footer class="border-t border-kumo-line">
		<div
			class="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-6 py-5 text-sm text-kumo-subtle max-sm:px-4"
		>
			<Brand href={`${SITE}/`} class="text-kumo-subtle" />
			<nav aria-label="Footer" class="flex flex-wrap gap-x-4 gap-y-1.5">
				{#each footer as [href, label]}
					<a {href} class="text-kumo-subtle hover:text-kumo-default hover:no-underline">{label}</a>
				{/each}
			</nav>
		</div>
		<p class="mx-auto m-0 max-w-[1120px] px-6 pb-5 text-xs text-kumo-subtle max-sm:px-4" data-prose>
			Built on <a href="https://github.com/Bullrich/GitHub-Status-Page">GitHub-Status-Page</a> by
			<a href="https://bullrich.dev">Bullrich</a>.
		</p>
	</footer>
</div>
