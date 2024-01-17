"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentValidation = void 0;
const zod_1 = require("zod");
const createNewComment = zod_1.z.object({
    body: zod_1.z.object({
        recipeId: zod_1.z.string({ required_error: "recipe id is required" }),
        comment: zod_1.z.string({ required_error: "comment is required" }),
    }),
});
exports.commentValidation = createNewComment;
