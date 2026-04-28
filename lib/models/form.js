import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    message: String,
  },
  { timestamps: true },
);

export default mongoose.models.Form || mongoose.model("Form", FormSchema);
