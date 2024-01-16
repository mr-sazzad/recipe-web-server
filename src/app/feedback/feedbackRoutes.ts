import { Router } from "express";
import { createFeedback, getAllFeedbacks } from "./feedbackController";
import validateRequest from "../middleware/validateRequest";
import { feedbackValidation } from "./feedbackValidation";

const router = Router();

router.post(
  "/create-feedback",
  validateRequest(feedbackValidation),
  createFeedback
);

router.get("/", getAllFeedbacks);

export const feedbacksRoutes = router;
