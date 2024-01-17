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

const getAllRecipes = async (): Promise<Recipe[]> => {
  try {
    const result = await prisma.recipe.findMany();

    if (!result) {
      throw new ApiError(404, "recipes not found");
    }

    return result;
  } catch (err: any) {
    throw new ApiError(404, "recipes not found");
  }
};

const getSingleRecipe = async (id: string): Promise<Recipe> => {
  try {
    const result = await prisma.recipe.findUnique({
      where: {
        id,
      },
      include: {
        comments: true,
      },
    });

    if (!result) {
      throw new ApiError(404, "Recipe not found");
    }

    return result;
  } catch (err: any) {
    throw new ApiError(404, "Recipe not found");
  }
};

const updateSingleRecipe = async (
  id: string,
  data: Partial<Recipe>
): Promise<Recipe> => {
  try {
    const isExisting = await prisma.recipe.findUnique({
      where: {
        id,
      },
    });

    if (!isExisting) {
      throw new ApiError(404, "Recipe not found");
    }

    const result = await prisma.recipe.update({
      where: {
        id,
      },
      data,
    });

    if (!result) {
      throw new ApiError(400, "recipe not updated");
    }

    return result;
  } catch (err: any) {
    throw new ApiError(400, "recipe not updated");
  }
};

const deleteSingleRecipe = async (id: string): Promise<Recipe> => {
  try {
    const isExisting = await prisma.recipe.findUnique({
      where: {
        id,
      },
    });

    if (!isExisting) {
      throw new ApiError(404, "recipe not found");
    }

    const result = await prisma.recipe.delete({ where: { id } });

    if (!result) {
      throw new ApiError(400, "recipe not deleted");
    }
    return result;
  } catch (err: any) {
    throw new ApiError(400, "recipe not deleted");
  }
};

export const recipeServices = {
  createNewRecipe,
  getAllRecipes,
  getSingleRecipe,
  updateSingleRecipe,
  deleteSingleRecipe,
};
