export const dateFromIsoString = (IsoString: string) => {
  if (!IsoString) return '';
  const date = new Date(IsoString);
  return new Intl.DateTimeFormat("ru-RU").format(date);
};
