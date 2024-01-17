"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackValidation = void 0;
const zod_1 = require("zod");
exports.feedbackValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "name is required" }),
        feedback: zod_1.z.string({ required_error: "feedback is required" }),
        image: zod_1.z.string().optional(),
    }),
});
