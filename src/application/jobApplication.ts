import { NextFunction,Request, Response } from "express";
import jobApplication from "../infastrutures/schemas/jobApplication";


export const createJobApplication = async (req:Request,res:Response,next:NextFunction) => {
    
    try {
        const JobApplication = req.body;
        console.log(JobApplication);
        const createJobApplication = await jobApplication.create(JobApplication);
        return res.status(201) .send(); 
    } catch (error) {
        next(error); 
        console.log(error);
        return res.status(500) .send();
    }
}

export const getJobApplication = async (req: Request, res:Response, next:NextFunction) => {
    try {
        const {jobid} = req.query;
       
        if(jobid){
          const jobApplications = await jobApplication.find({job:jobid})
          return res.status(200).json(jobApplications);
        }
    
        const jobApplications = await jobApplication.find().populate("job").exec();
        return res.status(200).json(jobApplications);
     
      } catch (error) {
        next(error);
        console.log(error);
        return res.status(500) .send();
      }
};

export const getJobApplicationById = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
  const jobApplications = await jobApplication.findById(id);
  if (jobApplications === null) {
    return res.status(404).send();
  }
  return res.status(200).json(jobApplications);
  } catch (error) {
    console.log(error);
    return res.status(500) .send(); 
  }
  
}