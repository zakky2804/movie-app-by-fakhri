import { NextResponse } from "next/server";

interface NextFetchInit extends RequestInit {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

export async function getData<T>(
  url: string,
  revalidate: boolean = true
): Promise<T | null> {
  const fetchOptions: NextFetchInit = {};

  if (revalidate) {
    fetchOptions.next = { revalidate: 2_592_000 };
  } else {
    fetchOptions.cache = "no-store";
  }

  try {
    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      let errorMessage = `Fetch failed with status ${res.status}`;
      try {
        const errorData = await res.json();
        errorMessage = errorData?.message || errorMessage;
      } catch {
        // ignore if response is not JSON
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
