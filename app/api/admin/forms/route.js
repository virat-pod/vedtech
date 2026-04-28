import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connectDB";
import Form from "@/lib/models/form";

export async function GET() {
  await connectDB();

  try {
    const forms = await Form.find({}).lean();
    if (!forms || forms.length === 0)
      return NextResponse.json(
        { success: false, error: "not found" },
        { status: 404 },
      );
    return NextResponse.json({ success: true, res: forms });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
