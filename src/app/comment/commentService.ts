import { Comment } from "@prisma/client";
import prisma from "../libs/prisma";
import ApiError from "../errors/apiErrors";

const createNewComment = async (data: Comment): Promise<Comment> => {
  const result = await prisma.comment.create({ data });

  if (!result) {
    throw new ApiError(500, "internal server error");
  }

  return result;
};

const getAllComments = async (): Promise<Comment[]> => {
  const result = await prisma.comment.findMany({});

  if (!result) {
    throw new ApiError(500, "internal server error");
  }

  return result;
};

export const commentServices = {
  createNewComment,
  getAllComments,
};
