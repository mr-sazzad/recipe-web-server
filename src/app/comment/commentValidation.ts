import { z } from "zod";

const createNewComment = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    comment: z.string({ required_error: "comment is required" }),
    image: z.string().optional(),
  }),
});

export const commentValidation = createNewComment;
