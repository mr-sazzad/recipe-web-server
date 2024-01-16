import { Feedback } from "@prisma/client";
import prisma from "../libs/prisma";
import ApiError from "../errors/apiErrors";

const createFeedback = async (data: Feedback): Promise<Feedback> => {
  const result = await prisma.feedback.create({ data });

  if (!result) {
    throw new ApiError(400, "feedback not created");
  }

  return result;
};

const getAllFeedbacks = async (): Promise<Feedback[]> => {
  const result = await prisma.feedback.findMany();

  if (!result) {
    throw new ApiError(404, "feedback not founc");
  }

  return result;
};

export const feedbackService = {
  createFeedback,
  getAllFeedbacks,
};
