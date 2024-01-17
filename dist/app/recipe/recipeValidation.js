"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeValidation = void 0;
const zod_1 = require("zod");
const createNewRecipe = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "title is required" }),
        ingredients: zod_1.z.array(zod_1.z.string({ required_error: "ingredients is required" })),
        instructions: zod_1.z.string({ required_error: "instructions is required" }),
        image: zod_1.z.string().optional(),
    }),
});
const updateSingleRecipe = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        ingredients: zod_1.z.array(zod_1.z.string().optional()).optional(),
        instructions: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
    }),
});
exports.recipeValidation = {
    createNewRecipe,
    updateSingleRecipe,
};
