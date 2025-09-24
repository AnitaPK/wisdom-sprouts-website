import { connectDB } from "@/lib/db";
import Alumni from "@/models/Alumni";
import { NextResponse } from "next/server";

// GET all alumni
export async function GET() {
  try {
    await connectDB();
    const alumni = await Alumni.find();
    return NextResponse.json(alumni);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch alumni" }, { status: 500 });
  }
}

// POST new alumni
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const newAlumni = new Alumni(data);
    await newAlumni.save();
    return NextResponse.json(newAlumni, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add alumni" }, { status: 500 });
  }
}
