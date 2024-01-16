import { Router } from "express";
import { recipeRoutes } from "../app/recipe/recipeRoutes";
import { commentRoutes } from "../app/comment/commentRoutes";
import { feedbacksRoutes } from "../app/feedback/feedbackRoutes";
const router = Router();

router.use("/recipes", recipeRoutes);

router.use("/comments", commentRoutes);

router.use("/feedbacks", feedbacksRoutes);

export const globalRoutes = router;
