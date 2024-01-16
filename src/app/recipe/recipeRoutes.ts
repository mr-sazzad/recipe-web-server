import { Router } from "express";
import { createNewRecipe } from "./recipeController";
import validateRequest from "../middleware/validateRequest";
import { recipeValidation } from "./recipeValidation";

const router = Router();

router.post(
  "/create-new-recipe",
  validateRequest(recipeValidation.createNewRecipe),
  createNewRecipe
);
