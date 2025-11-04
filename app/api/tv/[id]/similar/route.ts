import { ITv } from "@/interface/tv";
import { getData } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<Params> }
) {
  const { id } = await context.params;

  try {
    const apiKey = process.env.TMDB_API_KEY;
    const tbdbUrl = process.env.TMDB_BASE_URL;

    if (!apiKey) {
      return NextResponse.json({ error: "API_KEY not found" }, { status: 500 });
    }

    const data = await getData<ITv>(
      `${tbdbUrl}/tv/${id}/similar?api_key=${apiKey}&page=1`
    );

    const results = data.results.map(({ id, poster_path, name }) => ({
      id,
      title: name,
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
