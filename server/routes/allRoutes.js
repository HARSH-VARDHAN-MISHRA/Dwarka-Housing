const express = require('express');
const router = express.Router();

// Controllers
const {createProperty , getPropertyById, updateProperty, deleteProperty, getProperties, updatePropertyStatus, getAllProperty } = require('../controlers/property.controler');
// const userController = require('../controlers/user.controler');
const locationController = require('../controlers/location.contoler');
const upload = require('../middlewares/upload'); // The Cloudinary multer setup


// Middleware
const authenticate = require('../middlewares/auth');
const authorizeRoles = require('../middlewares/roleauth');

// Property Routes
router.post('/create-property',  upload.array('images', 10), createProperty); // Allow up to 10 images to be uploaded

router.get('/get-property-by-id/:id', getPropertyById);
router.get('/get-all-properties', getAllProperty);
router.put('/update-property/:id',  upload.array('images', 10), updateProperty);
router.delete('/delete-property/:id',  deleteProperty);
router.get('/get-properties-by-query', getProperties);
router.patch('/properties/:id/status',  updatePropertyStatus);

// User Routes
// router.post('/register', userController.registerUser);
// router.post('/login', userController.loginUser);
// router.get('/users/:id', authenticate, authorizeRoles('Admin'), userController.getUserById);
// router.get('/vendors', authenticate, authorizeRoles('Admin'), userController.getVendors);
// router.delete('/users/:id', authenticate, authorizeRoles('Admin'), userController.deleteUser);

// Location Routes
router.post('/create-location', locationController.createLocation);
// router.get('/locations/:id', locationController.getLocationById);
router.get('/get-all-location', locationController.getAllLocation);
router.get('/get-locations-by-query', locationController.getLocations);
router.put('/update-location/:id', locationController.updateLocation);
router.delete('/delete-location/:id', locationController.deleteLocation);

// // -- Authentication ---- 
// router.post("/register", userController.register) // create Account

// router.post('/Password-change-request', userController.PasswordChangeRequest);
// router.post('/Resend-Otp', userController.ResendOtp);
// router.post('/Verify-sign-Otp', userController.verifyOtpForSignIn);
// router.post('/resend-sign-Otp', userController.ResendSignOtp);
// router.post('/Verify-Otp/:email', userController.VerifyOtp)

// router.post("/login", userController.LoginUser);
// router.post("/admin-login", userController.LoginAdmin);
// router.get("/all-users", userController.getAllUsers);

module.exports = router;
