// Mirrors the basePath logic in next.config.ts, for raw <video>/<img> paths
// that Next.js does not auto-prefix (unlike next/image and next/link).
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

export const basePath = isGithubActions && repoName ? `/${repoName}` : "";
