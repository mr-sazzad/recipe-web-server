import { RequestHandler } from "express";
import { feedbackService } from "./feedbackService";

export const createFeedback: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;

    const result = await feedbackService.createFeedback(data);

    res.status(201).json({
      success: true,
      status: 201,
      message: "feedback created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllFeedbacks: RequestHandler = async (_, res, next) => {
  try {
    const result = await feedbackService.getAllFeedbacks();

    res.status(201).json({
      success: true,
      status: 201,
      message: "feedbacks retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
