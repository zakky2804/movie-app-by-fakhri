import { ITv } from "@/interface/tv";
import { getData } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";

  try {
    const apiKey = process.env.TMDB_API_KEY;
    const tbdbUrl = process.env.TMDB_BASE_URL;

    if (!apiKey) {
      return NextResponse.json({ error: "API_KEY not found" }, { status: 500 });
    }

    const data = await getData<ITv>(
      `${tbdbUrl}/tv/popular?api_key=${apiKey}&page=${page}`
    );

    if (!data) {
      throw new Error("No data available");
    }

    const results = data.results.map(({ id, poster_path, original_name }) => ({
      id,
      poster_path,
      title: original_name,
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
