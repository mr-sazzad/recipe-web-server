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
