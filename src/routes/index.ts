import { Router } from "express";
import { recipeRoutes } from "../app/recipe/recipeRoutes";
import { commentRoutes } from "../app/comment/commentRoutes";
const router = Router();

router.use("/recipes", recipeRoutes);

router.use("/comments", commentRoutes);

export const globalRoutes = router;
