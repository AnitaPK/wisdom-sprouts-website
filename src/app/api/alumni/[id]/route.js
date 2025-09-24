import { connectDB } from "@/lib/db";
import Alumni from "@/models/Alumni";
import { NextResponse } from "next/server";

// GET single alumni
export async function GET(_, { params }) {
  try {
    await connectDB();
    const alumni = await Alumni.findById(params.id);
    if (!alumni) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(alumni);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch alumni" }, { status: 500 });
  }
}

// UPDATE alumni
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const data = await request.json();
    const updatedAlumni = await Alumni.findByIdAndUpdate(params.id, data, { new: true });
    return NextResponse.json(updatedAlumni);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update alumni" }, { status: 500 });
  }
}

// DELETE alumni
export async function DELETE(_, { params }) {
  try {
    await connectDB();
    await Alumni.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Alumni deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete alumni" }, { status: 500 });
  }
}
