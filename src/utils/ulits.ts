export function secondstoTime(s: number) {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s - hours * 3600) / 60);
  const seconds = Math.floor(s - hours * 3600 - minutes * 60);

  const time =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  return time;
}

export function formatBytes(bytes: number, decimals: number = 2) {
  if (Number.isNaN(bytes)) return "Incalculable";
  if (!+bytes) return "0 B";

  let i = 0;
  for (i; bytes >= 1024; i++) bytes /= 1024;

  const dm = bytes % 1 === 0 ? 0 : decimals;
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];

  return `${bytes.toFixed(dm)} ${units[i]}`;
}

export function filtering(text: string) {
  // Define the characters to be removed
  const charsToRemove = "#%&{}\\/<>*? $!'\":@+|=";

  // Create a regex pattern that matches any of the characters
  const pattern = new RegExp(
    `[${charsToRemove.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}]`,
    "g"
  );

  return text.replace(pattern, "");
}
