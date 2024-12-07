import { Clipboard, showHUD } from "@raycast/api";

export default async function Command() {
  const now = new Date();
  const timestamp = now.toISOString().slice(0, 16).replace("T", "-");

  await Clipboard.copy(timestamp);
  await showHUD(`Copied: ${timestamp}`);
}
