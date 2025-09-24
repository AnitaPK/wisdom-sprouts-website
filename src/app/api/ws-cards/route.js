import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Card from "@/models/WSCards";

export async function GET() {
  try {
    await connectDB();
    const cards = await Card.find().sort({ createdAt: 1 });
    return NextResponse.json(cards);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch cards" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json(); // { title, description, image }
    const created = await Card.create(body);
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create card" }, { status: 500 });
  }
}
