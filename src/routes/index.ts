import { Router } from "express";
import { recipeRoutes } from "../app/recipe/recipeRoutes";
const router = Router();

router.use("/recipes", recipeRoutes);

export const globalRoutes = router;
