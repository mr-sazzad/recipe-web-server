"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbacksRoutes = void 0;
const express_1 = require("express");
const feedbackController_1 = require("./feedbackController");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const feedbackValidation_1 = require("./feedbackValidation");
const router = (0, express_1.Router)();
router.post("/create-feedback", (0, validateRequest_1.default)(feedbackValidation_1.feedbackValidation), feedbackController_1.createFeedback);
router.get("/", feedbackController_1.getAllFeedbacks);
exports.feedbacksRoutes = router;
