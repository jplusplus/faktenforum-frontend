export function fileToUrl(file: File) {
  return URL.createObjectURL(file);
}
export function fileToSizeString(file: File | undefined) {
  if (!file) {
    return "";
  }
  return `${Math.round(file.size / 1000)} kb`;
}
