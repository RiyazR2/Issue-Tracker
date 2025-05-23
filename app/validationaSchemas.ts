import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is Required!").max(255),
  description: z.string().min(1, "Description is Required!").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is Required!").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is Required!")
    .max(65535)
    .optional(),
  assigneToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});
