import { RequestHandler } from "express";
import { commentServices } from "./commentService";

export const createNewComment: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await commentServices.createNewComment(data);

    res.status(201).json({
      success: true,
      status: 201,
      message: "comment created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllComments: RequestHandler = async (req, res, next) => {
  try {
    const result = await commentServices.getAllComments();

    res.status(200).json({
      success: true,
      status: 200,
      message: "comment retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
