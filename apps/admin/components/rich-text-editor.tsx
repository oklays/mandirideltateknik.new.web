"use client";

import { useEffect, useRef } from "react";

type RichTextEditorProps = {
  onChange: (value: string) => void;
  value: string;
};

const commands = [
  { action: "bold", label: "Bold" },
  { action: "italic", label: "Italic" },
  { action: "insertUnorderedList", label: "List" },
  { action: "formatBlock", argument: "h2", label: "H2" }
];

export function RichTextEditor({ onChange, value }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  function runCommand(action: string, argument?: string) {
    document.execCommand(action, false, argument);
    onChange(editorRef.current?.innerHTML ?? "");
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {commands.map((command) => (
          <button
            className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]"
            key={command.label}
            onClick={() => runCommand(command.action, command.argument)}
            type="button"
          >
            {command.label}
          </button>
        ))}
      </div>

      <div
        className="min-h-[220px] rounded-[24px] border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-[var(--foreground)] outline-none"
        contentEditable
        data-placeholder="Tulis isi artikel di sini..."
        onBlur={() => onChange(editorRef.current?.innerHTML ?? "")}
        ref={editorRef}
        suppressContentEditableWarning
      />
    </div>
  );
}
