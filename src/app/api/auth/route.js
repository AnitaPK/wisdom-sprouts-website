import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const { email, password, type } = await req.json();

  if (type === "register") {
    const existing = await User.findOne({ email });
    if (existing) return NextResponse.json({ error: "User exists" }, { status: 400 });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });
    return NextResponse.json({ message: "User registered" });
  }

  if (type === "login") {
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    const token = generateToken(user);
    return NextResponse.json({ token });
  }

  return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}
