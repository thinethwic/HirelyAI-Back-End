import express from "express";
import { GetAllJobs, createJobs, deleteJob, getJobById, updateJob } from "../application/jobs";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const jobRouter = express.Router(); 

jobRouter.route("/"). get(GetAllJobs) .post(ClerkExpressRequireAuth({}),createJobs);
jobRouter.route("/:_id"). get(ClerkExpressRequireAuth({}), getJobById) .delete(deleteJob) .put(updateJob);

export default jobRouter; 