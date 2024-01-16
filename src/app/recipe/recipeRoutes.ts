import { Router } from "express";
import {
  createNewRecipe,
  deleteSingleRecipe,
  getAllRecipes,
  getSingleRecipe,
  updateSingleRecipe,
} from "./recipeController";
import validateRequest from "../middleware/validateRequest";
import { recipeValidation } from "./recipeValidation";

const router = Router();

router.post(
  "/create-new-recipe",
  validateRequest(recipeValidation.createNewRecipe),
  createNewRecipe
);

router.get("/", getAllRecipes);

router.get("/single-recipe/:id", getSingleRecipe);

router.patch(
  "/update-single-recipe/:id",
  validateRequest(recipeValidation.updateSingleRecipe),
  updateSingleRecipe
);

router.delete("/delete-single-recipe/:id", deleteSingleRecipe);

export const recipeRoutes = router;
