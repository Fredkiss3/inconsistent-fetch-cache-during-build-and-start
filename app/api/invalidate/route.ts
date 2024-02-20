import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const tags = (await req.json()).tags ?? [];

    for (const tag of tags) {
        revalidateTag(tag);
    }
    return NextResponse.json({
        success: true,
        revalidated: tags,
    });
}

export const runtime = "edge";
