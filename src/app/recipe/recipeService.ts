import { Recipe } from "@prisma/client";
import prisma from "../libs/prisma";
import ApiError from "../errors/apiErrors";

const createNewRecipe = async (data: Recipe): Promise<Recipe> => {
  const result = await prisma.recipe.create({ data });

  if (!result) {
    throw new ApiError(400, "recipe not created");
  }

  return result;
};

export const recipeServices = {
  createNewRecipe,
};
