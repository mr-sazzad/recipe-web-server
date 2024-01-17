"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleRecipe = exports.updateSingleRecipe = exports.getSingleRecipe = exports.getAllRecipes = exports.createNewRecipe = void 0;
const recipeService_1 = require("./recipeService");
const createNewRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log(req.body, "data");
        const result = yield recipeService_1.recipeServices.createNewRecipe(data);
        res.status(201).json({
            success: true,
            status: 201,
            message: "recipe created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createNewRecipe = createNewRecipe;
const getAllRecipes = (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield recipeService_1.recipeServices.getAllRecipes();
        res.status(200).json({
            success: true,
            status: 200,
            message: "all recipes retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllRecipes = getAllRecipes;
const getSingleRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield recipeService_1.recipeServices.getSingleRecipe(id);
        res.status(200).json({
            success: true,
            status: 200,
            message: "recipe retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleRecipe = getSingleRecipe;
const updateSingleRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = yield recipeService_1.recipeServices.updateSingleRecipe(id, data);
        res.status(200).json({
            success: true,
            status: 200,
            message: "recipe updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateSingleRecipe = updateSingleRecipe;
const deleteSingleRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield recipeService_1.recipeServices.deleteSingleRecipe(id);
        res.status(200).json({
            success: true,
            status: 200,
            message: "recipe deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteSingleRecipe = deleteSingleRecipe;
