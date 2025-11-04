import { IMovieDetail, MovieDetailForClient } from "@/interface/movie";
import { getData } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<T, K>);
}

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

    const data = await getData<IMovieDetail>(
      `${tbdbUrl}/movie/${id}?api_key=${apiKey}&page=1`
    );

    if (!data) {
      throw new Error("No data available");
    }

    const result: MovieDetailForClient = pick(data, [
      "backdrop_path",
      "status",
      "title",
      "poster_path",
      "overview",
      "genres",
    ]);

    return NextResponse.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
