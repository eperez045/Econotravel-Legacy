"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/user/userController"));
const authHandler_1 = __importDefault(require("../middleware/authHandler"));
const jwHandler_1 = __importDefault(require("../middleware/jwHandler"));
const router = (0, express_1.default)();
router.post('/user', authHandler_1.default.encryptPassword, userController_1.default.saveUser);
router.post('/user/login', authHandler_1.default.validateUser, userController_1.default.login);
router.get('/user/all', jwHandler_1.default.validateToken, userController_1.default.getAllUsers);
router.put('/user/:id/experience/:idExperiencia', jwHandler_1.default.validateToken, userController_1.default.getAllUsers);
//router.get('/user/register')
exports.default = router;
