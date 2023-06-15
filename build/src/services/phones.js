"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phonesService = void 0;
const Phone_1 = require("../models/Phone");
function getById(id) {
    return Phone_1.Phones.findByPk(id);
}
exports.phonesService = {
    getById
};
