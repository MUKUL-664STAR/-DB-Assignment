import express from "express";
import cors from 'cors';
import connectToDatabase from "./src/db/db.js";
const app = express();
const PORT= process.env.PORT || 3000;
app.use(cors());
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Mukul is a Very good Boy");
});
connectToDatabase();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});