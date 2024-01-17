"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const apiErrors_1 = __importDefault(require("../errors/apiErrors"));
const library_1 = require("@prisma/client/runtime/library");
const validationError_1 = __importDefault(require("../errors/validationError"));
const zodError_1 = __importDefault(require("../errors/zodError"));
const PrismaClientError_1 = __importDefault(require("../errors/PrismaClientError"));
const node_env = process.env.NODE_ENV || "development";
const globalErrorHandler = (error, req, res, next) => {
    node_env === "development" && console.log(`globalErrorHandler ->`, { error });
    let statusCode = 500;
    let message = "Something went wrong !";
    let errorMessages = [];
    if (error instanceof library_1.PrismaClientValidationError) {
        const simplifiedError = (0, validationError_1.default)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error instanceof zod_1.ZodError) {
        const simplifiedError = (0, zodError_1.default)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error instanceof library_1.PrismaClientKnownRequestError) {
        const simplifiedError = (0, PrismaClientError_1.default)(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error instanceof apiErrors_1.default) {
        statusCode = error === null || error === void 0 ? void 0 : error.statusCode;
        message = error.message;
        errorMessages = (error === null || error === void 0 ? void 0 : error.message)
            ? [
                {
                    path: "",
                    message: error === null || error === void 0 ? void 0 : error.message,
                },
            ]
            : [];
    }
    else if (error instanceof Error) {
        message = error === null || error === void 0 ? void 0 : error.message;
        errorMessages = (error === null || error === void 0 ? void 0 : error.message)
            ? [
                {
                    path: "",
                    message: error === null || error === void 0 ? void 0 : error.message,
                },
            ]
            : [];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: node_env !== "production" ? error === null || error === void 0 ? void 0 : error.stack : undefined,
    });
};
exports.default = globalErrorHandler;
