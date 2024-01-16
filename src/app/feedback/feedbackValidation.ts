import { z } from "zod";

export const feedbackValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    feedback: z.string({ required_error: "feedback is required" }),
    image: z.string().optional(),
  }),
});
