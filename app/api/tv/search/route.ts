import { ITv } from "@/interface/tv";
import { getData } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const page = searchParams.get("page") || "1";

  try {
    const apiKey = process.env.TMDB_API_KEY;
    const tbdbUrl = process.env.TMDB_BASE_URL;

    if (!query) {
      return NextResponse.json({ error: "Query not found" }, { status: 400 });
    }

    if (!apiKey) {
      return NextResponse.json({ error: "API_KEY not found" }, { status: 500 });
    }

    const data = await getData<ITv>(
      `${tbdbUrl}/search/tv?query={${query}}&api_key=${apiKey}&page=${page}`
    );

    const results = data.results.map(({ id, poster_path, name }) => ({
      id,
      name,
      poster_path,
    }));

    return NextResponse.json(results);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
