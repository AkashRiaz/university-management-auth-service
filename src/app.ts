import express, { Application, Request, Response } from "express";
import cors from "cors";


const app:Application = express();

app.use(cors());

// parser setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// for testing
app.get("/", (req:Request, res:Response) => {
  res.send("For testing purposes only!");
});



export default app;
