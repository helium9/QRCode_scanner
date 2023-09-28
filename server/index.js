import express from "express";
import cors from "cors";
const app = express();
let message = '';

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  //console.log("received");
  res.send(message);
});

app.post("/scan", (req, res)=>{
    //console.log(req.body);
    message = req.body.data;
    //console.log("message: ", message);
    res.sendStatus(200);
});

app.listen(8000);
