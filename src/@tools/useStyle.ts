export function useStyle(styleObject: Json): string {
	return Object.entries(styleObject)
		.map(
			([key, value]) => `${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}:${value}`
		)
		.join(';');
}
