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
exports.getAllComments = exports.createNewComment = void 0;
const commentService_1 = require("./commentService");
const createNewComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield commentService_1.commentServices.createNewComment(data);
        res.status(201).json({
            success: true,
            status: 201,
            message: "comment created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createNewComment = createNewComment;
const getAllComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield commentService_1.commentServices.getAllComments(id);
        res.status(200).json({
            success: true,
            status: 200,
            message: "comment retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllComments = getAllComments;
