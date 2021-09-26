export const getCaptionForLocaleCreator = (localeMap: { [x: string]: { [x: string]: any } }) => (
  locale: string | number,
  key: string | number,
) => {
  return localeMap[key] ? localeMap[key][locale] || key : key;
};

export default getCaptionForLocaleCreator;
