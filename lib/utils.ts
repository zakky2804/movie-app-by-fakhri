import { NextResponse } from "next/server";

interface NextFetchInit extends RequestInit {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

/**
 * Universal server-side fetch helper with revalidation support
 * - Safe for use inside Next.js Server Components or Route Handlers
 * - Automatically handles caching and error responses
 */
export async function getData<T>(
  url: string,
  revalidate: boolean = true
): Promise<T | null> {
  const fetchOptions: NextFetchInit = {};

  if (revalidate) {
    fetchOptions.next = { revalidate: 86400 }; // 24 jam cache
  } else {
    fetchOptions.cache = "no-store"; // no caching
  }

  try {
    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      let errorMessage = `Fetch failed with status ${res.status}`;
      try {
        const errorData = await res.json();
        errorMessage = errorData?.message || errorMessage;
      } catch {
        // abaikan jika response bukan JSON
      }
      console.error("getData error:", errorMessage);
      throw NextResponse.json({ error: errorMessage }, { status: res.status });
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("Unexpected error in getData:", error);
    return null;
  }
}

/**
 * Client-side fetch helper (no caching, no revalidation)
 * - Safe for client components and dynamic UI fetching
 */
export async function getDataFromClient<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("getDataFromClient error:", res.status);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("Unexpected error in getDataFromClient:", error);
    return null;
  }
}
