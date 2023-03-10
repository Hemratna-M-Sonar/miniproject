import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/authMiddleware.js';

// route level middleware - to protect routes
router.use("/changepassword", checkUserAuth);
router.use("/loggeduser", checkUserAuth);

//public routes

router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);
router.post("/send-reset-password-email", UserController.sendUserPasswordResetEmail);
router.post("/reset-password/:id/:token", UserController.userPasswordReset);
router.post("/contact", UserController.contactUs);
router.post("", UserController.userBooking);

//private routes
router.post("/changepassword", UserController.changeUserPassword);
router.get("/loggeduser", UserController.loggedUser);

export default router;