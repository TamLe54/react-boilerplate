export const getGlobalCssVariable = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();
