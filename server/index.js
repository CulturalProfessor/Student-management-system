import express from "express";
import Routes from "./routes/route.js";
import mongoose from "mongoose";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", Routes);

const CONNETION_URL =
  "mongodb+srv://vinayak:25JUL2001@cluster0.pd7jctp.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", false);
mongoose
  .connect(CONNETION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Server started on port 5000");
});
