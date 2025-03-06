import { getSelectedText, Clipboard, showToast, Toast } from "@raycast/api";

export default async () => {
  try {
    const selectedText = await getSelectedText();
    const transformedText = transformText(selectedText);
    await Clipboard.paste(transformedText);
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Cannot transform text",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

function transformText(text: string) {
  return text.replace(/[.,]/g, (val) => (val === "." ? "," : "."));
}
