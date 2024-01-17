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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeServices = void 0;
const prisma_1 = __importDefault(require("../libs/prisma"));
const apiErrors_1 = __importDefault(require("../errors/apiErrors"));
const createNewRecipe = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.recipe.create({ data });
    if (!result) {
        throw new apiErrors_1.default(400, "recipe not created");
    }
    return result;
});
const getAllRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.recipe.findMany();
        if (!result) {
            throw new apiErrors_1.default(404, "recipes not found");
        }
        return result;
    }
    catch (err) {
        throw new apiErrors_1.default(404, "recipes not found");
    }
});
const getSingleRecipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.recipe.findUnique({
            where: {
                id,
            },
        });
        if (!result) {
            throw new apiErrors_1.default(404, "Recipe not found");
        }
        return result;
    }
    catch (err) {
        throw new apiErrors_1.default(404, "Recipe not found");
    }
});
const updateSingleRecipe = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isExisting = yield prisma_1.default.recipe.findUnique({
            where: {
                id,
            },
        });
        if (!isExisting) {
            throw new apiErrors_1.default(404, "Recipe not found");
        }
        const result = yield prisma_1.default.recipe.update({
            where: {
                id,
            },
            data,
        });
        if (!result) {
            throw new apiErrors_1.default(400, "recipe not updated");
        }
        return result;
    }
    catch (err) {
        throw new apiErrors_1.default(400, "recipe not updated");
    }
});
const deleteSingleRecipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isExisting = yield prisma_1.default.recipe.findUnique({
            where: {
                id,
            },
        });
        if (!isExisting) {
            throw new apiErrors_1.default(404, "recipe not found");
        }
        const result = yield prisma_1.default.recipe.delete({ where: { id } });
        if (!result) {
            throw new apiErrors_1.default(400, "recipe not deleted");
        }
        return result;
    }
    catch (err) {
        throw new apiErrors_1.default(400, "recipe not deleted");
    }
});
exports.recipeServices = {
    createNewRecipe,
    getAllRecipes,
    getSingleRecipe,
    updateSingleRecipe,
    deleteSingleRecipe,
};
