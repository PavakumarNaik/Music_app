export const shortTitle = (string, maxLength , separator = '') => (string.length <= maxLength) ? string : (string.substr(0, string.lastIndexOf(separator, maxLength)) + "...");
