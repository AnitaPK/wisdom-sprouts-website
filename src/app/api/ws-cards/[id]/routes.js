// src/app/api/cards/[id]/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Card from "@/models/Card";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const card = await Card.findById(id);
    if (!card) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(card);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch card" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const body = await req.json();
    const updated = await Card.findByIdAndUpdate(id, body, { new: true });
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: "Failed to update card" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    await Card.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete card" }, { status: 500 });
  }
}
