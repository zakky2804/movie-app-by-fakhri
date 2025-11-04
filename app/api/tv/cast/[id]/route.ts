import { Casts } from "@/interface/movie";
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

    const data = await getData<Casts>(
      `${tbdbUrl}/tv/${id}/credits?api_key=${apiKey}`
    );

    if (!data) {
      throw new Error("No data available");
    }

    const result = data.cast.map(({ id, name, profile_path }) => ({
      id,
      name,
      profile_path,
    }));

    return NextResponse.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
