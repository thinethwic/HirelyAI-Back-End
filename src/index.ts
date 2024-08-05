import "dotenv/config";
import express from "express";
import jobRouter from "./api/jobs";
import { connectDB } from "./infastrutures/db";
import jobApplicationRouter from "./api/jobApplication";
import cors from "cors";  
import GlobalErrorHaddelingMiddelware from "./api/middelware/global-error-handler";

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); 

app.use("/jobs", jobRouter);
app.use("/jobApplication", jobApplicationRouter);

app.use(GlobalErrorHaddelingMiddelware);
app.listen(8000, () => console.log("Server is listening on port 8000."));
