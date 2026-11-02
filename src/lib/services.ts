/**
 * What each checked service is called on the page. The names in
 * health-check.yml's SOURCES stay as they are: the log step keeps each
 * service's history under that name, so renaming one there would start its
 * bars again from nothing. A name not listed here shows as itself.
 */
const SHOWN: Record<string, string> = {
	'Referr Database': 'Dashboard and links',
	'Referr Gateway Client': 'Discord connection'
};

/** The name a person reads for a service checked under `name`. */
export const shownName = (name: string): string => SHOWN[name] ?? name;
