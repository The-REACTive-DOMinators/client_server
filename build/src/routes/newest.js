"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newestRoutes = void 0;
const express_1 = require("express");
const newest_1 = require("../controllers/newest");
exports.newestRoutes = (0, express_1.Router)();
exports.newestRoutes.get('/', newest_1.newestController.getNewest);
