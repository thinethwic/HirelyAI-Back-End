import express from "express";
import { createJobApplication, getJobApplication, getJobApplicationById } from "../application/jobApplication";

const jobApplicationRouter = express.Router();

jobApplicationRouter.route("/") .get(getJobApplication) .post(createJobApplication)
jobApplicationRouter.route("/:id") .get(getJobApplicationById);

export default jobApplicationRouter; 