import type { AnchorHTMLAttributes, ReactNode } from "react";
import { basePath } from "@/lib/basePath";

/**
 * Plain anchor navigation instead of next/link's client-side router.
 *
 * On this static export + custom basePath combination, next/link's
 * client-side transitions intercept the click (preventDefault fires,
 * the RSC payload even fetches successfully) but never actually commit
 * the new route, leaving nav links dead. A full page navigation to the
 * already-verified-working static HTML sidesteps that entirely.
 */
export default function AppLink({
  href,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children?: ReactNode }) {
  const isInternal = href.startsWith("/");
  const path = isInternal && !href.endsWith("/") ? `${href}/` : href;
  const resolvedHref = isInternal ? `${basePath}${path}` : href;

  return (
    <a href={resolvedHref} {...rest}>
      {children}
    </a>
  );
}
