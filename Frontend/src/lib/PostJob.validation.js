import { z } from "zod";

const hrJobPostSchema = z.object({
    title: z.string().min(1, "Title is required"),
    department: z.string().min(1, "Department is required"),
    location: z.string().min(1, "Location is required"),
    jobType: z.string().min(1, "Job type is required"),
    experienceLevel: z.string().min(1, "Experience level is required"),
    minSalary: z.string().transform(Number).refine(val => val >= 0, "Min salary must be >= 0"),
    maxSalary: z.string().transform(Number).refine(val => val >= 0, "Max salary must be >= 0"),
    currency: z.string().min(1, "Currency is required").default("USD"),
    remoteWork: z.boolean().optional().default(false),
    urgentHiring: z.boolean().optional().default(false),
    jobDescription: z.string().min(1, "Job description is required"),
    responsibility: z.array(z.object({
        value: z.string()
    })).optional(),
    benifits: z.array(z.object({
        value: z.string()
    })).optional(),
    qualification: z.array(z.object({
        value: z.string()
    })).optional(),
    skills: z.array(z.object({
        value: z.string()
    })).optional(),
    deadlineDate: z.date({
        required_error: "Deadline date is required",
        invalid_type_error: "Invalid date format"
    }),

    startDate: z.date({
        required_error: "Start date is required",
        invalid_type_error: "Invalid date format"
    }),

    skillAssessment: z.boolean().optional().default(false),
    companyDescription: z.string().min(1, "Company description is required"),
    user_id:z.string().min(1,"user_id should be defined")
});
 const hrJobSchemaWithSalaryCheck = hrJobPostSchema.refine(
  (data) => data.maxSalary > data.minSalary,
  {
    message: "Max salary must be greater than min salary",
    path: ["maxSalary"], // shows error on maxSalary field
  }
);
export { hrJobSchemaWithSalaryCheck }