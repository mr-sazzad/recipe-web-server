import { Router } from "express";
import { createNewComment, getAllComments } from "./commentController";
import validateRequest from "../middleware/validateRequest";
import { commentValidation } from "./commentValidation";

const router = Router();

router.post(
  "/create-new-comment",
  validateRequest(commentValidation),
  createNewComment
);

router.get("/", getAllComments);

export const commentRoutes = router;
