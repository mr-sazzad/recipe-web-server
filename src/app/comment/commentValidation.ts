import { z } from "zod";

const createNewComment = z.object({
  body: z.object({
    recipeId: z.string({ required_error: "recipe id is required" }),
    comment: z.string({ required_error: "comment is required" }),
  }),
});

export const commentValidation = createNewComment;
