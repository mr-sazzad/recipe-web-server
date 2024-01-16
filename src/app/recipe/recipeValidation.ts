import { z } from "zod";

const createNewRecipe = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
    ingredients: z.array(
      z.string({ required_error: "ingredients is required" })
    ),
    instructions: z.string({ required_error: "instructions is required" }),
    image: z.string().optional(),
  }),
});

const updateSingleRecipe = z.object({
  body: z.object({
    title: z.string().optional(),
    ingredients: z.array(z.string().optional()).optional(),
    instructions: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const recipeValidation = {
  createNewRecipe,
  updateSingleRecipe,
};
