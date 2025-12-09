export const getFormattedDate = (
	date: Date | null,
	locale: "es-ES" | "en-US",
	options: Intl.DateTimeFormatOptions,
	presentLabel?: string
) => {
	return date !== null ? new Date(date).toLocaleDateString(locale, options) : presentLabel;
};
