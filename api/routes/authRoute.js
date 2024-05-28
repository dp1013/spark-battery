import express from 'express';
import { registerController, loginController,testController} from '../controllers/authcontroller.js';
import { isAdmin, requireSignIn } from "../middleware/authmiddleware.js";
// Router object
const router = express.Router();

// Routing
// Register route
router.post('/register', registerController);

// Login route
router.post('/login', loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;

