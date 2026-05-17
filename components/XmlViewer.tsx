"use client";

import { useState } from "react";

interface XmlViewerProps {
  /** The canonical M4 SVG markup for the current configuration. */
  xml: string;
}

/** Shows the active M4 SVG and copies it to the clipboard. */
export default function XmlViewer({ xml }: XmlViewerProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(xml);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section aria-label="Canonical XML" className="min-w-0">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-mono text-[11px] tracking-data uppercase text-muted">
          Canonical XML
        </h2>
        <button
          type="button"
          onClick={copy}
          className="border border-hairline px-3 py-1 font-mono text-[10px] tracking-data uppercase text-muted transition-colors hover:border-rufous hover:text-[#f0ece0]"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre className="xml-scroll max-h-72 min-w-0 overflow-auto border border-hairline bg-void p-3">
        <code className="font-mono text-[11px] leading-relaxed text-[#b8b0a8] whitespace-pre">
          {xml}
        </code>
      </pre>
    </section>
  );
}
