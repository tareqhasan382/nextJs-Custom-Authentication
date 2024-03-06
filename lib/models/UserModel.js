import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);
// User.create() / User.save()
userSchema.pre("save", async function (next) {
  // hashing password
  this.password = await bcrypt.hash(this.password, 14);
  next();
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
