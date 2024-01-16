import { RequestHandler } from "express";
import { recipeServices } from "./recipeService";

export const createNewRecipe: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(req.body, "data");

    const result = await recipeServices.createNewRecipe(data);

    res.status(201).json({
      success: true,
      status: 201,
      message: "recipe created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllRecipes: RequestHandler = async (_, res, next) => {
  try {
    const result = await recipeServices.getAllRecipes();

    res.status(200).json({
      success: true,
      status: 200,
      message: "all recipes retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getSingleRecipe: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await recipeServices.getSingleRecipe(id);

    res.status(200).json({
      success: true,
      status: 200,
      message: "recipe retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateSingleRecipe: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await recipeServices.updateSingleRecipe(id, data);

    res.status(200).json({
      success: true,
      status: 200,
      message: "recipe updated successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteSingleRecipe: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await recipeServices.deleteSingleRecipe(id);

    res.status(200).json({
      success: true,
      status: 200,
      message: "recipe deleted successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
