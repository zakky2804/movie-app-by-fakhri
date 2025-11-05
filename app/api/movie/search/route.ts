import { IMovie } from "@/interface/movie";
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

    const data = await getData<IMovie>(
      `${tbdbUrl}/search/movie?query={${query}}&api_key=${apiKey}&page=${page}`,
      false
    );

    if (!data) {
      throw new Error("No data available");
    }

    const results = data.results.map(({ id, poster_path, title }) => ({
      id,
      title,
      poster_path,
    }));

    return NextResponse.json({
      page: data.page,
      results,
      total_pages: data.total_pages,
      total_results: data.total_results,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
