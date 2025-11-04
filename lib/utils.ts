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
): Promise<T> {
  const fetchOptions: NextFetchInit = {};

  if (revalidate) {
    fetchOptions.next = { revalidate: 86400 };
  } else {
    fetchOptions.cache = "no-store";
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    const errorData = await res.json();
    throw NextResponse.json(errorData, { status: res.status });
  }

  return res.json() as Promise<T>;
}

export async function getDataFromClient<T>(url: string) {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json() as Promise<T>;
}
