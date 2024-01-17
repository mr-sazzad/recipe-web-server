"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRoutes = void 0;
const express_1 = require("express");
const recipeController_1 = require("./recipeController");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const recipeValidation_1 = require("./recipeValidation");
const router = (0, express_1.Router)();
router.post("/create-new-recipe", (0, validateRequest_1.default)(recipeValidation_1.recipeValidation.createNewRecipe), recipeController_1.createNewRecipe);
router.get("/", recipeController_1.getAllRecipes);
router.get("/single-recipe/:id", recipeController_1.getSingleRecipe);
router.patch("/update-single-recipe/:id", (0, validateRequest_1.default)(recipeValidation_1.recipeValidation.updateSingleRecipe), recipeController_1.updateSingleRecipe);
router.delete("/delete-single-recipe/:id", recipeController_1.deleteSingleRecipe);
exports.recipeRoutes = router;
