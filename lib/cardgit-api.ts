const DEFAULT_API_BASE_URL = "https://redesignedcardgitapi.onrender.com";

export function getCardGitApiBaseUrl() {
  return (process.env.CARDGIT_API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/$/, "");
}

export function getCardGitApiUrl(path: string) {
  return `${getCardGitApiBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
