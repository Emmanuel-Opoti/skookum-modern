"use client";

import NextImage, { type ImageProps } from "next/image";
import { basePath } from "@/lib/basePath";

/**
 * Wraps next/image so every local image automatically gets the GitHub Pages
 * basePath prefix (next/image doesn't do this on its own, unlike next/link),
 * and is protected from casual right-click / drag saving.
 */
export default function AppImage({ src, className, ...rest }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/") ? `${basePath}${src}` : src;

  return (
    <NextImage
      {...rest}
      src={resolvedSrc}
      className={["select-none", className].filter(Boolean).join(" ")}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}
