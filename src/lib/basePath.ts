// Mirrors next.config.ts. NEXT_PUBLIC_-prefixed env vars are the only ones
// Next.js inlines into the client bundle, so this must read that (not the
// plain GITHUB_* vars, which are server-only and would silently resolve to
// "" in the browser).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
