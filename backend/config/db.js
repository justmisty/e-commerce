import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://justmisty:kiddo27574@cluster0.hwaafae.mongodb.net/bs-kitchen"
    )
    .then(() => console.log("DB Connected"));
};
