"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoutes = void 0;
const express_1 = require("express");
const commentController_1 = require("./commentController");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const commentValidation_1 = require("./commentValidation");
const router = (0, express_1.Router)();
router.post("/create-new-comment", (0, validateRequest_1.default)(commentValidation_1.commentValidation), commentController_1.createNewComment);
router.get("/", commentController_1.getAllComments);
exports.commentRoutes = router;
