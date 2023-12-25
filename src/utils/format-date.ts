const defaultOptions:  Intl.DateTimeFormatOptions =  { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};

export const dateFromIsoString = (IsoString: string, options: Intl.DateTimeFormatOptions | undefined = defaultOptions) => {
  if (!IsoString) return '';
  const date = new Date(IsoString);
  return new Intl.DateTimeFormat("ru-RU", options).format(date);
};
